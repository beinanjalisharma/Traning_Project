import jwt from 'jsonwebtoken'
import { NextFunction, Response, Request } from 'express';
import dotenv from "dotenv";
import { log } from 'console';
import userService from '../Services/user.service';
import { AuthService } from '../Services/auth.service';
import { Auth } from 'typeorm';
import { AuthRequest } from '../types/AuthRequest';
const authService = new AuthService();
// import { Any } from 'typeorm';



dotenv.config();
interface Decoded{
    email:string,
    role:string;
    iat:number;
    exp:number;
}
const secret_key = process.env.SECRET_KEY || 'laddoo'
export const authMiddleware =async  function (req:Request,res:Response, next:NextFunction ){
    // const user = req.body
    
    if(!req.header("authorization")){
        return res.status(402).json("Unauthorized, token not provided.. ");
    }
    const token = req.header("authorization")!.split(" ")[1];
    // console.log("token",token);
    
    const decoded= jwt.verify(
        token!,
        secret_key
      ) as Decoded;
    // const freshUser=await authService.getUserByEmail(decoded.email);

    (req as AuthRequest).user = decoded;
    console.log("decoded",decoded.role);
    
    // console.log("main key",secret_key);
    // console.log("token",token);
     
    next();
    // router.get("/users", authenticateToken, userController.getAllUsers); // Secures this route

}







