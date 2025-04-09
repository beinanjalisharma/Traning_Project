import { Request, Response } from "express";
import orderService from "../Services/order.service";
import { Order } from "../Entities/Order";

class OrderController {
  // Create a new order
  async createOrder(req: Request, res: Response): Promise<void> {
    try {
      const orderData: Order = req.body;
      const newOrder = await orderService.createOrder(orderData);
      res.status(201).json({ message: "Order created successfully", order: newOrder });
    } catch (error: any) {
      res.status(500).json({ message: `Error creating order: ${error.message}` });
    }
  }

  // Get an order by ID
  async getOrderById(req: Request, res: Response): Promise<void> {
    try {
      const orderId = parseInt(req.params.id);
      const order = await orderService.getOrderById(orderId);
      if (!order) {
        res.status(404).json({ message: "Order not found" });
        return;
      }
      res.status(200).json(order);
    } catch (error: any) {
      res.status(500).json({ message: `Error fetching order: ${error.message}` });
    }
  }

  // Get all orders
  async getAllOrders(req: Request, res: Response): Promise<void> {
    try {
      const orders = await orderService.getAllOrders();
      res.status(200).json(orders);
    } catch (error: any) {
      res.status(500).json({ message: `Error fetching orders: ${error.message}` });
    }
  }

  // Update an order
  async updateOrder(req: Request, res: Response): Promise<void> {
    try {
      const orderId = parseInt(req.params.id);
      const orderData: Partial<Order> = req.body;
      const updatedOrder = await orderService.updateOrder(orderId, orderData);
      res.status(200).json({ message: "Order updated successfully", order: updatedOrder });
    } catch (error: any) {
      res.status(500).json({ message: `Error updating order: ${error.message}` });
    }
  }

  // Delete an order
  async deleteOrder(req: Request, res: Response): Promise<void> {
    try {
      const orderId = parseInt(req.params.id);
      await orderService.deleteOrder(orderId);
      res.status(200).json({ message: "Order deleted successfully" });
    } catch (error: any) {
      res.status(500).json({ message: `Error deleting order: ${error.message}` });
    }
  }

  async updateStatusOrder(req:Request,res:Response){
    try {
      const orderId = parseInt(req.params.id);
      const status = req.params.status
      const result = await orderService.updateStatusOrder(orderId,status);
      res.status(200).json({ message: "Order deleted successfully",data:result });
    } catch (error: any) {
      res.status(500).json({ message: `Error deleting order: ${error.message}` });
    }

  }
}

export default new OrderController();
