import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ButtonReset = styled.button `
  border: 1px solid black;
  border-radius: 6px;
  font-size: 14px;
  text-align: center;
  height: 40px;
  width: 70px;
  color: orangered;
  background-color: ghostwhite;
`


function ResetButton() {
    const onClickReset = () => {
      axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Gabriel-Souza/clear')
      .then(response => {})
    
    }
    return (
        <div>
            <ButtonReset onClick={onClickReset}>Limpar Matches</ButtonReset>
        </div>
    )
}



export default ResetButton