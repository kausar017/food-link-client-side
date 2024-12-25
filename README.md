# Assignment 11 - Food Donation Management System

This project is a web-based application for managing food donation requests, allowing users to post, view, and update food donation data. The system is built with a modern technology stack and provides a user-friendly interface for food donors and recipients.

## Features

1. **Food Donation Management:**
   - Add new food donation entries.
   - View a list of food donations.
   - Search and sort food donations based on name and expiry date.
   - View detailed information about a specific food donation.

2. **User Requests:**
   - Add and manage user-specific food requests.
   - View user requests by email.
   - Delete a specific user request.

3. **Food Update:**
   - Update the details of a food donation entry.

4. **Responsive Design:**
   - Optimized for both desktop and mobile devices.

## Technologies Used

- **Frontend:**
  - React.js
  - Tailwind CSS
  - Mamba UI

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB

- **Additional Packages:**
  - Axios
  - dotenv
  - MongoDB Driver

## Installation

### Prerequisites
- Node.js (version 22.11.0 or higher)
- MongoDB database

### Steps
1. Clone the repository:
   ```bash
   git clone [repository-link]
   ```

2. Navigate to the project folder:
   ```bash
   cd Assignment-11
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your environment variables:
   ```env
   DB_USER=your_db_username
   DB_PASS=your_db_password
   PORT=5000
   VITE_API_URL=http://localhost:5000
   ```

5. Start the server:
   ```bash
   npm run start
   ```

6. Navigate to the frontend directory and start the React application:
   ```bash
   cd frontend
   npm run dev
   ```

## API Endpoints

### Food Collection
- **POST** `/food` - Add a new food item.
- **GET** `/foodData` - Retrieve all food items.
- **GET** `/foodData/:id` - Retrieve details of a specific food item.
- **PATCH** `/foodData/:id` - Update a food item.

### User Requests
- **POST** `/myFood` - Add a new user request.
- **GET** `/myRequest` - Retrieve user requests by email.
- **GET** `/myRequest/:id` - Retrieve a specific user request.
- **DELETE** `/myRequest/:id` - Delete a specific user request.

## Error Handling
- Validations for required fields are implemented.
- Handles cases where no data is found for a specific query.
- Provides meaningful error messages for server or client-side issues.

## Deployment
1. Host the backend server on a cloud platform like Render or AWS.
2. Deploy the frontend application using services like Vercel or Netlify.
3. Configure environment variables on the hosting platform.

## Future Enhancements
- Implement user authentication.
- Add notification features for users.
- Include an analytics dashboard for donation trends.

## License
This project is open-source and available for anyone to use and modify.

---

Feel free to contact the project owner for any issues or contributions.
