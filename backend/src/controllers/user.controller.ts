import { Request, Response } from "express";
import userService from "../Services/user.service";
import { User } from "../Entities/User";

class UserController {

  // Create a new user
  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const userData: User = req.body;
      const newUser = await userService.createUser(userData);
      res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error: any) {
      res.status(500).json({ message: `Error creating user: ${error.message}` });
    }
  }

  // Get a user by ID
  async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const userId = parseInt(req.params.id);
      const user = await userService.getUserById(userId);
      if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
      }
      res.status(200).json(user);
    } catch (error: any) {
      res.status(500).json({ message: `Error fetching user: ${error.message}` });
    }
  }

  // Get all users
  async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (error: any) {
      res.status(500).json({ message: `Error fetching users: ${error.message}` });
    }
  }

  // Update a user
  async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const userId = parseInt(req.params.id);
      const userData: Partial<User> = req.body;
      const updatedUser = await userService.updateUser(userId, userData);
      res.status(200).json({ message: "User updated successfully", user: updatedUser });
    } catch (error: any) {
      res.status(500).json({ message: `Error updating user: ${error.message}` });
    }
  }

  // Delete a user
  async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const userId = parseInt(req.params.id);
      await userService.deleteUser(userId);
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error: any) {
      res.status(500).json({ message: `Error deleting user: ${error.message}` });
    }
  }
 
}
export default new UserController();
