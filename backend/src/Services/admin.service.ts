import { getCustomRepository } from "typeorm";
import { VendorRepository } from "../Repositories/vendorRepo";

export class AdminService {
  async getVendors() {
    const vendorRepository = getCustomRepository(VendorRepository);
    return vendorRepository.getAllVendors();
  }

  async addVendor(name: string, contact: string) {
    const vendorRepository = getCustomRepository(VendorRepository);
    const vendor = vendorRepository.createVendor({ name });
    return vendorRepository.save(vendor);
  }


  async deleteVendor(){
    const vendorRepository=getCustomRepository(VendorRepository);
   
 
  }
}
