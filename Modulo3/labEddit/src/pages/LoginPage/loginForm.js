import Button from "@material-ui/core/Button"
import  TextField  from "@material-ui/core/TextField";
import React from "react";
import useForm from "../../hooks/useForm";
import { InputsContainer } from "./styled";
import {login} from "../../services/user"
// import {useHistory} from "react-router-dom"
import{useNavigate} from "react-router-dom"
 

const LoginForm = ({setRightButtonText }) => {

    const [form,onChange,clear]=useForm({email: "" , password: ""})
    // const history=useHistory();
    const navigate = useNavigate();
    const onSubmitForm=(event)=>{
        
    event.preventDefault()
    login(form,clear,navigate,setRightButtonText)
    }

 
    return (
       
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
             
              
     
    )

}

export default LoginForm