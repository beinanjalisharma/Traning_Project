import express from "express";
import { AdminController } from "../controllers/admin.controller";

const router = express.Router();
const adminController = new AdminController();

router.get("/get-vendors", adminController.getVendors.bind(adminController));
router.post("/add-vendors", adminController.addVendor.bind(adminController));




export default router;
