import React from "react"
import axios  from "axios"
import { BASE_URL } from "../../constants/urls"
import { headers } from "../../constants/urls"
import {PlayListCard} from "./styled"

export default class PlaylistPage extends React.Component{
    state= {
        listPlayList : [],
        
    }
    componentDidMount(){
        this.getAllPlaylists()
    }

    getAllPlaylists=()=>{
     
        axios.get(BASE_URL,{headers})
        .then((res)=> this.setState({listPlayList:res.data.result.list}))  
        .catch((err)=>console.log(err.response))
    }
     

    render()
    {   
        const Lists = this.state.listPlayList.map((playList)=>{
            return (<PlayListCard>{playList.name} </PlayListCard>)
        })
        console.log(this.state.listPlayList)
        return( 
            <>
               <h2>ADD</h2>
               
               <div> {Lists} </div>

            </>
     
        )
        
    }
}