import { OrderItemRepository } from "../Repositories/orderItemRepo";
import { OrderItem } from "../Entities/OrderItem";

class OrderItemService {
  private orderItemRepo = new OrderItemRepository();

  // Create or Add an OrderItem
  async createOrderItem(orderItemData: Partial<OrderItem>): Promise<OrderItem> {
    return this.orderItemRepo.createOrderItem(orderItemData);
  }

  // Get OrderItem by ID
  async getOrderItemById(orderItemId: number): Promise<OrderItem | null> {
    return this.orderItemRepo.getOrderItemById(orderItemId);
  }

  // Get All OrderItems
  async getAllOrderItems(): Promise<OrderItem[]> {
    return this.orderItemRepo.getAllOrderItems();
  }

  // Update an OrderItem
  async updateOrderItem(orderItemId: number, orderItemData: Partial<OrderItem>): Promise<OrderItem> {
    return this.orderItemRepo.updateOrderItem(orderItemId, orderItemData);
  }

  // Delete an OrderItem
  async deleteOrderItem(orderItemId: number): Promise<void> {
    return this.orderItemRepo.deleteOrderItem(orderItemId);
  }
}

export default new OrderItemService();
