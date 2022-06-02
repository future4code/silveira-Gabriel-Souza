import express, { Request, Response } from "express"
import cors from "cors"
import { produtos , produto } from "./data"

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("Servidor disponível em 3003"))

app.get('/test', (req: Request, res: Response) => {
  
 console.log("OI")
  res.send(`Olá`)
})


app.post("/produtos",(req:Request, res:Response) =>{
  try{
    const novoProduto :produto = req.body

    if(!novoProduto )
    {
      res.statusCode=422 
       throw new Error("Crie um novo novamente o produto ")

    }

   let productNotFaund = true 
  for(let i =0 ; i < produtos.length ; i ++ )
  {
    if(produtos[i].id===novoProduto.id)
    {
       productNotFaund=false , 
       i=produtos.length
    }
  }
  if(!productNotFaund)
  {
    res.statusCode=405
    throw Error("ID ja cadastrado")
    
  }
  else
  {
    produtos.push(novoProduto)
    console.log("deu bom1")
  res.send(`deu bom 1 `)

  }


  } catch (err: any) {
    if (res.statusCode === 200) {
      res.status(500)
        .send("Erro inesperado")
    } else {
      res.send(err.message)
    }
  } 
}
)
app.get("/produtos/all" ,( req:Request, res:Response)=>{

  const allProducts = produtos 
   console.table(allProducts)


   console.log("OI")
   res.send(`Olá`)
}
)
