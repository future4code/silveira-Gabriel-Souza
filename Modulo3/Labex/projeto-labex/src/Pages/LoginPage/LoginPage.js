import React from "react";
import { useNavigate } from "react-router-dom";
import { goToAdminHome, goToHome } from "../routes/coordinator";
const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <form>
        <label>
          <input type="text" name="e-mail" placeholder="E-mail" />
        </label>
        <label>
          <input type="password" name="senha" placeholder="senha" />
        </label>
      </form>
      <button onClick={() => goToHome(navigate)}>Voltar</button>
      <button onClick={() => goToAdminHome(navigate)}>Entrar</button>
    </>
  );
};
export default LoginPage;
