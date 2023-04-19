Foodie Review Full Stack MERN Application

Objective:
This project aims to develop a food review platform using Javascript, HTML, CSS, MongoDB/Mongoose, Express, React.js, and Node.js. The application will request external data from 'MealDB' API.

Implementation:

    1. Setting up backend environment using Mongoose, Express, and Node.js.
    2. Connecting to MongoDB, then creating the CRUD HTTP routes for each schema. Setting up the backend folder
    following MVC design pattern.
    3. Setting up frontend environment and developing UI/UX using React.js.
    4. Researching and integrating third party API into the application.
    5. Challenges:
        1. Initial set up for backend took some time, need to use Postman to test that each CRUD route works.
        2. Connecting the frontend to backend is very difficult. Setting up Redux as control state for http requests to MongoDB.
        4. Implementing user authorization and authentication with Bcrypt and JWT (JSON Web Token)
        5. Referencing Traversy Media to setup this full stack application.

Installation:

    1. Will need secret environment variables to run the application
        1. MONGODB_URI: Get personal URI from MongoDB
        2. JWT_SECRET: Create a secret key for authentication using JWT
    2. Run npm start in terminal to start the application

Application Features:

    1. Can create both Business or Customer Accounts with all informations stored in MongoDB
    2. Customers can create an account then can write/edit/delete reviews for each restaurant
    3. Businesses can create an account on the platform so they can receive customers reviews. Businesses can
    also update their landing page.
    4. Third party 'MealDB' API is used so businesses can easily search and items to their menu

![Title Screen](https://raw.githubusercontent.com/isaacdong88/NBA-PROFILE-APP/master/src/NBAWIKI.png)
