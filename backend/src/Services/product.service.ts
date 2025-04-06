import { ProductRepository } from "../Repositories/productRepo";
import { Product } from "../Entities/Product";

class ProductService {
  
  private productRepo = new ProductRepository();

  // Create or Add a Product
  async createProduct(productData: Partial<Product>): Promise<Product> {
    return this.productRepo.createProduct(productData);
  }

  // Get Product by ID
  async getProductById(productId: number): Promise<Product | null> {
    return this.productRepo.getProductById(productId);
  }

  // Get All Products
  async getAllProducts(): Promise<Product[]> {
    return this.productRepo.getAllProducts();
  }

  // Update a Product
  async updateProduct(productId: number, productData: Partial<Product>): Promise<Product> {
    return this.productRepo.updateProduct(productId, productData);
  }

  // Delete a Product
  async deleteProduct(productId: number): Promise<void> {
    return this.productRepo.deleteProduct(productId);
  }
}

export default new ProductService();
