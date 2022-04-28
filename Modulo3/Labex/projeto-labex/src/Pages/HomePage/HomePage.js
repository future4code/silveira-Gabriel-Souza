import React from "react";
import { useNavigate } from "react-router-dom";
import { goToViagens, goToLogin } from "../routes/coordinator";
import {ContainerHome,ContainerBotoes} from "./style"
import styled from "styled-components";




const HomePage = () => {
  const navigate = useNavigate();

  return (
    
      <ContainerHome>
        <h3>LABEX</h3>
        <ContainerBotoes>
          <button onClick={() => goToViagens(navigate)}>Ver Viagens</button>
          <button onClick={() => goToLogin(navigate)}>Area Admin</button>
        </ContainerBotoes>
      </ContainerHome>
  
  );
};
export default HomePage;
