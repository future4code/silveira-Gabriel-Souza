import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Etapa4 from "./components/Etapa4";
import styled from "styled-components";
import React from "react";

class App extends React.Component {
  state = {
    etapa:1,
  }
  irParaProximaEtapa=() =>{
    let newEtapa = this.state.etapa+1 ; 
    if(newEtapa!=5)
      {
       this.setState({etapa:newEtapa})
      }
   
    
 
  }
  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1: 
        return <Etapa1 />;
      case 2: 
        return <Etapa2 />;
        case 3: 
        return <Etapa3 />;
        case 4: 
        return <Etapa4 />;

    }
  }
 
  render() {
    return (
          <div>
            {this.renderizaEtapa()}
          
           
            <button onClick={this.irParaProximaEtapa} >Próxima Etapa</button>
            
   
       
          </div>
        );
  }
}

export default App;
