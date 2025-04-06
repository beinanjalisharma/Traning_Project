import { Repository } from "typeorm";
import { AppDataSource } from "../config/database"; // Import your data source configuration
import { Product } from "../Entities/Product";

export class ProductRepository {
  private repository: Repository<Product>;

  constructor() {
    this.repository = AppDataSource.getRepository(Product);
  }

  // Create or Add a Product
  async createProduct(productData: Partial<Product>): Promise<Product> {
    try {
      const product = this.repository.create(productData);
      return await this.repository.save(product);
    } catch (error: any) {
      throw new Error(`Error creating product: ${error.message}`);
    }
  }

  // Get Product by ID
  async getProductById(productId: number): Promise<Product | null> {
    try {
      return await this.repository.findOne({
        where: { id: productId },
        relations: ["vendor"], // Load related entities
      });
    } catch (error: any) {
      throw new Error(`Error fetching product by ID: ${error.message}`);
    }
  }

  // Get All Products
  async getAllProducts(): Promise<Product[]> {
    try {
      return await this.repository.find();
    } catch (error: any) {
      throw new Error(`Error fetching products: ${error.message}`);
    }
  }

  // Update a Product
  async updateProduct(productId: number, productData: Partial<Product>): Promise<Product> {
    try {
      const product = await this.repository.findOneBy({ id: productId });
      if (!product) {
        throw new Error("Product not found");
      }
      Object.assign(product, productData); // Merge updated data with existing product
      return await this.repository.save(product);
    } catch (error: any) {
      throw new Error(`Error updating product: ${error.message}`);
    }
  }

  // Delete a Product
  async deleteProduct(productId: number): Promise<void> {
    try {
      const product = await this.repository.findOneBy({ id: productId });
      if (!product) {
        throw new Error("Product not found");
      }
      await this.repository.remove(product);
    } catch (error: any) {
      throw new Error(`Error deleting product: ${error.message}`);
    }
  }
}

export default new ProductRepository();
