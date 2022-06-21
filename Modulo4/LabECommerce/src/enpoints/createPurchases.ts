import { Request, Response } from "express"
import { v4 as uuid } from "uuid"
import { Purchase } from "../types"
import {insertPurchasesByUser} from "../data/queries/insertPurchasesByUser"
import { getUserById } from "../data/queries/selectUsers"
import { getProductById } from "../data/queries/selectProducts"

// Função que realiza uma compra
export const createPurchases = async(
    req: Request,
    res: Response
): Promise <void>=> {

    try {
        
        const { userId, productId, quantity } =  req.body

        // Verificando se essas propriedades não foram passadas no body
        if(!userId || !productId || !quantity) {
            res.statusCode = 400
            throw new Error("'userId', 'productId' e 'quantity são obrigatórios!"); 
        }

        /* Invocando a função que pega as informações na tabela "labecommerce_users" para ver 
        se o id do usuário que está na tabela é igual ao userId que esta recebendo no body. */
        const user = await getUserById(userId)

        // Verificando se não tem o usuário.
        if(!user) {
            res.statusCode = 404
            throw new Error("Usuario não encontrado!");
        }

        /* Invocando a função que pega as informações na tabela "labecommerce_products" para ver 
        se o id do produto que está na tabela é igual ao productId que esta recebendo no body. */
        const product = await getProductById(productId)

        /* Verificando se não tem o produto. */ 
        if(!product) {
            res.statusCode = 404
            throw new Error("Produto não encontrado!");
        }

        // Fazendo o calculo das quantidades do produto com o seu valor.
        const totalPrice = product.price * quantity
        

        // Tipando uma compra
        const purchase: Purchase = {
            id: uuid(),
            userId,
            productId,
            quantity,
            totalPrice
        }
        // Invocando a função que insere uma compra na tabela "labecommerce_purchases".
        await insertPurchasesByUser(purchase)

        res.status(201).send("Compra realizada com sucesso!")

    } catch (error) {
        res.status(500).send({
            message: error.message
          });
    }
}