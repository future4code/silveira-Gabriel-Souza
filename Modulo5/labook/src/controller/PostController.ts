
import { CreatePostInputDto   } from "../types/createPostnIputDTO";
import { Response, Request } from "express";
import PostBusiness from "../business/PostBussines";

export default class postController {
  constructor(private postBusiness: PostBusiness) {}

  createPost = async (req: Request, res: Response) => {
    const { photo,description,createdAt,type } = req.body;
    const token: string = req.headers.authorization as string

    const input: CreatePostInputDto = {
      photo,
      description,
      type,
      createdAt,
      
    };

   
    try {
        
      const newPost = await this.postBusiness.createPost(input,token);

      res
        .status(201)
        .send({ message: "Post criado com sucesso",newPost });
    } catch (error:any) {
    //   res.status(500).send({ message: "ocorreu um problema" });
    res.status(500).send(error.sqlMessage || error.message);
    }
  };


}
