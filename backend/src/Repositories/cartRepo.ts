
import { Repository } from "typeorm";
import { AppDataSource } from "../config/database"; // Import your data source configuration
import { Cart } from "../Entities/Cart";

export class CartRepository {
  private repository: Repository<Cart>;

  constructor() {
    this.repository = AppDataSource.getRepository(Cart);
  }

  // Create or Add a Cart
  async createCart(cartData: Partial<Cart>): Promise<Cart> {
    try {
      const cart = this.repository.create(cartData);
      return await this.repository.save(cart);
    } catch (error: any) {
      throw new Error(`Error creating cart: ${error.message}`);
    }
  }

  // Get Cart by ID
  async getCartById(cartId: number): Promise<Cart | null> {
    try {
      return await this.repository.findOne({
        where: { id: cartId },
        relations: ["user", "product"], // Load related entities
      });
    } catch (error: any) {
      throw new Error(`Error fetching cart by ID: ${error.message}`);
    }
  }

  // Get All Carts
  async getAllCarts(): Promise<Cart[]> {
    try {
      return await this.repository.find({
        relations: ["user", "product"], // Load related entities
      });
    } catch (error: any) {
      throw new Error(`Error fetching carts: ${error.message}`);
    }
  }

  // Update a Cart
  async updateCart(cartId: number, cartData: Partial<Cart>): Promise<Cart> {
    try {
      const cart = await this.repository.findOneBy({ id: cartId });
      if (!cart) {
        throw new Error("Cart not found");
      }
      Object.assign(cart, cartData); // Merge updated data with existing cart
      return await this.repository.save(cart);
    } catch (error: any) {
      throw new Error(`Error updating cart: ${error.message}`);
    }
  }

  // Delete a Cart
  async deleteCart(cartId: number): Promise<void> {
    try {
      const cart = await this.repository.findOneBy({ id: cartId });
      if (!cart) {
        throw new Error("Cart not found");
      }
      await this.repository.remove(cart);
    } catch (error: any) {
      throw new Error(`Error deleting cart: ${error.message}`);
    }
  }
}

export default new CartRepository();
