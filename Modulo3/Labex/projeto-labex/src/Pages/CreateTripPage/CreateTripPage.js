import React from "react";

import { useNavigate } from "react-router-dom";
import { goToAdminHome } from "../routes/coordinator";

const CreateTripPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h3>Inscreva-se para uma viagem</h3>
      <form>
        <label>
          <input type="text" name="nome" placeholder="Nome" />
        </label>
        <select>
          <option selected value="">
            Escolha uma Viagem
          </option>
        </select>

        <label>
          <input type="date" name="idade" placeholder="dd/mm/aaaa" />
        </label>
        <label>
          <input type="text" name="descricação" placeholder="Descrição" />
        </label>
        <label>
          <input type="text" name="duracao" placeholder="Duração em dias " />
        </label>
        <label>
          <select>
            <option selected value="">
              Escolha um País
            </option>
          </select>
        </label>
      </form>
      <button onClick={() => goToAdminHome(navigate)}> Voltar</button>
      <button>criar</button>
    </>
  );
};
export default CreateTripPage;
