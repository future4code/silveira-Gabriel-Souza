import { Request, Response } from "express";
import {v4 as uuid} from "uuid"
import { User } from "../types";
import {insertUser} from "../data/queries/insertUser";
import { getUserByEmail } from "../data/queries/selectUsers";

// Função que cria um usuário 
export const createUser = async(
    req: Request,
    res: Response
): Promise <void>=> {
    try {
        const { name, email, password } = req.body

        // Verificando se essas propriedades não foram passadas no body
        if(!name || !email || !password) {
            res.statusCode = 400
            throw new Error("'name', 'email' e 'password' são obrigatórios!");  
        }

        /* Invocando a função que pega as informações na tabela "labecommerce_users" para 
        ver se o email que está na tabela é igual ao que esta recebendo do body */
        const user  = await getUserByEmail(email)

        // Verificando se tem usuários com o email igual do body 
        if(user) {
            res.statusCode = 409
            throw new Error("Esse email já esta cadastrado!");
        }

        // Verificando se o email não tem "@" e ".com"
        if(!email.includes("@") || !email.includes(".com")) {
            res.statusCode = 401
            throw new Error("O campo do email deve conter um '@' e um '.com'");
        }

        // Verificando se o password não tem no mínimo seis caracteres
        if(password.length < 6) {
            res.statusCode = 401
            throw new Error("A senha deve conter no mínimo seis caracteres!");  
        }

        // Tipando um usuario
        const newUser: User = {
            id: uuid(),
            name,
            email,
            password
        }

        // Invocando a função que insere um usuario na tabela "labecommerce_users".
         await insertUser(newUser)

        res.status(201).send("Usuário criado com sucesso!")

    } catch (error) {
        res.status(500).send({
            message: error.message
          });
    }
}