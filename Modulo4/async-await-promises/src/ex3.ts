import axios from "axios"
import { baseURL } from "./baseURL"

type user = {
	id: string;
	name: string;
	email: string;
}

// a- não 
// b - pois pode retornar rapido , pode demorar pra retornar ou simplemente , nem retornar 


const getSubscribers = async (): Promise<user[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data.map((res: any) => {
      return {
        id: res.id,
        name: res.name,
        email: res.email,
      };
    });
  };


 const main = async()=>{
     getSubscribers()
 }
 
 main()