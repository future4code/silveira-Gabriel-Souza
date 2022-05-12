
import React from "react";
import { ScreenContainer } from "./styled";
import SignUpForm from "./SignUpForm"
import {useHistory} from "react-router-dom"
import useUnprotectedPage from "../../hooks/useUnprotectedPage";


const SignUpPage = () => {
    useUnprotectedPage()
    const history = useHistory()

    return (
        <ScreenContainer>
                <SignUpForm/>
        </ScreenContainer>
    )

}

export default SignUpPage