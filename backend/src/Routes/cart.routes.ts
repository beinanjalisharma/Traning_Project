// import { Router } from "express";
const express = require("express");
import cartController from "../controllers/cart.controller";

const router = express.Router();

router.post("/carts", cartController.createCart); // Create a new cart
router.get("/carts/:id", cartController.getCartById); // Get a cart by ID
router.get("/carts", cartController.getAllCarts); // Get all carts
router.put("/carts/:id", cartController.updateCart); // Update a cart
router.delete("/carts/:id", cartController.deleteCart); // Delete a cart

export { router };
