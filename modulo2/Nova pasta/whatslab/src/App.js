import React from "react";
import Post from "./components/Post/Post";
import styled from "styled-components";

const arrayPosts = [
  {
  
  },

];

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
  align-items: center;
`;

const FormContainer = styled.div`
  display: flex;
 
  justify-content: space-between;
  flex-direction: row;
  height: 40px;
  width: 630px;
  border: 1px solid gray;
  margin: 20px;
  padding: 10px;
`;

class App extends React.Component {
  state = {
    posts: arrayPosts,
    userName: "",
    userMensage: "",
    
  };

  changeUserName = (event) => {
    this.setState({ userName: event.target.value });
  };

  changeUserMensage = (event) => {
    this.setState({ userMensage: event.target.value });
  };

 

  addNewPost = () => {
    const newPost = {
      nomeUsuario: this.state.userName,
      mensagemUsuario: this.state.userMensage,
     };

    this.setState({
      posts: [...this.state.posts, newPost],
      userName: "",
      userMensage: "",
     
    });
  };

  render() {
    const componentesPost = this.state.posts.map((p) => {
      return (
        <Post
          nomeUsuario={p.nomeUsuario}
          mensagemUsuario={p.mensagemUsuario}
      
        />
      );
    });

    return (
      <AppContainer>
       
       {componentesPost}
        <FormContainer>
          <input
            placeholder={"Nome do Usuário"}
            value={this.state.userName}
            onChange={this.changeUserName}
          />
          <input
            placeholder={"Mensagem : "}
            value={this.state.userMensage}
            onChange={this.changeUserMensage}
          />
       
          <button onClick={this.addNewPost}>Eviar mensagem</button>
        </FormContainer> 
        
        
      </AppContainer>

    );
  }
}

export default App;
