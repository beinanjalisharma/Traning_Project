import { Request,Response } from "express";
import { AuthService } from "../Services/auth.service";



const authService = new AuthService();
export class AuthController{
    async signup(req:Request,res:Response){
        try{
            console.log("req.body",req.body);
            
            const {name,email,password,role}= req.body;
            

            await authService.signupUser(name,email,password,role);
            res.status(201).json({message:"User sign up successfull"})     ;


        }catch(error){
            if(error instanceof Error)
                res.status(500).json({error:error.message});
        }
    }

    async login(req:Request,res:Response){ 
        try{
            const {email,password}= req.body;
            const data =await authService.loginUser(email,password);
           
            res.status(200).json({message:"Login successful",data:data});
            
        }catch(error){

            if (error){
                if(error instanceof Error)
                    res.status(401).json({error:error.message});
            }

        }
    }

}