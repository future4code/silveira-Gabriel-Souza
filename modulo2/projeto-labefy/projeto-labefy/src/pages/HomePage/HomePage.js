import React from "react"

import axios from "axios"
import { BASE_URL } from "../../constants/urls"
import { headers } from "../../constants/urls"
import {PlaylistCard} from "./styled"

export default class HomePage extends React.Component{
    render()
    {
        return(
            <>
             <div> HomePage </div>
             <div>
             <button  onClick={this.props.goToPlayList} >Play Lists</button>
             <button onClick={this.props.goToRegistePlayList}>ADD Play List</button>
             

             </div>
             </>
        )
        
    }
}