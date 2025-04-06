import {UserRepository} from "../Repositories/userRepo";
import { User } from "../Entities/User";
import { AuthRepository } from "../Repositories/authRepo";
import { AuthService } from "./auth.service";
import JsonWebToken from "jsonwebtoken";
import { log } from "console";

class UserService {
  private userRepo = new UserRepository();
  private authService = new AuthService()

  async createUser(userData:Partial<User>){
    if (!userData.name || !userData.email || !userData.password || !userData.role) {
      throw new Error("Missing required user data: name, email, or password");
    }
    return this.authService.signupUser(userData.name, userData.email, userData.password,userData.role);
  }

  async getAllUsers(){
    return this.userRepo.getAllUsers();
  }

  async getUserById(userId:number){
    return this.userRepo.getUserById(userId);
  }

  async updateUser(userId: number, userData: Partial<User>){
    return this.userRepo.updateUser(userId, userData)
  }
  
  async deleteUser(userId: number){
    return this.userRepo.deleteUser(userId);
  }

  async loginUser(email: string, password: string): Promise<User | null> {
    try {
      const users = await this.userRepo.getAllUsers(); // Fetch all users to perform authentication
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
      if (!user) {
        throw new Error("Invalid email or password");
      }
      console.log("User found:", user);
    
      return user;
    } catch (error: any) {
      throw new Error(`Error logging in user: ${error.message}`);
    }
}}

export default new UserService();
