import { AuthController } from "../controllers/auth.controller";

import express from "express"

const router = express.Router();
const authController = new AuthController()

router.post("/signup", authController.signup); // User signup
router.post("/login", authController.login);   // User login
router.post("/vendorlogin",authController.login);
router.post("/vendorsignup",authController.signup);



export {router }


