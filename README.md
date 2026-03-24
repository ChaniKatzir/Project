# Managing to Manage
Full-stack web application designed to help institutions efficiently manage their operations. It acts as a digital management system, enabling administrators, staff, and students to organize data, track activities, and access information in a simple and easy way.

The system combines modern web technologies with a scalable architecture to deliver a smooth and user-friendly experience.

## Project Goals
Provide an easy and efficient way to manage institutional data
Enable financial tracking (income & expenses)
Monitor attendance of staff and students
Offer advanced search capabilities across stored content
Support students with smart search over recorded lectures
Deliver a responsive and intuitive user experience

## Tech stack
###  Frontend
React
MUI (Material UI)
Hooks & Functional Components
### Backend
Node.js
Express.js
### Database
MySQL
Sequelize ORM
### AI Component
Python (for data processing and intelligent features)
### Tools & Utilities
Git & GitHub
Postman (API testing)
dotenv (.env configuration)
CORS (security handling)

## System Architecture
The application follows a layered architecture:
GUI (Client Side) – React-based user interface
Controller (Business Logic) – Handles application logic
DAL (Data Access Layer) – Manages communication with the database
Models – Define database structure and relationships

## User Roles
### Admin
Manage institution data
Track finances
Monitor attendance
Manage lecture repository
### Staff
Attendance tracking
Access relevant data
### Students
Access lectures
Use smart search functionality

## Key Features
📊 Financial management (income & expenses)
🕒 Attendance tracking system
🔍 Advanced search across stored lectures
🧠 Smart lecture-based assistance
🔐 Role-based access control
📱 Responsive design
🌐 API integration with fallback to local DB storage

## Installation & Setup
### 1. Clone the repository
git clone <your-repo-url>
cd managing-to-manage
### 2. Install dependencies
npm install
### 3. Setup environment variables
Create a .env file:
DB_HOST=your_host
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=your_db
PORT=5000
### 4. Run the project
npm start
