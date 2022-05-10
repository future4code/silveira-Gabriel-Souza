import React from "react";
import { useNavigate } from "react-router-dom";
import { goToAdminHome } from "../routes/coordinator";

const TripDatailPageCard = (props) => {
  return (
    <>
      {props.name}
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
    </>
  );
};

const TripDatailPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h3>Detalhes</h3>

      <TripDatailPageCard> </TripDatailPageCard>
      <button onClick={() => goToAdminHome(navigate)}>Voltar</button>
    </>
  );
};
export default TripDatailPage;
