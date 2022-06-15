import axios from "axios"
import { baseURL } from "./baseURL"


//  a ) getSubscribers
// b )  usando :promise<any[]>
// c 

async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  };

 const main = async()=>{
     getSubscribers()
 }
 
 main()