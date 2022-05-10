import React from 'react';
import styled from 'styled-components'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";


const MyTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#43a000",
      },
      secondary: {
        main: "#f44336",
      },
    },
  });

  const PalavraAstro = styled.span`
    background: -webkit-linear-gradient(left, #ffc107 45%, #ff1744 0%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 40px;

`;

const AppBarContainer = styled.div`
    display:flex;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    align-items:center;
    padding: 10px;
`

const Buttons = styled.button `
  height: 40px;
  width: 70px;
  border: 1px solid black;
  border-radius: 8px;
  outline-style: none;
  font-size: 14px;
  text-align: center;
  color: orangered;
  background-color: ghostwhite;
`

function AppBar(props) {
    return (
        <MuiThemeProvider theme={MyTheme}>
        <AppBarContainer>
            <Buttons onClick={props.goToChooseProfilePage}>Escolher</Buttons>
            <PalavraAstro>astromatch</PalavraAstro>
            <Buttons onClick={props.goToMatchListPage} >Lista</Buttons>
        </AppBarContainer>
        </MuiThemeProvider>
    )
}



export default AppBar;