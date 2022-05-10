import Button from "@material-ui/core/Button"
import  TextField  from "@material-ui/core/TextField";
import React from "react";
import useForm from "../../hooks/useForm";

import { ScreenContainer ,InputsContainer ,SignUpButtonContainer, LoginFormContainer } from "./styled";

const LoginPage = () => {

    const [form,onChange,clear]=useForm({email: "" , password: ""})


    const onSubmitForm=(event)=>{
    event.preventDefault()


    }
    return (
        <ScreenContainer>
              <InputsContainer>
                   <form onSubmit={onSubmitForm}>
              
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"email"}
                    />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"password"}
                    />
                   <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                   >
                    Login
                    </Button>

                    </form>


                </InputsContainer>
                <SignUpButtonContainer>
                <Button
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