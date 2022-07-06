import connection from "./connection";

export default async function insertUser(User:any) {
   
    await connection("TodoListUser").insert(User)

    

}