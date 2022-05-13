import React , {useState}from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./constants/theme";
import Router from "./routes/Router"
import {BrowserRouter} from "react-router-dom"
import Header from "./components/Header/Header"

function App() {

  const token = localStorage.getItem("token")
  const [rightButtonText ,setRightButtonText]=useState(token ? "Logout" : "Login")

  
  

  return (
   
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}> </Header>
        <Router  setRightButtonText={setRightButtonText}> </Router>
      </BrowserRouter>

      
   
    </ThemeProvider>
   
   
  );
}

export default App;
