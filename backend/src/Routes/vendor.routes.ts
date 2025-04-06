const express = require("express");
import vendorController from "../controllers/vendor.controller";
import VendorController from "../controllers/vendor.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import  {roleMiddleware} from "../middleware/roleAuth.middleware";

const router = express.Router();

router.post("/addvendor", authMiddleware, roleMiddleware("admin"), VendorController.createVendor); // Create a new vendor
router.get("/getvendor/:id", authMiddleware, roleMiddleware("admin"), VendorController.createVendor); // Get a vendor by ID
router.get("/viewallvendors", authMiddleware, VendorController.getAllVendors); // Get all vendors
router.put("/updatevendor/:id", authMiddleware, roleMiddleware("admin"), VendorController.updateVendor); // Update a vendor
router.delete("/deletevendor/:id", authMiddleware, roleMiddleware("admin"), VendorController.deleteVendor);
router.post("/loginvendor", VendorController.loginVendor);

 // Delete a vendor


//router.post("/add",authMiddleware,roleMiddleware("Vendor"), productController.addProduct);
export {router as vendorRouter}
