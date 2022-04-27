import React from "react";
import { goToApplicationForm, goToHome } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";

const listTripCard = (props) => {
  return (
    <form>
      <label>
        Nome:
        <input type="text" name="name" />
      </label>
      <label>
        Descrição:
        <input type="text" name="descrição" />
      </label>
      <label>
        Planeta:
        <input type="text" name="planeta" />
      </label>
      <label>
        Duração:
        <input type="text" name="duração" />
      </label>
      <label>
        Data:
        <input type="Date" name="data" />
      </label>
    </form>
  );
};

const ListTripsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => goToHome(navigate)}> Voltar</button>
      <button onClick={() => goToApplicationForm(navigate)}>Inscreva-se</button>
      <h3>Lista de Viagens</h3>
      <listTripCard> </listTripCard>
    </>
  );
};
export default ListTripsPage;
