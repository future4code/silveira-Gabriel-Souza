import React from "react";
import { IconeComContador } from "../IconeComContador/IconeComContador";
import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";
import { SecaoComentario } from "../SecaoComentario/SecaoComentario";
import styled from "styled-components";

const PostContainer = styled.div`
  border: 1px solid black;
  width: 650px;
  margin-bottom: 10px;
`;

const PostHeader = styled.div`
  height: 50px;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
`;






class Post extends React.Component {
 

  render() {
    

    

    let componenteComentario;

   

    return (
      <PostContainer>
        <PostHeader>
     
          <p>{this.props.nomeUsuario}</p>
          <p>{this.props.mensagemUsuario}</p>
         
         
        </PostHeader>
       

       
        {componenteComentario}
      </PostContainer>
    );
  }
}

export default Post;
