import Button from "@material-ui/core/Button"
import React from "react";
import { ScreenContainer ,SignUpButtonContainer} from "./styled";
import LoginForm from "./loginForm"
import {useHistory} from "react-router-dom"
import {goToSignUpPage} from "../../routes/Coodinator"
import useUnprotectedPage from "../../hooks/useUnprotectedPage";


const LoginPage = () => {
    useUnprotectedPage()
    const history = useHistory()

    return (
        <ScreenContainer>
                <LoginForm/>
                <SignUpButtonContainer>
                <Button
                    onClick = {()=>goToSignUpPage(history)}
                    type={"submit"}
                    fullWidth
                    variant={"text"}
                    color={"primary"}
                   >
                    Não possui conta ? Cadastre-se
                    </Button>
                </SignUpButtonContainer>
              
          
        </ScreenContainer>
    )

}

export default LoginPage