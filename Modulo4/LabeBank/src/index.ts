//importando express com Request e Response e cors
import express, { Request, Response } from "express";
import cors from "cors";

//extra: importando configuração de rede do node
import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

// app.get('/test', (req: Request, res: Response) => {

//   console.log("OI")
//    res.send(`Olá`)
//  })
type statement = {
  value: number;
  date: string;
  description: string;
};
type transaction = {
  cpfSender: string;
  nameSander: string;
  cpfRecipient: string;
  cdpRecipient: string;
  value: number;
  validated: boolean;
};
type user = {
  name: string;
  cpf: string;
  birthDate: string;
  balance: number;
  transactions: transaction[] | any;
};
let users: user[] = [
  {
    name: "Gabriel",
    cpf: "11111111111",
    birthDate: "30/08/1991",
    balance: 0,
    transactions: {},
  },
  {
    name: "Sandra",
    cpf: "21111111111",
    birthDate: "22/11/1999",
    balance: 0,
    transactions: {},
  },
  {
    name: "Jose",
    cpf: "31111111111",
    birthDate: "09/11/1996",
    balance: 0,
    transactions: {},
  },
  {
    name: "Camila",
    cpf: "41111111111",
    birthDate: "07/01/1996",
    balance: 0,
    transactions: {},
  },
  {
    name: "Gabriela",
    cpf: "51111111111",
    birthDate: "27/08/1996",
    balance: 0,
    transactions: {},
  },
  {
    name: "Raquel",
    cpf: "61111111111",
    birthDate: "09/08/1996",
    balance: 0,
    transactions: {},
  },
];
app.get("/users", (res: Response, req: Request) => {
  console.table(users);
});
app.post("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;
  let dateNow:any = new Date()



  console.log(dateNow)

  try {
    const { name, cpf, birthDate, balance, transactions } = req.body;
    let aux=birthDate.split("/") 
    console.log(aux)
    let aux2:any = aux[2]+"-"+aux[1]+"-"+aux[0]+" 00:00:00" 
     console.log(aux2)
     aux= new Date(aux2)
     console.log(1,aux)
    let diferenceAge= Date((dateNow-aux2))


    console.log(diferenceAge)


   
    if (!name || !cpf || !birthDate || balance!==0  || !transactions ) {
      errorCode = 411;
   

      throw new Error("Please Check the fildes !");
    }
    


    const newUser: user = {
      name,
      cpf,
      birthDate,
      balance,
      transactions,
    };
    users.push(newUser);
    res.status(201).send({ message: "user created successefully" });
  } catch (error: any) {
    res.status(errorCode).send({ messagem: error.message });
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
