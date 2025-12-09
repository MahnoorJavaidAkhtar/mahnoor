const fs = require('fs');
const path = require('path');
const https = require('https');

function walk(dir, base) {
  base = base || '';
  const items = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const textExts = new Set([
    '.html',
    '.htm',
    '.css',
    '.js',
    '.mjs',
    '.json',
    '.map',
    '.txt',
    '.xml',
    '.svg',
    '.wasm',
    '.webmanifest'
  ]);
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    const rel = path.posix.join(base, ent.name);
    if (ent.isDirectory()) {
      items.push(...walk(full, rel));
    } else if (ent.isFile()) {
      const buf = fs.readFileSync(full);
      const ext = path.extname(ent.name).toLowerCase();
      // Send text files as UTF-8 so Vercel serves them correctly instead of literal base64 text
      if (textExts.has(ext)) {
        items.push({ file: '/' + rel.replace(/\\/g, '/'), data: buf.toString('utf8') });
      } else {
        // Binary files: keep base64 encoding
        items.push({ file: '/' + rel.replace(/\\/g, '/'), data: buf.toString('base64') });
      }
    }
  }
  return items;
}

function apiRequest(pathname, method, body, token) {
  return new Promise((resolve, reject) => {
    const b = body ? JSON.stringify(body) : '';
    const req = https.request(
      {
        hostname: 'api.vercel.com',
        path: pathname,
        method: method,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(b),
        },
      },
      (res) => {
        let raw = '';
        res.setEncoding('utf8');
        res.on('data', (c) => (raw += c));
        res.on('end', () => {
          try {
            const parsed = raw ? JSON.parse(raw) : {};
            if (res.statusCode >= 200 && res.statusCode < 300) return resolve(parsed);
            const err = new Error(`HTTP ${res.statusCode}: ${raw}`);
            err.status = res.statusCode;
            err.body = parsed;
            reject(err);
          } catch (err) {
            reject(err);
          }
        });
      }
    );
    req.on('error', (e) => reject(e));
    if (b) req.write(b);
    req.end();
  });
}

async function apiRequestWithRetry(pathname, method, body, token, retries = 3, backoff = 500) {
  for (let attempt = 1; attempt <= retries; ++attempt) {
    try {
      return await apiRequest(pathname, method, body, token);
    } catch (err) {
      const isNetworkErr = err && (err.code === 'ECONNRESET' || err.code === 'ECONNREFUSED' || err.code === 'ETIMEDOUT');
      if (attempt === retries || !isNetworkErr) throw err;
      console.warn(`apiRequest failed (attempt ${attempt}) with ${err.message || err}. Retrying in ${backoff}ms...`);
      await new Promise((r) => setTimeout(r, backoff));
      backoff *= 2;
    }
  }
}

(async () => {
  try {
    const token = process.env.VERCEL_TOKEN;
    if (!token) {
      console.error('ERROR: VERCEL_TOKEN environment variable not set.');
      process.exit(2);
    }

    const buildDir = path.join(__dirname, 'my-website', 'build');
    if (!fs.existsSync(buildDir)) {
      console.error('ERROR: build directory not found at', buildDir);
      console.error('Run `npm run build` in `my-website` first.');
      process.exit(3);
    }

    console.log('Collecting files from', buildDir);
    const files = walk(buildDir);
    console.log(`Collected ${files.length} files (first 10):`, files.slice(0, 10).map(f => f.file));

    const payload = {
      name: 'mahnoor',
      files: files,
      target: 'production'
    };

    console.log('Uploading deployment to Vercel (this may take some time)...');
    const deployRes = await apiRequestWithRetry('/v13/deployments', 'POST', payload, token, 4, 800);
    console.log('Deployment response:', deployRes && deployRes.url ? deployRes.url : JSON.stringify(deployRes));

    const deploymentId = deployRes && deployRes.id;
    const url = deployRes && deployRes.url;
    if (!deploymentId) {
      console.error('No deployment id returned. Full response:', deployRes);
      process.exit(4);
    }

    // Fetch deployment details to discover the project id
    let projectId = null;
    try {
      const deployDetails = await apiRequestWithRetry(`/v13/deployments/${deploymentId}`, 'GET', null, token, 3, 400);
      console.log('Deployment details fetched.');
      projectId = deployDetails && (deployDetails.projectId || (deployDetails.project && deployDetails.project.id));
      console.log('Derived projectId:', projectId);
    } catch (err) {
      console.warn('Could not fetch deployment details:', err && err.message ? err.message : err);
    }

    // Attempt to add domain to the project if we have a projectId
    const alias = 'mahnoor-one.vercel.app';
    if (projectId) {
      try {
        console.log(`Ensuring domain ${alias} exists on project ${projectId} ...`);
        // Create domain on project (may require DNS verification afterwards)
        const domainRes = await apiRequestWithRetry(`/v4/projects/${projectId}/domains`, 'POST', { name: alias }, token, 3, 400);
        console.log('Domain create/ensure response:', domainRes);
      } catch (err) {
        console.warn('Domain creation may have failed or require manual verification:', err && err.message ? err.message : err);
        if (err && err.body) console.warn('Details:', JSON.stringify(err.body));
      }
    } else {
      console.warn('No projectId available; skipping domain creation step. Alias may fail if domain is not added to the project.');
    }

    // Attempt to add alias
    try {
      console.log(`Creating alias ${alias} -> deployment ${deploymentId} ...`);
      const aliasRes = await apiRequestWithRetry('/v13/aliases', 'POST', { deploymentId, alias }, token, 3, 400);
      console.log('Alias created:', aliasRes);
    } catch (err) {
      console.error('Alias step failed (this may mean the domain is not authorized for this project or needs verification):', err.message || err);
      if (err && err.body) console.error('Details:', JSON.stringify(err.body));
    }

    console.log('\nSUCCESS. Deployment URL:', url ? `https://${url}` : deployRes);
    process.exit(0);
  } catch (err) {
    console.error('Deployment failed:', err && err.message ? err.message : err);
    if (err && err.body) console.error('Response body:', JSON.stringify(err.body));
    process.exit(1);
  }
})();
