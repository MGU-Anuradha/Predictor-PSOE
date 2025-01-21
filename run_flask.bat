@echo off
:: Navigate to your project directory 
cd /d "%~dp0\backend"

:: Activate the virtual environment
call venv\Scripts\activate

:: Start the Flask app in a new terminal
start cmd /k "python app.py"

:: Navigate to the frontend directory
cd /d "%~dp0\frontend"

:: Start the React app in a new terminal
start cmd /k "npm start"

:: Exit the current batch file
exit
