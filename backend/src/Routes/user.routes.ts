
import userController from "../controllers/user.controller";
import { AuthController } from "../controllers/auth.controller";
const express = require("express");
// import { authMiddleware } from "../middleware/auth.middleware";
// import {roleMiddleware} from "../middleware/roleAuth.middleware";

// const authController = new AuthController()

const Customerrouter = express.Router();

Customerrouter.post("/users", userController.createUser); // Create a new user
Customerrouter.get("/users/:id", userController.getUserById); // Get a user by ID
Customerrouter.get("/users", userController.getAllUsers); // Get all users
Customerrouter.put("/users/:id", userController.updateUser); // Update a user
Customerrouter.delete("/users/:id", userController.deleteUser); // Delete a user
// Customerrouter.post("/signup", authController.signup); // Signup route
// Customerrouter.post("/login", authController.login); 

   // User login

export {Customerrouter as customerrouter };


