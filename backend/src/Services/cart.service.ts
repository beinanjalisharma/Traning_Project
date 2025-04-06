import { CartRepository } from "../Repositories/cartRepo";
import { Cart } from "../Entities/Cart";

class CartService {
  private cartRepo = new CartRepository();

  // Create or Add a Cart
  async createCart(cartData: Partial<Cart>): Promise<Cart> {
    return this.cartRepo.createCart(cartData);
  }

  // Get Cart by ID
  async getCartById(cartId: number): Promise<Cart | null> {
    return this.cartRepo.getCartById(cartId);
  }

  // Get All Carts
  async getAllCarts(): Promise<Cart[]> {
    return this.cartRepo.getAllCarts();
  }

  // Update a Cart
  async updateCart(cartId: number, cartData: Partial<Cart>): Promise<Cart> {
    return this.cartRepo.updateCart(cartId, cartData);
  }

  // Delete a Cart
  async deleteCart(cartId: number): Promise<void> {
    return this.cartRepo.deleteCart(cartId);
  }
}

export default new CartService();
