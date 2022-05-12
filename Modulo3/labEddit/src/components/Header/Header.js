import React ,  {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import {StyledToolbar} from "./styled";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { goToFeedPage , goToLoginPage } from '../../routes/Coodinator';
import { useHistory} from 'react-router-dom';


 const  Header = ()=> {
    const history = useHistory()
  
   
   
   
   
    const logout = () =>{

     localStorage.removeItem("token")
    }
    
    const rightButtonAction = () =>{
      if(token)
      {
        logout()
        setRightButtonText("Login")
        goToLoginPage(history)
      }else
      {
        goToLoginPage(history)
      }
    }

  return (
   
      <AppBar position="static">
        <StyledToolbar>
         
         
            
            <Button onClick={()=>goToFeedPage(history)} color="inherit">labEddit</Button>
          <Button onClick={()=>rightButtonAction} color="inherit">{rightButtonText}</Button>
        </StyledToolbar>
      </AppBar>
   
  );
}
export default Header
