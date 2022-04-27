import React from "react";
import { useNavigate } from "react-router-dom";
import { goToListTrips } from "../routes/coordinator";

const ApplicationFormPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h3>Inscreva-se para uma viagem</h3>
      <form>
        <select>
          <option selected value="">
            Escolha uma Viagem
          </option>
        </select>
        <label>
          <input type="text" name="nome" placeholder="Nome" />
        </label>
        <label>
          <input type="text" name="idade" placeholder="Idade" />
        </label>
        <label>
          <input
            type="textarea"
            name="textoCandidatura"
            placeholder="Texto de Candidatura"
          />
        </label>
        <label>
          <input type="text" name="duracao" placeholder="Duração" />
        </label>
        <label>
          <select>
            <option selected value="">
              Escolha um País
            </option>
          </select>
        </label>
      </form>
      <button onClick={() => goToListTrips(navigate)}>Voltar</button>
      <button>Inscreva-se</button>
    </>
  );
};
export default ApplicationFormPage;
