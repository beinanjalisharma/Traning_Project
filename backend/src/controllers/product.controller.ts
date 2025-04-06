import { Request, Response } from "express";
import productService from "../Services/product.service";
import { Product } from "../Entities/Product";

class ProductController {
  // Create a new product
  async addProduct(req: Request, res: Response): Promise<void> {
    try {
      const productData: Product = req.body;
      const newProduct = await productService.createProduct(productData);
      res.status(201).json({ message: "Product created successfully", product: newProduct });
    } catch (error: any) {
      res.status(500).json({ message: `Error creating product: ${error.message}` });
    }
  }

  // Get a product by ID
  async getProductById(req: Request, res: Response): Promise<void> {
    try {
      const productId = parseInt(req.params.id);
      const product = await productService.getProductById(productId);
      if (!product) {
        res.status(404).json({ message: "Product not found" });
        return;
      }
      res.status(200).json(product);
    } catch (error: any) {
      res.status(500).json({ message: `Error fetching product: ${error.message}` });
    }
  }

  // Get all products
  async getAllProducts(req: Request, res: Response): Promise<void> {
    try {
      const products = await productService.getAllProducts();
      res.status(200).json(products);
    } catch (error: any) {
      res.status(500).json({ message: `Error fetching products: ${error.message}` });
    }
  }

  // Update a product
  async updateProduct(req: Request, res: Response): Promise<void> {
    try {
      const productId = parseInt(req.params.id);
      const productData: Partial<Product> = req.body;
      const updatedProduct = await productService.updateProduct(productId, productData);
      res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error: any) {
      res.status(500).json({ message: `Error updating product: ${error.message}` });
    }
  }

  // Delete a product
  async deleteProduct(req: Request, res: Response): Promise<void> {
    try {
      const productId = parseInt(req.params.id);
      await productService.deleteProduct(productId);
      res.status(200).json({ message: "Product deleted successfully" });
    } catch (error: any) {
      res.status(500).json({ message: `Error deleting product: ${error.message}` });
    }
  }
}

export default new ProductController();
