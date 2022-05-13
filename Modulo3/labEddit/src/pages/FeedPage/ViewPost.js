import React, { useEffect } from 'react';
import { ContainerPrincipal, CardEstilizado } from './styled';
import useRequestData from '../../hooks/useRequestData';
import {BASE_URL} from '../../constants/url'
import CardViewPost from './CardViewPost';
import CreatePost from './CreatePost';
import Loading from '../../components/Loading/Loading';


const ViewPost = () => {
  
    const getPosts = useRequestData ([], `${BASE_URL}/posts`)

    const mostrarPostsNaTela = getPosts.data.map ((post) => {
      return <CardViewPost key={post.id} post={post} getPosts={getPosts}/>
    console.log(mostrarPostsNaTela) 
     console.log(getPosts) 
    })
    

  return (
    <div>
      {getPosts.data?
    <ContainerPrincipal>
        <CreatePost getPosts={getPosts}/>
        {mostrarPostsNaTela}     
    </ContainerPrincipal>
    : 
    <Loading />
    }
    </div>
  );
}

export default ViewPost