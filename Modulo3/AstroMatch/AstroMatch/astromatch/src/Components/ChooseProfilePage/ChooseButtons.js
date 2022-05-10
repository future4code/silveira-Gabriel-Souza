import React from 'react';
import styled from 'styled-components'
import Button from "@material-ui/core/Button";
import BotaoX from "@material-ui/icons/Clear";
import BotaoCoracao from "@material-ui/icons/FavoriteBorder";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

const MyTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#43a047",
      },
      secondary: {
        main: "#f44336",
      },
    },
  });

const ButtonsContainer = styled.div`
    display:flex;
    justify-content: space-around;
    padding: 5px;
`

function ChooseButtons(props) {

    return (
       
        <ButtonsContainer>
            <MuiThemeProvider theme={MyTheme}>
                <Button 
                    onClick = {props.onClickNo}
                    size="small"
                    variant="fab" 
                    color="secondary">
                    <BotaoX />
                </Button>
                <Button 
                    onClick = {props.onClickYes}
                    size="small"
                    variant="fab" 
                    color="primary">
                <BotaoCoracao />
                </Button>
                </MuiThemeProvider>
            </ButtonsContainer>
    )

}



export default ChooseButtons