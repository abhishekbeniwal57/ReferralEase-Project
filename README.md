# ReferralEase

ReferralEase is a job referral platform that connects job seekers with employees at companies for referral opportunities. Built with React for the frontend and Spring Boot for the backend, the platform allows job seekers to request referrals and employees to manage these requests efficiently.

## Features

- **Job Seeker Functions:**
  - Manage job seeker profiles.
  - Request referrals from employees.
  - View and edit personal information.
- **Employee Functions:**
  - View and manage referral requests.
  - Update employee profiles.
- **Admin Functions:**
  - Manage users and roles (Future feature).
- **Real-time Notifications:**
  - Receive notifications for new referral requests via WebSocket.
  - Email notifications for referral requests using SendGrid.

## Technology Stack

- **Frontend:**
  - React.js
  - React Context API
  - Axios for HTTP requests
- **Backend:**
  - Spring Boot
  - Spring Security
  - Hibernate
  - MySQL
- **Tools & Libraries:**
  - Maven
  - WebSocket
  - SendGrid for email notifications
  - Reactstrap for UI components

## Installation

### Frontend

1. Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

### Backend

1. Navigate to the `backend` directory:
    ```bash
    cd backend
    ```

2. Ensure you have Java 17 or above and Maven installed.

3. Build the project:
    ```bash
    mvn clean install
    ```

4. Run the backend application:
    ```bash
    mvn spring-boot:run
    ```

## Configuration

1. **Frontend Configuration:**
   - Ensure the API endpoints in the `frontend/src/contexts/AuthContext.js` are correctly set to match the backend server URL.
2. **Backend Configuration:**
   - Configure database settings in `src/main/resources/application.properties`.
   - Set up SendGrid API key in your environment variables for email notifications.

## Usage

1. Open the frontend application in your browser (`http://localhost:3000` by default).
2. Register or log in as a job seeker or employee.
3. Navigate through the dashboard to manage referrals or profile information.

## Contributing

If you wish to contribute to the development of ReferralEase, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
    ```bash
    git checkout -b feature/your-feature
    ```

3. Commit your changes:
    ```bash
    git add .
    git commit -m "Add your message here"
    ```

4. Push to the branch:
    ```bash
    git push origin feature/your-feature
    ```

5. Open a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or support, please contact [abhishekbeniwal57@example.com](mailto:abhishekbeniwal57@example.com).
