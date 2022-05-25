
import React from "react";
import { ScreenContainer } from "./styled";
import SignUpForm from "./SignUpForm"
// import {useHistory} from "react-router-dom"
import {useNavigate} from "react-router-dom"
import useUnprotectedPage from "../../hooks/useUnprotectedPage";


const SignUpPage = ({setRightButtonText }) => {
    useUnprotectedPage()
    // const history = useHistory()
    const navigate = useNavigate();

    return (
        <ScreenContainer>
                <SignUpForm setRightButtonText={setRightButtonText} />
        </ScreenContainer>
    )

}

export default SignUpPage