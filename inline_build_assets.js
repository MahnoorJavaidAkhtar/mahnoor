const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, 'my-website', 'build');
const indexPath = path.join(buildDir, 'index.html');
if (!fs.existsSync(indexPath)) { console.error('index.html not found'); process.exit(1); }
let html = fs.readFileSync(indexPath, 'utf8');

// Inline first CSS link
const cssLinkRegex = /<link[^>]*href="(\/assets\/css\/[^\"]+)"[^>]*>/i;
const cssMatch = html.match(cssLinkRegex);
if (cssMatch) {
  const cssRel = cssMatch[1];
  const cssFile = path.join(buildDir, cssRel.replace(/\//g, path.sep));
  if (fs.existsSync(cssFile)) {
    const css = fs.readFileSync(cssFile, 'utf8');
    const styleTag = `<style>\n${css}\n</style>`;
    html = html.replace(cssLinkRegex, styleTag);
    console.log('Inlined CSS', cssRel);
  } else console.warn('CSS file not found', cssFile);
}

// Replace img src occurrences in the index.html
const imgRegex = /<img([^>]*?)src="(\/img\/[^"]+)"([^>]*?)>/ig;
html = html.replace(imgRegex, (m, g1, src, g3) => {
  const imgPath = path.join(buildDir, src.replace(/\//g, path.sep));
  if (!fs.existsSync(imgPath)) {
    console.warn('Image not found for inlining:', imgPath);
    return m;
  }
  const buf = fs.readFileSync(imgPath);
  const ext = path.extname(imgPath).slice(1);
  const mime = ext === 'svg' ? 'image/svg+xml' : (ext === 'jpg' ? 'image/jpeg' : `image/${ext}`);
  const data = `data:${mime};base64,${buf.toString('base64')}`;
  console.log('Inlined image', src);
  return `<img${g1}src="${data}"${g3}>`;
});

// Also inline assets/images used in the body (some pages reference /assets/images/... in html)
const assetsImgRegex = /<img([^>]*?)src="(\/assets\/images\/[^"]+)"([^>]*?)>/ig;
html = html.replace(assetsImgRegex, (m, g1, src, g3) => {
  const imgPath = path.join(buildDir, src.replace(/\//g, path.sep));
  if (!fs.existsSync(imgPath)) { console.warn('Asset image not found for inlining:', imgPath); return m; }
  const buf = fs.readFileSync(imgPath);
  const ext = path.extname(imgPath).slice(1);
  const mime = ext === 'svg' ? 'image/svg+xml' : (ext === 'jpg' ? 'image/jpeg' : `image/${ext}`);
  const data = `data:${mime};base64,${buf.toString('base64')}`;
  console.log('Inlined asset image', src);
  return `<img${g1}src="${data}"${g3}>`;
});

fs.writeFileSync(indexPath, html, 'utf8');
console.log('Wrote inlined index.html');
