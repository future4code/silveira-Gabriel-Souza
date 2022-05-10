import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import {StyledToolbar} from "./styled";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { goToFeedPage , goToLoginPage } from '../../routes/Coodinator';
import { useHistory } from 'react-router-dom';

 

 const  Header = ()=> {
    const history = useHistory()

  return (
   
      <AppBar position="static">
        <StyledToolbar>
         
         
            
            <Button onClick={()=>goToFeedPage(history)} color="inherit">labEddit</Button>
          <Button onClick={()=>goToLoginPage(history)} color="inherit">Login</Button>
        </StyledToolbar>
      </AppBar>
   
  );
}
export default Header
