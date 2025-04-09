
import userController from "../controllers/user.controller";
import { AuthController } from "../controllers/auth.controller";
const express = require("express");


const Customerrouter = express.Router();

Customerrouter.post("/users", userController.createUser); // Create a new user
Customerrouter.get("/users/:id", userController.getUserById); // Get a user by ID
Customerrouter.get("/users", userController.getAllUsers); // Get all users
Customerrouter.put("/users/:id", userController.updateUser); // Update a user
Customerrouter.delete("/users/:id", userController.deleteUser); // Delete a user

export {Customerrouter as customerrouter };


