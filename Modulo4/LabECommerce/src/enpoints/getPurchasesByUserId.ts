import { Request, Response } from "express";
import {selectByUserId} from "../data/queries/selectByUserId";

// Função que pega todas as compra de um usuário pelo userId
export const getPurchasesByUserId = async(
    req: Request,
    res: Response
): Promise <void> => {
    try {

        const { userId }= req.params
        
        // Invocando a função que pega as informações no banco de dados
        const purchases = await selectByUserId(userId)

        // Verificando se não tem compras realizadas pelo usuario
        if(!purchases) {
            res.statusCode = 404
            throw new Error("Não existe compra realizada por esse usuário!");
        }

        res.status(200).send(purchases)
    } catch (error) {
        res.status(500).send({
            message: error.message
          });
    }
}


