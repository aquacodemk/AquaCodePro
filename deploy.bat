@echo off
echo ==========================================
echo PODGOTOVKA NA AQUA CODE ZA GITHUB...
echo ==========================================
echo.
echo 1. Brisenje na starata "dist" papka...
if exist dist (
    rmdir /s /q dist
)
echo.
echo 2. Kreiranje na nov "Build" (Ova trae malku)...
call npm run build
echo.
echo 3. Build zavrsen uspesno!
echo.
echo INSTRUKCII ZA GITHUB:
echo ------------------------------------------
echo 1. Odete na vasiot GitHub repo (AquaCode).
echo 2. IZBRISHETE gi site fajlovi tamu (osven .git).
echo 3. Prikachete gi SITE fajlovi OD vnatresnosta na "dist".
echo.
echo KLIKNETE BILO KOE KOPCHE ZA DA SE OTVORI PAPKATA...
pause
start dist
exit