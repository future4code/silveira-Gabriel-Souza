
import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import getUser from "./endpoints/getUser";
import createUser from "./endpoints/createUser";
import editUser from "./endpoints/editUser";

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});



app.get('/user/:id',getUser)
app.post('/user',createUser)
app.put("/user/:id",editUser)



