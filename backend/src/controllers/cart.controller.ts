import { Request, Response } from "express";
import cartService from "../Services/cart.service";
import { Cart } from "../Entities/Cart";

class CartController {
  // Create a new cart
  async createCart(req: Request, res: Response): Promise<void> {
    try {
      const cartData: Cart = req.body;
      const newCart = await cartService.createCart(cartData);
      res.status(201).json({ message: "Cart created successfully", cart: newCart });
    } catch (error: any) {
      res.status(500).json({ message: `Error creating cart: ${error.message}` });
    }
  }

  // Get a cart by ID
  async getCartById(req: Request, res: Response): Promise<void> {
    try {
      const cartId = parseInt(req.params.id);
      const cart = await cartService.getCartById(cartId);
      if (!cart) {
        res.status(404).json({ message: "Cart not found" });
        return;
      }
      res.status(200).json(cart);
    } catch (error: any) {
      res.status(500).json({ message: `Error fetching cart: ${error.message}` });
    }
  }

  // Get all carts
  async getAllCarts(req: Request, res: Response): Promise<void> {
    try {
      const carts = await cartService.getAllCarts();
      res.status(200).json(carts);
    } catch (error: any) {
      res.status(500).json({ message: `Error fetching carts: ${error.message}` });
    }
  }

  // Update a cart
  async updateCart(req: Request, res: Response): Promise<void> {
    try {
      const cartId = parseInt(req.params.id);
      const cartData: Partial<Cart> = req.body;
      const updatedCart = await cartService.updateCart(cartId, cartData);
      res.status(200).json({ message: "Cart updated successfully", cart: updatedCart });
    } catch (error: any) {
      res.status(500).json({ message: `Error updating cart: ${error.message}` });
    }
  }

  // Delete a cart
  async deleteCart(req: Request, res: Response): Promise<void> {
    try {
      const cartId = parseInt(req.params.id);
      await cartService.deleteCart(cartId);
      res.status(200).json({ message: "Cart deleted successfully" });
    } catch (error: any) {
      res.status(500).json({ message: `Error deleting cart: ${error.message}` });
    }
  }
}

export default new CartController();
