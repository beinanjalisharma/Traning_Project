import { Request, Response } from "express";
import vendorService from "../Services/vendor.service";
import { Vendor } from "../Entities/Vendor";
import { log } from "console";

class VendorController {
  // Create a new vendor
  async createVendor(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, password, phone } = req.body;
      if (!name && !email && !password && !phone) {
        res.status(400).json({ message: "Vendor name, email, password and phone are required" });
        return;
      }
      const newVendor = await vendorService.createVendor({ name, email, password, phone });
      console.log("newVendor", newVendor);

      res.status(201).json({ message: "Vendor created successfully", vendor: newVendor });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  // Get a vendor by ID
  async getVendorById(req: Request, res: Response): Promise<void> {
    try {
      const vendorId = parseInt(req.params.id);
      const vendor = await vendorService.getVendorById(vendorId);
      if (!vendor) {
        res.status(404).json({ message: "Vendor not found" });
        return;
      }
      res.status(200).json(vendor);
    } catch (error: any) {
      res.status(500).json({ message: `Error fetching vendor: ${error.message}` });
    }
  }

  // Get all vendors
  async getAllVendors(req: Request, res: Response): Promise<void> {
    try {
      const vendors = await vendorService.getAllVendors();
      res.status(200).json(vendors);
    } catch (error: any) {
      res.status(500).json({ message: `Error fetching vendors: ${error.message}` });
    }
  }

  // Update a vendor
  async updateVendor(req: Request, res: Response): Promise<void> {
    try {
      const vendorId = parseInt(req.params.id);
      const vendorData: Partial<Vendor> = req.body;
      const updatedVendor = await vendorService.updateVendor(vendorId, vendorData);
      res.status(200).json({ message: "Vendor updated successfully", vendor: updatedVendor });
    } catch (error: any) {
      res.status(500).json({ message: `Error updating vendor: ${error.message}` });
    }
  }

  // Delete a vendor
  async deleteVendor(req: Request, res: Response): Promise<void> {
    try {
      const vendorId = parseInt(req.params.id);
      await vendorService.deleteVendor(vendorId);
      res.status(200).json({ message: "Vendor deleted successfully" });
    } catch (error: any) {
      res.status(500).json({ message: `Error deleting vendor: ${error.message}` });
    }
  }

  async loginVendor(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      console.log(email, password);
      
      const data = await vendorService.loginVendor(email, password);

      res.status(200).json({ message: "Login successful Vendor", data: data });

    } catch (error) {

      if (error) {
        if (error instanceof Error)
          res.status(401).json({ error: error.message });
      }

    }
  }
}

export default new VendorController();
//export default new ProductController();

