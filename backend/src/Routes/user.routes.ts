
import userController from "../controllers/user.controller";
import { AuthController } from "../controllers/auth.controller";
const express = require("express");
import { authMiddleware } from "../middleware/auth.middleware";
import {roleMiddleware} from "../middleware/roleAuth.middleware";

const authController = new AuthController()

const router = express.Router();

router.post("/users", userController.createUser); // Create a new user
router.get("/users/:id", userController.getUserById); // Get a user by ID
router.get("/users",authMiddleware,roleMiddleware("Admin"), userController.getAllUsers); // Get all users
router.put("/users/:id", userController.updateUser); // Update a user
router.delete("/users/:id", userController.deleteUser); // Delete a user
router.post("/signup", authController.signup); // Signup route
router.post("/login", authController.login); 

   // User login

export = {router};

export{}
