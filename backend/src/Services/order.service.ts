import { OrderRepository } from "../Repositories/orderRepo";
import { Order } from "../Entities/Order";

class OrderService {
  private orderRepo = new OrderRepository();

  // Create or Add an Order
  async createOrder(orderData: Partial<Order>): Promise<Order> {
    return this.orderRepo.createOrder(orderData);
  }

  // Get Order by ID
  async getOrderById(orderId: number): Promise<Order | null> {
    return this.orderRepo.getOrderById(orderId);
  }

  // Get All Orders
  async getAllOrders(): Promise<Order[]> {
    return this.orderRepo.getAllOrders();
  }

  // Update an Order
  async updateOrder(orderId: number, orderData: Partial<Order>): Promise<Order> {
    return this.orderRepo.updateOrder(orderId, orderData);
  }

  // Delete an Order
  async deleteOrder(orderId: number): Promise<void> {
    return this.orderRepo.deleteOrder(orderId);
  }

  async updateStatusOrder(orderId:number,status:string){
    return await this.orderRepo.updateStatusOrder(orderId,status);
  }
}

export default new OrderService();
