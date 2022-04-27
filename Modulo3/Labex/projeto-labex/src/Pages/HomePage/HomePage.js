import React from "react";
import { useNavigate } from "react-router-dom";
import { goToViagens, goToLogin } from "../routes/coordinator";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <>
        <h3>LABEX</h3>
        <>
          <button onClick={() => goToViagens(navigate)}>Ver Viagens</button>
          <button onClick={() => goToLogin(navigate)}>Area Admin</button>
        </>
      </>
    </>
  );
};
export default HomePage;
