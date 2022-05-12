import React , {useState}from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./constants/theme";
import Router from "./routes/Router"
import {BrowserRouter} from "react-router-dom"
import Header from "./component/Header/Header"

function App() {

  const token = localStorage.getItem("token")
  const [rightButtonText ,setRightButtonText]=useState(token ? "Logout" : "Login")

  
  

  return (
   
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header> </Header>
        <Router></Router>
      </BrowserRouter>

      
   
    </ThemeProvider>
   
   
  );
}

export default App;
