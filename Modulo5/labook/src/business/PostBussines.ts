import { Authenticator } from "./../services/Authenticator";
import { HashManager } from "./../services/HashManager";
import PostData from "../data/PostData";
import Post from "../model/Post";
import { IdGenerator } from "../services/IdGenerator";
import { CreatePostInputDto } from "../types/createPostnIputDTO";

export default class PostBusiness {
  constructor(
    private postData: PostData,
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ) {}
  createPost = async (input: CreatePostInputDto, token: string) => {
    const { photo, description, type, createdAt } = input;
    console.log(input)

    
    if (!photo || !description || !type || !createdAt) {
      throw new Error("Campos Inválidos");
    }
    const id = this.idGenerator.generateId();
  
    const tokenData = this.authenticator.getTokenData(token);
    if (!token) {
      throw new Error("Token invalido");
    }
    const newPost = new Post(
      id,
      photo,
      description,
      type,
      createdAt,   
      tokenData.id
    );
    await this.postData.insert(newPost);
  };
}
