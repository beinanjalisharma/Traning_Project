import { VendorRepository } from "../Repositories/vendorRepo";
import { Vendor } from "../Entities/Vendor";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

class VendorService {
  private vendorRepo = new VendorRepository();

  // Create or Add a Vendor
  async createVendor(name: Partial<Vendor>): Promise<Vendor> {
    return this.vendorRepo.createVendor(name);
  }

  // Get All Vendors
  async getAllVendors(): Promise<Vendor[]> {
    return this.vendorRepo.getAllVendors();
  }

  // Get Vendor by ID
  async getVendorById(vendorId: number): Promise<Vendor | null> {
    return this.vendorRepo.getVendorById(vendorId);
  }

  // Update a Vendor
  async updateVendor(vendorId: number, vendorData: Partial<Vendor>): Promise<Vendor> {
    return this.vendorRepo.updateVendor(vendorId, vendorData);
  }

  // Delete a Vendor
  async deleteVendor(vendorId: number): Promise<void> {
    return this.vendorRepo.deleteVendor(vendorId);
  }
  async loginVendor(email: string, password: string) {
    try {


      const vendors = await this.vendorRepo.loginVendor(email);
      console.log("email", email);

      if (!vendors) {
        throw new Error("Invalid email or password");
      }// Fetch all users to perform authentication
      if (vendors?.password == password) {
        const SECRET = process.env.SECRET_KEY || 'laddoo';
        const token = jwt.sign({ email, password, role: 'vendor' }, SECRET);
        return { vendors, token };
      }
      else {
        throw new Error("Invalid email or password")
      }
    } catch (error: any) {
      throw new Error(`Error logging in user: ${error.message}`);
    }


  }
}
export default new VendorService();
