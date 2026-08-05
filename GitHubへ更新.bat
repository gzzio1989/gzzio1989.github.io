@echo off
setlocal
cd /d "%~dp0"

echo ============================================
echo   サイト（gzzio1989.github.io）を更新します
echo ============================================
echo.

where git >nul 2>nul
if errorlevel 1 (
  echo [中止] git が見つかりません。
  pause
  exit /b 1
)

if not exist ".git" (
  echo [中止] このフォルダは git の管理下ではありません。
  pause
  exit /b 1
)

echo GitHub の今の中身を取ってきます...
git fetch origin main
if errorlevel 1 (
  echo [中止] fetch に失敗しました。ネットワークかログインを確認してください。
  pause
  exit /b 1
)

rem 履歴は書き換えない（force push はしない）。
git reset --mixed origin/main
git add -A

echo.
echo ========== これから GitHub へ上げるもの ==========
git status --short
echo ==================================================
echo.
echo 中身を確認してください。
echo   よければ何かキーを押す  → コミットして push します
echo   やめる場合             → このウィンドウを閉じてください
pause

git commit -m "製品ページを v2.9.0 へ更新（セッションモード）"
if errorlevel 1 (
  echo [中止] コミットするものがありませんでした。
  pause
  exit /b 1
)

git push origin main
if errorlevel 1 (
  echo.
  echo [失敗] push に失敗しました。上のメッセージを見てください。
  pause
  exit /b 1
)

echo.
echo 完了しました。反映まで1分ほどかかります。
echo   https://gzzio1989.github.io/apps/vocalgzzio/
pause
