import React from "react"
import axios from "axios"
import { BASE_URL } from "../../constants/urls"
import { headers } from "../../constants/urls"
import {PlaylistCard} from "./styled"

export default class PlayListPage extends React.Component{
    state={
        PlayLists:[]
    }
    componentDidMount(){
        this.getAllPlaylists()
    }
    getAllPlaylists=()=>{
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",{headers})
        .then((res)=>this.setState({PlayLists:res.data.result.list}))
        .catch((err)=>console.log(err.response))
       
    }
    deletePlaylist=(id)=>{
       axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,{headers})
       .then((res)=>{ 
           this.getAllPlaylists()
           alert(`Play list apagado`)})
          
        .catch((err)=>{alert("Ocorreu um erro")})   
       
    

    }
    render(){

        const lists = this.state.PlayLists.map((PlayList)=>{
            return <PlaylistCard 
                key={PlayList.id}
                onClick={()=>this.props.goToPlayListDatails(PlayList.id,PlayList.name)}>
                {PlayList.name} 
                <button onClick={()=>this.deletePlaylist(PlayList.id)} >X</button>
            </PlaylistCard>
            
        })
    
        return <>
        <h2>Play List</h2>
        <ul>{lists}</ul>
       
        </>
    }
}