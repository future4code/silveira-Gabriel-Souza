import React ,{useState , useEffect} from "react";
import { goToApplicationForm, goToHome } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";
import axios from "axios";




const ListTripsPage = () => {
  const navigate = useNavigate();
  const [listTrips,setListTrip]= useState([])
  
  
// const getTrips = async() =>{
  
//   try{
//     const res = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Gabriel-Souza-Silvera/trips");
   
//     //  console.log(res.data.trips);
//     setListTrip(res.data.trips);
//     console.log(listTrips);
//      }
//      catch(error)
//      {
//       //  console.log(error)
//      }
//     }
  
//     useEffect(() => {
//       getTrips();
//     }, []);    
     
    
  useEffect(()=>{
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Gabriel-Souza-Silvera/trips")
    .then((res)=>{
      // console.log(res.data.trips)
      setListTrip(res.data.trips)
      // console.log(listTrips) 
    });
  },[])

  console.log(listTrips) 
  return (
    <>
    
      <button onClick={() => goToHome(navigate)}> Voltar</button>
      <button onClick={() => goToApplicationForm(navigate)}>Inscreva-se</button>
      <h3>Lista de Viagens</h3>
      {/* { <>
        {listTrips.map( trip =>{
          return <> <h4> {trip.name} </h4>  <button>    APAGAR </button> </>
        })} 
      </> }  */}
         
    </>
  );
};
export default ListTripsPage;
