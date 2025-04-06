const express = require("express");
import productController from "../controllers/product.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import {roleMiddleware} from "../middleware/roleAuth.middleware";
const router = express.Router();

router.post("/add",authMiddleware,roleMiddleware("vendor"), productController.addProduct); // Create a new product
router.get("/get/:id", productController.getProductById); // Get a product by ID
router.get("/getall", productController.getAllProducts); // Get all products
router.put("/update/:id",authMiddleware,roleMiddleware("vendor") ,productController.updateProduct); // Update a product
router.delete("/delete/:id", authMiddleware,roleMiddleware("vendor"),productController.deleteProduct); // Delete a product

export { router as productRouter};
