import { app } from "./app"
import { createUser } from "./enpoints/createUser"
import { createProduct } from "./enpoints/createProduct"
import { createPurchases } from "./enpoints/createPurchases"
import { getAllUsers } from "./enpoints/getAllUsers"
import { getAllProducts } from "./enpoints/getAllProducts"
import { getPurchasesByUserId } from "./enpoints/getPurchasesByUserId"

// Endpoint que pega todos os users
app.get("/users", getAllUsers)
// Endpoint que pega todas as compra de um usuário pelo user_id
app.get("/users/:userId/purchases", getPurchasesByUserId)
// Endpoint que cria um usuário
app.post("/users", createUser)

//Endpoint que pega todos os produtos
app.get("/products", getAllProducts)
//Endpoint que cria um produto
app.post("/products", createProduct)

// Endpoint que realiza uma compra
app.post("/purchases", createPurchases)





