@echo off
pushd "%~dp0"
echo Starting DSPAUT Download Website Development Server...
echo.
echo [INFO] This window must remain open while viewing the website.
echo [INFO] The local server will run on: http://localhost:4322
echo [INFO] Press Ctrl+C to stop the server when you are finished.
echo.
cmd /c npm run dev
popd
pause
