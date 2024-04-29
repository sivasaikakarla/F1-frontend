# F1 Gas Agency

Welcome to F1 Gas Agency, a booking platform built using MERN stack.The website mainly offers a set of features for the users to register and book their cylinders and to track their order
There are 3 types of users:
-Customer
-Admin
-Delivery Boy

## How to Run

To get started, follow these steps:

1. Download the zip file

2. Open your terminal and navigate to the respective directory.

3. Install Node.js modules for both the frontend and backend:
cd frontend
npm install

cd backend
npm install

4. Start the development server:

cd frontend
npm start

cd backend
npm run dev


5. Access the website at [http://localhost:3000](http://localhost:3000).

## Features

### General Features

- All users can view the website and make use of avalaible functionalities.
- In order to book a cylinder he needs to first have a new connection
- In order to signup otp verification needs to be done.
- Implemtation of redux-toolkit

### Customer Features

- Customers have their own dashboard.
- User can place a request for a new connection to the admin .
- Once the connection is approved user will be able to book their cylinders
- User can check the status of his order and also the booking history.
- User can also register the complaint which will be viewed by admin.

### Delivery Boy Features

- Delivery views the orders which only belong to his area.
- Completion of order and updating the status
- A graph visualization on number of orders pending/completed.
- Notify the customer once the order is ready for delivery

### Admin Features

- User and employee management including editing and deleting.
- View the total orders and complaints issued by users
- Approval of new connection requests.
- Approval of delivery boy requests
- Downloading of csv file of the order table
- Admin Can send mails to all users to share any important messages.