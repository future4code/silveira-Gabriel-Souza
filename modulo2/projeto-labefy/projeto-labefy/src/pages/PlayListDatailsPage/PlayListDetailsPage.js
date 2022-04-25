import React from "react"
import axios from "axios"
import { BASE_URL } from "../../constants/urls"
import { headers } from "../../constants/urls"
import {PlaylistCard} from "./styled"

export default class PlayLIsteDetaisPage extends React.Component{
    state={
        trackslist: [],
        name:"",
        url:"",
        artist:"",
    }
 
    componentDidMount()
    {
        this.getPlaylistTracks()
     
        
    }
    handleName = (event)=>{
        this.setState({name:event.target.value})
    }
    handleUrl = (event)=>{
        this.setState({url:event.target.value})
    }
    handleArtista = (event)=>{
        this.setState({artist:event.target.value})
    }
    getPlaylistTracks=()=>{
      
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`,{headers})
        .then((res)=>this.setState({tracklist:res.data.result.list}))
        .catch((err)=>alert(err.response.message))

    }
    addTrackToPlaylist=()=>{
        const body={
            name:this.state.name,
            artist:this.state.artist,
            url:this.state.url,
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`,body,{headers})
        .then((res)=>{alert(`Track ${this.state.name} adicionado`)
                   
    })
        .catch((err)=>{
            alert(err.response.data.message)
        })
    }
    
    render(){
      const traks = this.state.trackslist.map((track)=>{
          return <p key={track.id}>
              {track.name}
              {track.id}
         
          </p>    
      })
     
         
        return <div>
         
                  {traks}     
                <h2>Nome:{this.props.name}</h2>
                <input
                    placeholder={"Nome"}
                    value={this.state.name}
                    onChange={this.handleName}
                />
                  <input
                    placeholder={"Artistas ou Banda"}
                    value={this.state.artist}
                    onChange={this.handleArtista}
                />
                  <input
                    placeholder={"Link"}
                    value={this.state.url}
                    onChange={this.handleUrl}
                />
                
                <button onClick={this.addTrackToPlaylist}>Cadastrar</button>
     
               
            
        </div>
    }
}