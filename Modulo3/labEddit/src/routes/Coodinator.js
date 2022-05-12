export const goToLoginPage =(history) => {
    history.push("/Login")
}

export const goToFeedPage =(history) => {
    history.push("/")
}
export const goToPostPage =(history , id) => {
history.push(`/Comentarios/${id}`)
}

export const goToSignUpPage =(history) => {
    history.push("/Cadastro")
}


