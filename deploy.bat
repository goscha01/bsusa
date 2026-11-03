@echo off
echo Starting BSUSA Website Deployment...
powershell -ExecutionPolicy Bypass -File deploy-s3.ps1
pause
