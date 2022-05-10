import React, { Component }from 'react'
import styled from 'styled-components'
import Button from "@material-ui/core/Button";
import BotaoX from "@material-ui/icons/Clear";
import BotaoCoracao from "@material-ui/icons/FavoriteBorder";




const Button1Container = styled.div`
  position: absolute;
  left: 290px;
  top: 430px;
`;

const Button2Container = styled.div`
  position: absolute;
  right: 300px;
  top: 430px;
`;

export class Botoes extends Component {

    render() {
        return (
           <div>
           <Button2Container>
          <Button variant="fab" color="secondary">
            <BotaoX />
          </Button>
        </Button2Container>
        <Button1Container>
        <Button variant="fab" color="primary">
            <BotaoCoracao />
          </Button>
        </Button1Container>
       </div>
        )
        
        
    }

}




