# Express.js Application

This is a simple Express.js application that includes routes for user login and signup.

## Features

- CORS enabled
- JSON body parsing
- Static file serving
- Login and Signup routes
- Uses nodemon for autoreload

## Routes

- POST `/login`: Logs in a user. Expects a JSON body with user credentials. Responds with a JSON object.
- POST `/signup`: Signs up a new user. Expects a JSON body with user details. Responds with a JSON object.
- GET `/login`: A test route that responds with 'Hello World!'.

## Installation

1. Navigate to the project directory: `cd Backend`
2. Install dependencies: `npm install`
3. Start the server: `npm start`

## Dependencies

- express: Fast, unopinionated, minimalist web framework for Node.js
- cors: Node.js CORS middleware

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
