import axios from "axios"
import { baseURL } from "./baseURL"


//  a )assincrona 

async function createNews(
    title: string,
    content: string,
    date: number
  ): Promise<void> {
    await axios.put(`${baseURL}/news`, {
      title: title,
      content: content, 
      date: date
    });
  }

 const main = async()=>{
     createNews("teste","teste",10/10/10)
 }
 
 main()