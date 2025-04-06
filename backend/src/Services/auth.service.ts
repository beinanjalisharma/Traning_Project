import { AppDataSource } from "../config/database";
import { User } from "../Entities/User";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import { AuthRepository } from "../Repositories/authRepo";
import { log } from "console";
require('dotenv').config();


const authRepo = new AuthRepository()
const SECRET_KEY = process.env.SECRET_KEY || 'laddoo';
// console.log("data", SECRET_KEY);
export class AuthService {



    async signupUser(
      
name: string, email: string, password: string, role: string,
       

    ) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await authRepo.signupUser({ name, email, password: hashedPassword });
        console.log("result from service:", result);
        return result
    }

    async loginUser(email: string, password: string) {
        const user = await authRepo.loginUser(email);
        if (!user) throw new Error("User not found");
        const isPasswordValid = await bcrypt.compare(password,
            user.password
        );

        if (!isPasswordValid) throw new Error("Invalid credentials");
        const token = jwt.sign({email: user.email, role: user.role }, SECRET_KEY, {
            expiresIn: "1d",

        });
        return { user, token };

    }

    async getUserByEmail(email: string) {
        return await authRepo.getUserByEmail(email);
    }

}

