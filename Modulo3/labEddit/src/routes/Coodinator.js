import {useNavigate} from "react-router-dom"




export const goToLoginPage =(navigate) => {
    navigate("/Login")
}

export const goToFeedPage =(navigate) => {
    //console.log("fui chamado ")
    navigate("/")
}
export const goToPostPage =(navigate, id) => {
navigate(`/Comentarios/${id}`)
}

export const goToSignUpPage =(navigate) => {
    navigate("/Cadastro")
}


