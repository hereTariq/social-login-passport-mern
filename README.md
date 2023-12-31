# Social Login Using MERN and Passport

<!-- ![Project Image](project-image-url) -->

## Description

This project demonstrates how to implement social login functionality using the MERN (MongoDB, Express.js, React, Node.js) stack and the Passport library. It allows users to log in or sign up using their Google, GitHub, or Facebook accounts.

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Technologies Used](#technologies-used)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/hereTariq/social-login-passport-mern.git
    ```

2. Navigate to the project directory:

    ```bash
    cd social-login-passport-mern
    ```

3. Create a .env file in the server directory with your environment variables

    ```bash
    MONGO_URI=your-mongodb-connection-string
    GOOGLE_CLIENT_ID=your-google-client-id
    GOOGLE_CLIENT_SECRET=your-google-client-secret
    GOOGLE_CALLBACK_URL=/auth/google/callback
    GITHUB_CLIENT_ID=your-github-client-id
    GITHUB_CLIENT_SECRET=your-github-client-secret
    GITHUB_CALLBACK_URL=/auth/github/callback
    FACEBOOK_APP_ID=your-facebook-app-id
    FACEBOOK_APP_SECRET=your-facebook-app-secret
    FACEBOOK_CALLBACK_URL=/auth/facebook/callback
    LOGIN_SUCCESS_URL=http://localhost:5173
    LOGIN_FAILURE_URL=http://localhost:5173/login
    ```

4. Install server dependencies

    ```bash
    cd server
    npm install
    ```

5. Start the backend server

    ```bash
    npm start
        or
    npm run dev
    ```

6. Install client dependencies

    ```bash
    cd client
    yarn
     or
    npm install
    ```

7. Start the client applicaiton

    ```bash
    yarn dev
      or
    npm run dev
    ```

## Usage

Access the application by opening your web browser and navigating to http://localhost:5173.

Click on the "Google," "GitHub," or "Facebook" buttons to log in or sign up using your social media account.

Once logged in, you can access user-specific features or customize the behavior of your application based on the user's social profile.

## Technologies Used

```
MongoDB
Express.js
React
Node.js
Passport.js
OAuth 2.0 and OAuth 2.0 providers (Google, GitHub, Facebook)
```
