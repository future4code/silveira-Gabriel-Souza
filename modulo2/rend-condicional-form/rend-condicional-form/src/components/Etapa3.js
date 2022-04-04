import React from "react";
import styled from "styled-components";

const Titulo = styled.h3`
background-color:aliceblue;
`
class Etapa3 extends React.Component{
    render() {
        return(
            <div>
            <Titulo>ETAPA 3 - INFIRMAÇÔES GERAIS DE ENSINO</Titulo>
           <p>5.Porque voce não terminou um curso de graduação ?</p>
           <input
                   placeholder={""}
                   
                 />
           <p>4.Curso Complemetar</p>
           <select name="escolaridade">
            <option value="0"> Nenhum </option>
            <option value="1"> Nível Técnico </option>
            <option value="2"> Nível basico </option>
       </select>
           </div>  
        );
    }
}

export default Etapa3;