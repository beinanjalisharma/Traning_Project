import { Request, Response } from "express";
import { AdminService } from "../Services/admin.service";

export class AdminController {
  private adminService: AdminService;

  constructor() {
    this.adminService = new AdminService();
  }

  async getVendors(req: Request, res: Response) {
    try {
      const vendors = await this.adminService.getVendors();
      res.status(200).json(vendors);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch vendors" });
    }
  }

  async addVendor(req: Request, res: Response) {
    try {
      const { name, contact } = req.body;
      const vendor = await this.adminService.addVendor(name, contact);
      res.status(201).json(vendor);
    } catch (error) {
      res.status(500).json({ error: "Failed to add vendor" });
    }
  }


 
  }

