import React from 'react'
import Main from './Components/Main/Main'
import ResetButton from './Components/ResetButton/ResetButton'
import styled from 'styled-components';

const ContainerAstroMatch = styled.div ` 
  display: flex;
  justify-content: center;
  align-items: center;

  
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 100%;
    margin: auto;
    padding: 0px;
  }
  @media only screen 
    and (device-width : 375px) 
    and (device-height : 812px) 
    and (-webkit-device-pixel-ratio : 3) { };
    @media only screen 
    and (device-width : 414px) 
    and (device-height : 736px) 
    and (-webkit-device-pixel-ratio : 3) { };
    @media only screen 
    and (device-width : 360px) 
    and (device-height : 640px) 
    and (-webkit-device-pixel-ratio : 3) { };
`
const HomePage = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;

`


function App(){
  return(
    <HomePage>
    <ContainerAstroMatch>
      <Main/>
    </ContainerAstroMatch>
    <ResetButton/>
    </HomePage>
    
    
  )
}

export default App