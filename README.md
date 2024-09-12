ReferralEase
ReferralEase is a job referral platform that connects job seekers with employees at companies for referral opportunities. Built with React for the frontend and Spring Boot for the backend, the platform allows job seekers to request referrals and employees to manage these requests efficiently.

Features
Job Seeker Functions:

Manage job seeker profiles.
Request referrals from employees.
View and edit personal information.
Employee Functions:

View and manage referral requests.
Update employee profiles.
Admin Functions:

Manage users and roles (Future feature).
Real-time Notifications:

Receive notifications for new referral requests via WebSocket.
Email notifications for referral requests using SendGrid.
Technology Stack
Frontend:

React.js
React Context API
Axios for HTTP requests
Backend:

Spring Boot
Spring Security
Hibernate
MySQL
Tools & Libraries:

Maven
WebSocket
SendGrid for email notifications
Reactstrap for UI components
Installation
Frontend
Navigate to the frontend directory:

bash
Copy code
cd frontend
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Backend
Navigate to the backend directory:

bash
Copy code
cd backend
Ensure you have Java 17 or above and Maven installed.

Build the project:

bash
Copy code
mvn clean install
Run the backend application:

bash
Copy code
mvn spring-boot:run
Configuration
Frontend Configuration:

Ensure the API endpoints in the frontend/src/contexts/AuthContext.js are correctly set to match the backend server URL.
Backend Configuration:

Configure database settings in src/main/resources/application.properties.
Set up SendGrid API key in your environment variables for email notifications.
Usage
Open the frontend application in your browser (http://localhost:3000 by default).
Register or log in as a job seeker or employee.
Navigate through the dashboard to manage referrals or profile information.
Contributing
If you wish to contribute to the development of ReferralEase, please follow these steps:

Fork the repository.
Create a new branch for your feature or bug fix:
bash
Copy code
git checkout -b feature/your-feature
Commit your changes:
bash
Copy code
git add .
git commit -m "Add your message here"
Push to the branch:
bash
Copy code
git push origin feature/your-feature
Open a pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
For any questions or support, please contact abhishekbeniwal57@gmail.com.

