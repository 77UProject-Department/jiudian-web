import http from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const port = Number(process.env.PORT || 4173);
const routes = new Set(['/', '/about', '/shop', '/teamwork', '/contact']);
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp' };
const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    const pathname = decodeURIComponent(url.pathname).replace(/\/+$/, '') || '/';
    let relative = routes.has(pathname) || pathname === '/index.html' ? 'index.html' : pathname.slice(1);
    if (relative !== 'index.html' && relative !== 'site.config.js' && !relative.startsWith('src/') && !relative.startsWith('assets/')) {
      res.writeHead(404); res.end('Not found'); return;
    }
    const resolved = path.resolve(root, relative);
    if (!resolved.startsWith(root + path.sep)) { res.writeHead(403); res.end(); return; }
    const data = await readFile(resolved);
    res.writeHead(200, { 'Content-Type': types[path.extname(resolved)] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
    res.end(data);
  } catch { res.writeHead(404); res.end('Not found'); }
});
server.listen(port, '127.0.0.1', () => console.log(`柒柒游官网预览：http://localhost:${port}`));
