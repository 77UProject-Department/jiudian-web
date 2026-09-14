import { mkdir, copyFile, cp, readFile, writeFile, access } from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
const root = process.cwd();
const output = path.join(root, 'dist');
const context = { window: {} };
vm.runInNewContext(await readFile('site.config.js', 'utf8'), context);
const config = context.window.SITE_CONFIG;
if (!config?.company || config.services.length !== 8) throw new Error('品牌配置不完整');
const assets = new Set([config.logo, config.hero.image, ...config.gallery.map(x => x.image)]);
for (const asset of assets) await access(path.join(root, asset.replace(/^\//, '')));
await mkdir(output, { recursive: true });
await Promise.all(['index.html', 'site.config.js'].map(file => copyFile(file, path.join(output, file))));
await Promise.all(['src', 'assets'].map(dir => cp(dir, path.join(output, dir), { recursive: true })));
const html = await readFile('index.html', 'utf8');
const titles = {about:'关于我们',shop:'空间展示',teamwork:'合作联营',contact:'联系我们'};
for (const [route, title] of Object.entries(titles)) {
  await mkdir(path.join(output, route), { recursive: true });
  await writeFile(path.join(output, route, 'index.html'), html.replace(/<title>.*?<\/title>/, `<title>${title}｜${config.brand}</title>`));
}
await writeFile(path.join(output, '404.html'), html);
console.log('静态官网已生成：dist；5 个页面；所有配置图片存在。');
