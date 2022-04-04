import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
  align-items: center;
`
const insertContainer = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 100px;
  
`

class App extends React.Component {
  state = {
    posts:[
      {
          nomeUsuario:'paulinha',
          fotoUsuario:'https://picsum.photos/50/50',
          fotoPost:'https://picsum.photos/200/153'
      },
      {
          nomeUsuario:'leticia',
          fotoUsuario:'https://picsum.photos/51/50',
           fotoPost:'https://picsum.photos/200/120'
      },
        {
          nomeUsuario:'gabriel',
          fotoUsuario:'https://picsum.photos/52/50',
          fotoPost:'https://picsum.photos/200/151'
        }
    ],
    valorInputNomeUsuario:"",
    valorInputFotoUsuario:"",
    valorInputFotoPost:"",
  };
  adiconaPost = () => {
    const novoPost={
      nomeUsuario:this.state.valorInputNomeUsuario,
      fotoUsuario:this.state.valorInputFotoUsuario,
      fotoPost:this.state.valorInputFotoPost,
    };
  const novoPosts=[...this.state.posts,novoPost];
  this.setState({posts:novoPosts});
  this.setState({valorInputFotoPost:""});
  this.setState({valorInputFotoUsuario:""});
  this.setState({valorInputNomeUsuario:""});


  };
  onChangeInputFotoUsuario=(event)=>{
    this.setState({valorInputFotoUsuario:event.target.value});

  };
  onChangeInputNomeUsuario=(event)=>{
    this.setState({valorInputNomeUsuario:event.target.value});

  };
  onChangeInputFotoPost=(event)=>{
    this.setState({valorInputFotoPost:event.target.value});

  };

  render() {
    let listaDePosts = this.state.posts.map((post) => { return (<Post nomeUsuario={post.nomeUsuario}
      fotoUsuario={post.fotoUsuario}  fotoPost={post.fotoPost} />)})
    return (

      <div>
     <insertContainer>
      <input
        value={this.state.valorInputNomeUsuario}
        onChange={this.onChangeInputNomeUsuario}
        placeholder={"Nome do Usuario"}
        />
      <input
        value={this.state.valorInputFotoUsuario}
        onChange={this.onChangeInputFotoUsuario}
        placeholder={"Link foto do Usuario"}
        />
        <input
        value={this.state.valorInputFotoPost}
        onChange={this.onChangeInputFotoPost}
        placeholder={"Link Foto do Post"}
        />
        <button onClick={this.adiconaPost}>Adicionar</button>


     </insertContainer>

     <MainContainer>
    
      {listaDePosts}
      
     </MainContainer>
      </div>
    
    );
  }
}

export default App;
