import { IdGenerator } from './services/IdGenerator';
import { HashManager } from './services/HashManager';
import { app } from "./controller/app";
import UserBusiness from "./business/UserBusiness"
import UserController from "./controller/UserController"
import UserData from "./data/UserData";
import { Authenticator } from './services/Authenticator';

const userController = new UserController(
            new UserBusiness(
        new UserData(), 
        new IdGenerator(),
        new HashManager(),
        new Authenticator(),
    )
)
  
    ;

app.post("/signup",userController.signup)