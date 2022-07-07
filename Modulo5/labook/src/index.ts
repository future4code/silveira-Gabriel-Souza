import { IdGenerator } from "./services/IdGenerator";
import { HashManager } from "./services/HashManager";
import { app } from "./controller/app";
import UserBusiness from "./business/UserBusiness";
import PostBusiness from "./business/PostBussines";
import UserController from "./controller/UserController";
import PostController from "./controller/PostController";
import UserData from "./data/UserData";
import PostData from "./data/PostData";
import { Authenticator } from "./services/Authenticator";

const userController = new UserController(
  new UserBusiness(
    new UserData(),
    new IdGenerator(),
    new HashManager(),
    new Authenticator()
  )
);
const postController = new PostController(
  new PostBusiness(
    new PostData(),
    new IdGenerator(),
    new HashManager(),
    new Authenticator()
  )
);

app.post("/signup", userController.signup);
app.post("/login", userController.login);
app.post("/post/create", postController.createPost);
