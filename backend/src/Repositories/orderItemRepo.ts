import { Repository } from "typeorm";
import { AppDataSource } from "../config/database"; // Import your data source configuration
import { OrderItem } from "../Entities/OrderItem";

export class OrderItemRepository {
  private repository: Repository<OrderItem>;

  constructor() {
    this.repository = AppDataSource.getRepository(OrderItem);
  }

  // Create or Add an OrderItem
  async createOrderItem(orderItemData: Partial<OrderItem>): Promise<OrderItem> {
    try {
      const orderItem = this.repository.create(orderItemData);
      return await this.repository.save(orderItem);
    } catch (error: any) {
      throw new Error(`Error creating order item: ${error.message}`);
    }
  }

  // Get OrderItem by ID
  async getOrderItemById(orderItemId: number): Promise<OrderItem | null> {
    try {
      return await this.repository.findOne({
        where: { id: orderItemId },
        relations: ["order", "product"], // Load related entities
      });
    } catch (error: any) {
      throw new Error(`Error fetching order item by ID: ${error.message}`);
    }
  }

  // Get All OrderItems
  async getAllOrderItems(): Promise<OrderItem[]> {
    try {
      return await this.repository.find({
        relations: ["order", "product"], // Load related entities
      });
    } catch (error: any) {
      throw new Error(`Error fetching order items: ${error.message}`);
    }
  }

  // Update an OrderItem
  async updateOrderItem(orderItemId: number, orderItemData: Partial<OrderItem>): Promise<OrderItem> {
    try {
      const orderItem = await this.repository.findOneBy({ id: orderItemId });
      if (!orderItem) {
        throw new Error("OrderItem not found");
      }
      Object.assign(orderItem, orderItemData); // Merge updated data with existing order item
      return await this.repository.save(orderItem);
    } catch (error: any) {
      throw new Error(`Error updating order item: ${error.message}`);
    }
  }

  // Delete an OrderItem
  async deleteOrderItem(orderItemId: number): Promise<void> {
    try {
      const orderItem = await this.repository.findOneBy({ id: orderItemId });
      if (!orderItem) {
        throw new Error("OrderItem not found");
      }
      await this.repository.remove(orderItem);
    } catch (error: any) {
      throw new Error(`Error deleting order item: ${error.message}`);
    }
  }
}

export default new OrderItemRepository();
