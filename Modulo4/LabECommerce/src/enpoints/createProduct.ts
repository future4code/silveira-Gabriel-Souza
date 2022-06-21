import { Request, Response } from "express";
import { v4 as uuid } from "uuid"
import {insertProduct} from "../data/queries/insertProduct";
import { getProductByName } from "../data/queries/selectProducts";
import { Product } from "../types";

// Função que cria um produto
export const createProduct = async(
    req: Request,
    res: Response
): Promise <void> => {
    try {
        
        const { name, price, imageUrl } = req.body

        // Verificando se essas propriedades não foram passadas no body
        if(!name || !price || !imageUrl) {
            res.statusCode = 400
            throw new Error("'name', 'price' e 'imageUrl' são obrigatórios!")
        }

        /* Invocando a função que pega as informações na tabela "labecommerce_products" para 
        ver se o name que está na tabela é igual ao que esta recebendo do body */
        const nameProduct = await getProductByName(name)

        /* Verificando se o nome do produto já existe. */
        if(nameProduct) {
            res.statusCode = 409
            throw new Error("Esse produto já está cadastrado!");
        }

        // Tipando um produto
        const product: Product = {
            id: uuid(),
            name,
            price,
            imageUrl
        }

        // Invocando a função que insere um produto na tabela "labecommerce_products."
        await insertProduct(product)

        res.status(201).send("Produto cadastrado com sucesso!")

    } catch (error) {
        res.status(500).send({
            message: error.message
          });
    }
}