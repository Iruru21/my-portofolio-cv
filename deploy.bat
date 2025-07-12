@echo off
echo 🚀 Starting deployment process...

REM Check if vercel CLI is installed
vercel --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Vercel CLI is not installed. Installing...
    npm install -g vercel
)

REM Build the frontend locally to check for errors
echo 🔧 Building frontend locally...
cd frontend
npm install
npm run build

if %errorlevel% equ 0 (
    echo ✅ Frontend build successful!
) else (
    echo ❌ Frontend build failed!
    exit /b 1
)

cd ..

REM Deploy to Vercel
echo 🚀 Deploying to Vercel...
vercel --prod

echo ✅ Deployment completed!
pause 