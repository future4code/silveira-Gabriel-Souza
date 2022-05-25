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
     

const getTrips=()=>
{
  axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Gabriel-Souza-Silvera/trips")
  .then((res)=>{
    setListTrip(res.data.trips)
  })
}
const options = listTrips.map(e=>{
  return(
    <div> Nome : {e.name}  Descricação : {e.description}
          {/* {e.date}
          {e.durationInDays}
          {e.planet} */}
     </div>
  )
})

useEffect(()=>{
  getTrips()
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
      {options}
         
    </>
  );
};
export default ListTripsPage;
