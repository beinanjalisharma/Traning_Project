import { Repository } from "typeorm";
import { AppDataSource } from "../config/database"; // Import your data source configuration
import { Vendor } from "../Entities/Vendor";

export class VendorRepository {
  repository: Repository<Vendor>;

  constructor() {
    this.repository = AppDataSource.getRepository(Vendor); // Initialize the repository
  }

  // Create or Add a Vendor
  async createVendor(vendorData: Partial<Vendor>): Promise<Vendor> {
    try {
      const vendor = this.repository.create(vendorData);
      return await this.repository.save(vendor);
    } catch (error: any) {
      throw new Error(`Error creating vendor: ${error.message}`);
    }
  }

  // Get Vendor by ID
  async getVendorById(vendorId: number): Promise<Vendor | null> {
    try {
      return await this.repository.findOne({
        where: { id: vendorId },
        relations: ["products"], // Load related products
      });
    } catch (error: any) {
      throw new Error(`Error fetching vendor by ID: ${error.message}`);
    }
  }

  // Get All Vendors
  async getAllVendors(): Promise<Vendor[]> {
    try {
      return await this.repository.find({
        relations: ["products"], // Load related products
      });
    } catch (error: any) {
      throw new Error(`Error fetching all vendors: ${error.message}`);
    }
  }

  // Update a Vendor
  async updateVendor(vendorId: number, vendorData: Partial<Vendor>): Promise<Vendor> {
    try {
      const vendor = await this.repository.findOneBy({ id: vendorId });
      if (!vendor) {
        throw new Error("Vendor not found");
      }
      Object.assign(vendor, vendorData); // Merge updated data with the existing vendor
      return await this.repository.save(vendor);
    } catch (error: any) {
      throw new Error(`Error updating vendor: ${error.message}`);
    }
  }

  // Delete a Vendor
  async deleteVendor(vendorId: number): Promise<void> {
    try {
      const vendor = await this.repository.findOneBy({ id: vendorId });
      if (!vendor) {
        throw new Error("Vendor not found");
      }
      await this.repository.remove(vendor);
    } catch (error: any) {
      throw new Error(`Error deleting vendor: ${error.message}`);
    }
  }

  // Login Vendor by Email
  async loginVendor(email: string): Promise<{ email: string; password: string; role: string } | null> {
    try {
      const result = await this.repository.findOne({ where: { email } });
      if (result) {
        return { email: result.email, password: result.password, role: "vendor" };
      }
      return null; // If no vendor is found with the given email
    } catch (error: any) {
      throw new Error(`Error during vendor login: ${error.message}`);
    }
  }

  // Get Vendor by Email
  async getVendorByEmail(email: string): Promise<Vendor | null> {
    try {
      return await this.repository.findOne({ where: { email } });
    } catch (error: any) {
      throw new Error(`Error fetching vendor by email: ${error.message}`);
    }
  }
}

export default new VendorRepository();
