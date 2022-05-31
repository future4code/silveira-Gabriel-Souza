import express , {Request , Response} from "express"
import cors from "cors"
import { type } from "os"

const app = express()
app.use(express.json)
app.use(cors())

type usuario={
   id :Number,
   name:String,
   phone:String,
   email:String,
   website:String

}

const usuarios:usuario[] =  [
	{name: "Rogério", email: "roger@email.com",id:1,phone:"99999-9999",website:"aaaaaaaaaaa.com.br"},
	{name: "Ademir", email: "ademir@email.com",id:2,phone:"99999-9999",website:"aaaaaaaaaaa.com.br"},
	{name: "Aline", email: "aline@email.com", id:3,phone:"99999-9999",website:"aaaaaaaaaaa.com.br"},
	{name: "Jéssica", email: "jessica@email.com", id:4,phone:"99999-9999",website:"aaaaaaaaaaa.com.br"}, 
	{name: "Adilson", email: "adilson@email.com", id:5,phone:"99999-9999",website:"aaaaaaaaaaa.com.br"},  
	{name: "Carina", email: "carina@email.com", id:6,phone:"99999-9999",website:"aaaaaaaaaaa.com.br"}      
] 




app.get("/", (req:Request, res:Response) => {          
    res.status(201).send("Hello from Express")
})


app.post("enviar-usuarios",(req:Request, res:Response)=>{
    
})











// estou escutando uma porta com numero 3003
app.listen(3003,()=>{
    console.log(`servidor esta rodando na porta localhost:3003`)
})
