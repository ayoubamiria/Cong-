# Congy Management System
## S5OUNA wena mo5i raw mo5ter


This project is a leave Management System built with React for the frontend and Node.js with Nest.js and MongoDB for the backend. It allows users to request leaves, view their leave history, view approved leaves on a calendar and consult their left days.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Backend Endpoints](#backend-endpoints)
- [Frontend Components](#frontend-components)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB

### Backend Setup
1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/conges-management-system.git
    cd conges-management-system/backend
    ```

2. Install backend dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file and add your MongoDB connection string:
    ```sh
    MONGODB_URI=your_mongodb_connection_string
    ```

4. Start the backend server:
    ```sh
    npm start
    ```

### Frontend Setup
1. Navigate to the frontend directory:
    ```sh
    cd ../frontend
    ```

2. Install frontend dependencies:
    ```sh
    npm install
    ```

3. Start the frontend development server:
    ```sh
    npm start
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Use the form to request leaves.
3. View your leave history and approved leaves on the calendar.

## Backend Endpoints

- **Create Leave Request**
  ```http
  POST /demande-conge/creeconge
