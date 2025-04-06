import { Repository } from "typeorm";
import { AppDataSource } from "../config/database"; // Import your data source configuration
import { User } from "../Entities/User";

export class UserRepository {
  
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  // Create or Add a User
  async createUser(userData: Partial<User>): Promise<User> {
    try {
      const user = this.repository.create(userData);
      return await this.repository.save(user);
    } catch (error: any) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  }

  // Get User by ID
  async getUserById(userId: number): Promise<User | null> {
    try {
      return await this.repository.findOne({
        where: { id: userId },
        relations: ["products", "order"], // Load related entities
      });
    } catch (error: any) {
      throw new Error(`Error fetching user by ID: ${error.message}`);
    }
  }

  // Get All Users
  async getAllUsers(): Promise<User[]> {
    try {
      return await this.repository.find({
        relations: ["products", "order"], // Load related entities
      });
    } catch (error: any) {
      throw new Error(`Error fetching users: ${error.message}`);
    }
  }

  // Update a User
  async updateUser(userId: number, userData: Partial<User>): Promise<User> {
    try {
      const user = await this.repository.findOneBy({ id: userId });
      if (!user) {
        throw new Error("User not found");
      }
      Object.assign(user, userData); // Merge updated data with existing user
      return await this.repository.save(user);
    } catch (error: any) {
      throw new Error(`Error updating user: ${error.message}`);
    }
  }

  // Delete a User
  async deleteUser(userId: number): Promise<void> {
    try {
      const user = await this.repository.findOneBy({ id: userId });
      if (!user) {
        throw new Error("User not found");
      }
      await this.repository.remove(user);
    } catch (error: any) {
      throw new Error(`Error deleting user: ${error.message}`);
    }
  }
  async findByEmail(email: string): Promise<User | null> {
    return this.repository.findOneBy({ email });
  }
}

export default new UserRepository();
