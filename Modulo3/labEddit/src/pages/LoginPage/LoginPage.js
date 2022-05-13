import Button from "@material-ui/core/Button"
import React from "react";
import { ScreenContainer ,SignUpButtonContainer} from "./styled";
import LoginForm from "./loginForm"
// import {useHistory} from "react-router-dom"
import {useNavigate} from "react-router-dom"
import {goToSignUpPage} from "../../routes/Coodinator"
import useUnprotectedPage from "../../hooks/useUnprotectedPage";


const LoginPage = ({setRightButtonText }) => {
    useUnprotectedPage()
    // const history = useHistory()
    const navigate = useNavigate();

    return (
        <ScreenContainer>
                <LoginForm  setRightButtonText={setRightButtonText} />
                <SignUpButtonContainer>
                <Button
                    onClick = {()=>goToSignUpPage(navigate)}
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