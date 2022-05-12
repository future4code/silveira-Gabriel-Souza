import Button from "@material-ui/core/Button"
import  TextField  from "@material-ui/core/TextField";
import React from "react";
import useForm from "../../hooks/useForm";
import { useHistory } from "react-router-dom";

import { InputsContainer } from "./styled";
import {signUp} from "../../services/user"





const SignUpForm = () => {
    const history = useHistory()
    const [form,onChange,clear]=useForm({email: "" ,name:"" , password: ""})


    const onSubmitForm=(event)=>{
    
       console.log(form)
       event.preventDefault()
       signUp(form,clear,history)
   

    }
    return (
       
              <InputsContainer>
                   <form onSubmit={onSubmitForm}>

                   <TextField
                        name={"name"}
                        value={form.name}
                        onChange={onChange}
                        label={"Nome"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"normal"}
                    /> 
              
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
                    SignUp
                    </Button>

                    </form>


                </InputsContainer>
             
              
     
    )

}

export default SignUpForm