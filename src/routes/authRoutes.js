// Import the express library to use its functionalities
import express from "express";
// Import the 'register' and 'login' controller functions from the authController.js file
import { register } from "../controllers/authController.js";

// Create an instance of an Express router, which will handle the routing of HTTP requests
const AuthRouter = express.Router();
// Define a POST route for the '/register' endpoint, which triggers the 'register' function from the controller
AuthRouter.post("/register", register);

// Export the router so it can be used in other parts of the application
export default AuthRouter;
