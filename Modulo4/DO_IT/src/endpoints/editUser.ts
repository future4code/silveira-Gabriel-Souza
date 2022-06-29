import { Request,Response } from "express";
import upDateUser from "../data/upDateUser";

export default async function editUser(req:Request , res:Response):Promise<any> {
    try{
        const {name,nickname}=req.body;
        const id = req.params.id;
        await upDateUser(name,nickname,id)
       
        res.status(200).send(`User ${name} UpDated`)
        
    }catch(error:any)
    {
        
        res.status(400).send({message:error.message || error.sqlMessage})
    }
    
}