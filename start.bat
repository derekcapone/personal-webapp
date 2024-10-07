@echo off

rem Start Flask server in a new command prompt window
start cmd /k python python/src/app.py

cd web-app
rem Start React frontend
npm start