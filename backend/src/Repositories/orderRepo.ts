import { Repository } from "typeorm";
import { AppDataSource } from "../config/database"; // Import your data source configuration
import { Order } from "../Entities/Order";

export class OrderRepository {
  private repository: Repository<Order>;

  constructor() {
    this.repository = AppDataSource.getRepository(Order);
  }

  // Create or Add an Order
  async createOrder(orderData: Partial<Order>): Promise<Order> {
    try {
      const order = this.repository.create(orderData);
      return await this.repository.save(order);
    } catch (error: any) {
      throw new Error(`Error creating order: ${error.message}`);
    }
  }

  // Get Order by ID
  async getOrderById(orderId: number): Promise<Order | null> {
    try {
      return await this.repository.findOne({
        where: { id: orderId },
        relations: ["user", "items"], // Load related entities
      });
    } catch (error: any) {
      throw new Error(`Error fetching order by ID: ${error.message}`);
    }
  }

  // Get All Orders
  async getAllOrders(): Promise<Order[]> {
    try {
      return await this.repository.find({
        relations: ["user", "items"], // Load related entities
      });
    } catch (error: any) {
      throw new Error(`Error fetching orders: ${error.message}`);
    }
  }

  // Update an Order
  async updateOrder(orderId: number, orderData: Partial<Order>): Promise<Order> {
    try {
      const order = await this.repository.findOneBy({ id: orderId });
      if (!order) {
        throw new Error("Order not found");
      }
      Object.assign(order, orderData); // Merge updated data with existing order
      return await this.repository.save(order);
    } catch (error: any) {
      throw new Error(`Error updating order: ${error.message}`);
    }
  }

  // Delete an Order
  async deleteOrder(orderId: number): Promise<void> {
    try {
      const order = await this.repository.findOneBy({ id: orderId });
      if (!order) {
        throw new Error("Order not found");
      }
      await this.repository.remove(order);
    } catch (error: any) {
      throw new Error(`Error deleting order: ${error.message}`);
    }
  }
}

export default new OrderRepository();
