import React ,  {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import {StyledToolbar} from "./styled";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { goToFeedPage , goToLoginPage } from '../../routes/Coodinator';
// import { useHistory} from 'react-router-dom';
import {useNavigate} from "react-router-dom"


 const  Header = ( {rightButtonText ,setRightButtonText } )=> {
  
    const token = localStorage.getItem("token")
    // const history = useHistory()
    const navigate = useNavigate();
  
   
   
   
   
    const logout = () =>{

     localStorage.removeItem("token")
    }
    
    const rightButtonAction = () =>{
      if(token)
      {
     
        logout()
        setRightButtonText("Login")
        goToLoginPage(navigate)
      }else
      {
        goToLoginPage(navigate)
      }
    }

  return (
   
      <AppBar position="static">
        <StyledToolbar>
         
         
            
            <Button onClick={()=>goToFeedPage(navigate)} color="inherit">labEddit</Button>
          <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
        </StyledToolbar>
      </AppBar>
   
  );
}
export default Header
