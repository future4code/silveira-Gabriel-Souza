import { useNavigate } from "react-router-dom";
import {
  goToLogin,
  goToCreateTrip,
  goToTripDetail,
} from "../routes/coordinator";

const listTripsCard = (props) => {
  return (
    <>
      {props.nome}
      <button>APAGAR</button>
    </>
  );
};

const AdminHomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h3>Painel Adminstrativo</h3>
      <button onClick={() => goToLogin(navigate)}>Voltar</button>
      <button onClick={() => goToCreateTrip(navigate)}>Criar Viagem</button>
      <button onClick={() => goToLogin(navigate)}>Logout</button>

      <listTripsCard onClick={() => goToTripDetail(navigate)}> </listTripsCard>
    </>
  );
};
export default AdminHomePage;
