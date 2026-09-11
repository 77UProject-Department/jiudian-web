@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo 请在浏览器打开 http://localhost:4173/
echo 关闭此窗口将停止预览。
node scripts/server.mjs
pause
