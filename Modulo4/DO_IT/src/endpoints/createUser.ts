import { Request,Response } from "express";
import insertUser from "../data/insertUser";

export default async function createUser(req:Request , res:Response):Promise<any> {
    try{
        const {name,nickname,email}=req.body
        console.log(name)
       type User ={
            id:string,
            name:string,
            nickname:string,
            email:string,
        }
        const user  : User ={
        id:"005", 
        name:name,nickname:nickname,email:email
        }
   
     
     await insertUser(user)
       
        res.status(200).send(`User ${name} created`)
        
    }catch(error:any)
    {
        console.log("chedasdasdasdasd")
        res.status(400).send({message:error.message || error.sqlMessage})
    }
    
}