Blog App Backend Route Readme
Overview
This README provides information about the backend route for the Blog App. The backend is built using Node.js and Express framework, providing a robust server-side architecture to handle various functionalities of the Blog App.

Features
RESTful API: Utilizes REST principles for handling routes and endpoints.
CRUD Operations: Supports Create, Read, Update, and Delete operations for managing blog posts.
Authentication: Implements secure authentication mechanisms for user access control.
Middleware: Utilizes middleware functions for request processing and error handling.
Database Integration: Connects to a database (e.g., MongoDB) for storing and managing blog post data.
Requirements
Node.js
Express
MongoDB (or any other preferred database)
Installation
Clone the repository: git clone <repository-url>
Navigate to the project directory: cd blog-app-backend
Install dependencies: npm install
Configuration
Rename .env.example file to .env.
Configure environment variables such as database connection URI, JWT secret, etc., in the .env file.
Usage
Start the server: npm start
The server will be running on http://localhost:4000;
API Endpoints
router.post("/posts/create", createPost);//Create a Post with this route
router.get("/posts", getAllPosts);//Get All Posts with this Route
router.post("/comments/create", createComment);//create Comment on  a specific Post
router.post("/likes/like", likePost); //Like a Post with this specific Route 
router.post("/likes/unlike", unlikePost);// Unlike a Post with this Specific Route.

License
This project is licensed under the MIT License.

Support
For any questions or issues, please contact your-sumit15singh15@gmail.com

