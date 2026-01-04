@echo off
cd /d "%~dp0"
echo ==========================================
echo PRAVIME CISTA INSTALACIJA NA AQUA CODE...
echo ==========================================
echo.
echo 1. Brisenje na stari biblioteki (ako postojat)...
if exist node_modules (
    rmdir /s /q node_modules
)
if exist package-lock.json (
    del package-lock.json
)

echo.
echo 2. Instaliranje na biblioteki (Ova trae 1-2 minuti)...
echo Ve molime pocekajte...
call npm install

echo.
echo 3. Startuvanje na aplikacijata...
echo NE GO ZATVORAJTE OVOJ PROZOREC!
npm run dev
pause