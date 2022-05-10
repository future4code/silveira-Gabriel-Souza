export const goToLogin =(history) => {
    history.push("/Login")
}

export const goToFeedPage =(history) => {
    history.push("/")
}
export const PostPage =(history , id) => {
history.push(`/Comentarios/${id}`)
}

export const SingUpPage =(history) => {
    history.push("/Cadastro")
}


