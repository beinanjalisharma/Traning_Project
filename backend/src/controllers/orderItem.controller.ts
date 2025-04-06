import { Request, Response } from "express";
import orderItemService from "../Services/orderItem.service";
import { OrderItem } from "../Entities/OrderItem";

class OrderItemController {
  // Create a new order item
  async createOrderItem(req: Request, res: Response): Promise<void> {
    try {
      const orderItemData: OrderItem = req.body;
      const newOrderItem = await orderItemService.createOrderItem(orderItemData);
      res.status(201).json({ message: "OrderItem created successfully", orderItem: newOrderItem });
    } catch (error: any) {
      res.status(500).json({ message: `Error creating order item: ${error.message}` });
    }
  }

  // Get an order item by ID
  async getOrderItemById(req: Request, res: Response): Promise<void> {
    try {
      const orderItemId = parseInt(req.params.id);
      const orderItem = await orderItemService.getOrderItemById(orderItemId);
      if (!orderItem) {
        res.status(404).json({ message: "OrderItem not found" });
        return;
      }
      res.status(200).json(orderItem);
    } catch (error: any) {
      res.status(500).json({ message: `Error fetching order item: ${error.message}` });
    }
  }

  // Get all order items
  async getAllOrderItems(req: Request, res: Response): Promise<void> {
    try {
      const orderItems = await orderItemService.getAllOrderItems();
      res.status(200).json(orderItems);
    } catch (error: any) {
      res.status(500).json({ message: `Error fetching order items: ${error.message}` });
    }
  }

  // Update an order item
  async updateOrderItem(req: Request, res: Response): Promise<void> {
    try {
      const orderItemId = parseInt(req.params.id);
      const orderItemData: Partial<OrderItem> = req.body;
      const updatedOrderItem = await orderItemService.updateOrderItem(orderItemId, orderItemData);
      res.status(200).json({ message: "OrderItem updated successfully", orderItem: updatedOrderItem });
    } catch (error: any) {
      res.status(500).json({ message: `Error updating order item: ${error.message}` });
    }
  }

  // Delete an order item
  async deleteOrderItem(req: Request, res: Response): Promise<void> {
    try {
      const orderItemId = parseInt(req.params.id);
      await orderItemService.deleteOrderItem(orderItemId);
      res.status(200).json({ message: "OrderItem deleted successfully" });
    } catch (error: any) {
      res.status(500).json({ message: `Error deleting order item: ${error.message}` });
    }
  }
}

export default new OrderItemController();
