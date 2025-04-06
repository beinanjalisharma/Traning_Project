const express = require("express");
import orderController from "../controllers/order.controller";

const router = express.Router();

router.post("/orders", orderController.createOrder); // Create a new order
router.get("/orders/:id", orderController.getOrderById); // Get an order by ID
router.get("/orders", orderController.getAllOrders); // Get all orders
router.put("/orders/:id", orderController.updateOrder); // Update an order
router.delete("/orders/:id", orderController.deleteOrder); // Delete an order

export { router };
