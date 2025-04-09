const express = require("express");

import VendorController from "../controllers/vendor.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/addvendor", VendorController.createVendor); // Create a new vendor
router.get("/getvendor/:id", authMiddleware, VendorController.createVendor); // Get a vendor by ID
router.get("/viewallvendors", authMiddleware, VendorController.getAllVendors); // Get all vendors
router.put("/updatevendor/:id", authMiddleware, VendorController.updateVendor); // Update a vendor
router.delete("/deletevendor/:id", authMiddleware, VendorController.deleteVendor);//delete vendor
router.post("/loginvendor", VendorController.loginVendor);//login vendorr






export {router as vendorRouter}
