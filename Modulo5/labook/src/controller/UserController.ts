import { SignupInputDto } from "../types/signupInputDTO";
import { Response, Request } from "express";
import UserBusiness from "../business/UserBusiness";

export default class userController {
  constructor(private userBusiness: UserBusiness) {}

  signup = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    const input: SignupInputDto = {
      name,
      email,
      password,
    };

    try {
      const token = await this.userBusiness.signup(input);
     
      res.status(201).send({message:"Usuario cadastrado com sucesso",token})
    } catch (error) {
        res.status(500).send({message:"deu ruim "})
    }
  };
}
