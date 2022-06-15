import { Request,Response } from "express";
import insertTask from "../data/insertTask";

export default async function createTask(req:Request , res:Response):Promise<any> {
    try{
        const {title,description,limitDate,creatorUserId}=req.body
    
       type task ={
            id:string,
            title:string,
            description:string,
            status:string,
            limit_date:string,
            creator_user_id:string,

        }
        const task  : Task ={
        id: new Date+"", 
        title,
        description,
        status:"3",
        limitDate,
        crea
        }
   
     
     await insertUser(user)
       
        res.status(200).send(`User ${name} created`)
        
    }catch(error:any)
    {
        console.log("chedasdasdasdasd")
        res.status(400).send({message:error.message || error.sqlMessage})
    }
    
}