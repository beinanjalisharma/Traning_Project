const express = require("express");
import orderItemController from "../controllers/orderItem.controller";

const router = express.Router();

router.post("/order-items", orderItemController.createOrderItem); // Create a new order item
router.get("/order-items/:id", orderItemController.getOrderItemById); // Get an order item by ID
router.get("/order-items", orderItemController.getAllOrderItems); // Get all order items
router.put("/order-items/:id", orderItemController.updateOrderItem); // Update an order item
router.delete("/order-items/:id", orderItemController.deleteOrderItem); // Delete an order item

export { router };

