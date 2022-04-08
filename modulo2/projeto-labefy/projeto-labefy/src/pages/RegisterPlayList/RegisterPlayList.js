import React from "react"
import axios, { Axios }  from "axios"
import { BASE_URL } from "../../constants/urls"
import { headers } from "../../constants/urls"
export default class RegisterPlayList extends React.Component{
    state = {
        name:"",
        playlist:[]
    }

     handleNome = (event)=>{
         this.setState({name:event.target.value})
     }
     searchPlaylist = ()=>{
         axios.get(BASE_URL+"/search?name="+this.state.name)
         .then((res)=>this.setState({playlist:res.data.result.list}))
         .catch((err)=> alert(err.response.data.message))
        
         

        }
    createPlaylist = () => {
        const body={
            name:this.state.name
        }
      axios.post(BASE_URL,body,{headers})  
      .then((res)=>{
          alert(`Play ${this.state.name} cadastrada `)
      })
      .catch((err)=>{
          alert(err.response.data.message)
      })
    }
    render()
    {
        return(
            <> 
               <input
                    placeholder={"Nome"}
                    value={this.state.nome}
                    onChange={this.handleNome}
                />
                
                <button onClick={this.createPlaylist}>Cadastrar</button>
            </>
        )
    }


}