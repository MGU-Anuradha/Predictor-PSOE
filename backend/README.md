# PSOE-Predictor Backend

This is the backend for the MotorMind project, which serves a machine learning model to predict the Position Sensor Offset Error (PSOE) in Permanent Magnet Synchronous Motors (PMSMs). The backend is built using Python, Flask, and a virtual environment. It allows you to interact with the model through APIs.

## Prerequisites

Before setting up and running the backend, ensure you have the following installed:

- **Python 3.x**: Make sure Python is installed on your system. [Download Python](https://www.python.org/downloads/)
- **Git**: You’ll need Git to clone the repository if you don’t have it already. [Download Git](https://git-scm.com/downloads)
- **Text Editor/IDE**: Use any text editor or IDE such as Visual Studio Code or PyCharm for working with the backend.

---

## Setup Instructions

Follow the steps below to set up and run the backend on your local machine.

### 1. Clone the Repository

Clone the repository to your local machine using Git and Navigate to the Project Folder
Once the repository is cloned, navigate to the motormind-backend folder. After that setup the virtual environment.

### 2. Set Up a Virtual Environment
It's recommended to use a virtual environment to isolate your project dependencies. You can create a virtual environment using the following command:

```bash
python -m venv venv
```

### 3.Activate the Virtual Environment
After creating the virtual environment, you need to activate it. Depending on your operating system, the activation command is different:

On Windows:
```bash
venv\Scripts\activate
```
On macOS/Linux:
```bash
source venv/bin/activate
```

When activated, your command prompt will show (venv) at the beginning.

### 4. Install Dependencies
Install all required Python packages listed in the requirements.txt file:

```bash
pip install -r requirements.txt
```

The requirements.txt file should include the necessary dependencies for Flask and any other packages required for your backend.

### 5. Run the Flask App
To run the backend, you can use the provided .bat file.

On Windows:

Simply double-click the `run_flask.bat` file in the directory. This will automatically activate the virtual environment and start the Flask app.

Alternatively, you can manually start the Flask app by running the following command in the terminal (after activating the virtual environment):

```bash
python app.py
```

This will start the Flask development server on http://127.0.0.1:5000.

---

## Accessing the API

Once the server is running, you can interact with the backend via the API. You can test the endpoints using tools like Postman or directly from your front-end application.

The server will run in debug mode, which means you can see detailed error messages if something goes wrong.

## Project Structure

- `app.py`: The main Flask app that runs the backend server.
- `run_flask.bat`: A batch script to activate the virtual environment and run the Flask app on Windows.
- `requirements.txt`: Lists the Python packages required to run the backend.
- `venv/`: Contains the virtual environment with isolated dependencies.

## Troubleshooting

If the Flask server doesn’t start:

- Ensure that you have activated the virtual environment.
- Check if all dependencies were installed successfully by running pip install -r requirements.txt again.

If you get errors related to missing packages:

- Make sure you are in the correct virtual environment and that it is activated.
