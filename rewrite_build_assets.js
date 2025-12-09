const fs = require('fs');
const path = require('path');

if (!process.argv[2]) {
  console.error('Usage: node rewrite_build_assets.js <deploymentHost>');
  console.error('Example: node rewrite_build_assets.js mahnoor-c9cn6qr1v-mahnoor-javaids-projects.vercel.app');
  process.exit(2);
}
const host = process.argv[2];
const buildDir = path.join(__dirname, 'my-website', 'build');

function walkFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      walkFiles(full);
    } else if (ent.isFile()) {
      try {
        const ext = path.extname(ent.name).toLowerCase();
        if (['.html', '.js', '.css', '.json', '.xml'].includes(ext)) {
          let s = fs.readFileSync(full, 'utf8');
          // Replace src and href occurrences that start with "/img/" or "/assets/"
          s = s.replace(/(src=|href=)\"\/(img|assets)\//g, `$1\"https://${host}/$2/`);
          s = s.replace(/(url\()\'?\"?\/(img|assets)\//g, `$1https://${host}/$2/`);
          // Replace raw occurrences of "/assets/images/" etc
          s = s.replace(/(\")\/assets\/images\//g, `$1https://${host}/assets/images/`);
          fs.writeFileSync(full, s, 'utf8');
        }
      } catch (err) {
        console.warn('Skipping', full, err && err.message);
      }
    }
  }
}

console.log('Rewriting build files to point asset URLs to host:', host);
walkFiles(buildDir);
console.log('Done.');
