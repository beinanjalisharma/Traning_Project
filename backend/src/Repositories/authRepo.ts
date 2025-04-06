import { AppDataSource } from "../config/database";
import { AuthService } from "../Services/auth.service";
import { User } from "../Entities/User";
import jwt from "jsonwebtoken";
import * as bcrypt from 'bcrypt';
import { log } from "console";


export class AuthRepository{
    private appDataSource = AppDataSource.getRepository(User)


    async signupUser(user:Partial<User>){
        console.log(user);
        user.role='user'
        const newUser = this.appDataSource.create({...user,role:user.role});
        return await this.appDataSource.save(newUser);
       
    }

    async loginUser(email:string){
        const result = await this.appDataSource.findOne({where:{email:email}});
        log("result",result);
        if(result?.email){
            return{email:result,password:result.password,role:result.role}
        }
    }
    async getUserByEmail(email:string){
      return await this.appDataSource.findOne({where:{email:email}})
    }
}


