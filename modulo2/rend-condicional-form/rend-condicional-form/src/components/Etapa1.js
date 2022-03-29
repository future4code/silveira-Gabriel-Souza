const Etapa1 = () =>{
    return <div>
      <h3>Etapa 1 - DADOS GERAIS </h3>
      <p>1.Qual o seu nome</p>
      <input
        placeholder={"Nome do Usuário"}
        
      
      />
      <p>2.Qual sua idade</p>
      <input
        placeholder={"Idade do Usuário"}
       
       
      />
      <p>3.Qual o seu Email ?</p>
      <input
        placeholder={"Email do Usuário"}
      
   
      />
      <p>4.Qual sua escolaridade</p>
      <select name="escolaridade">
        <option value="em"> Ensino Médio </option>
        <option value="nt"> Nível Técnico </option>
        <option value="ns"> Nível Superior </option>
      </select>
    </div>
 
} ; 
export default Etapa1;