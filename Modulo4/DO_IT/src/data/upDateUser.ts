import connection from "./connection";

export default async function upDatetUser(name:string,nickname:string,id:string) {
    
   await connection ('TodoListUser')
    .update({
        name:name,
        nickname:nickname
          })
    .where({id:id})
    

}