import React from "react"
import HomePage from "./pages/HomePage/HomePage";

import RegisterPlayList from "./pages/RegisterPlayList/RegisterPlayList";
import PlayLIstePage from "./pages/PlayListsPage/PlayLists";
import PlayListeDetaisPage from "./pages/PlayListDatailsPage/PlayListDetailsPage";
export default class App extends React.Component {
  state={
    currentScreen:"",
    id:"",
    name:""
  }
  goToPlayListDatails=(id,name)=>{
    this.setState({currentScreen:"Detail" , id:id,name:name})
  }
  goToPlayList=()=>{
    this.setState({currentScreen:"Playlist" , id:""})
  }
  goToRegistePlayList=()=>{
    this.setState({currentScreen:"CreatePlaylist" , id:""})
  }
  goToHome=()=>{
    this.setState({currentScreen:"Home"})
  }
 
 
  selectPage =(id,name)=>{
    
    switch(this.state.currentScreen){
       
          
        // case  "PlayList":
        //       return <PlaylistPage></PlaylistPage> ;
        // case  "Home":
        //     return <HomePage goToPlayList={this.goToPlayList}   ></HomePage> ;
         case "CreatePlaylist":
              return <RegisterPlayList ></RegisterPlayList>;
        case "Playlist":
                return <PlayLIstePage goToHome={this.goToHome} goToPlayListDatails={this.goToPlayListDatails}></PlayLIstePage>;
        case "Detail":
                  return <PlayListeDetaisPage goToPlayList={this.goToPlayList} id={this.state.id} name={this.state.name}></PlayListeDetaisPage>;               
                
             
                
        //  default:
        //      return <HomePage></HomePage>    
    }
  }
  render()
  {
  return (
    <div>
      
      <button  onClick={this.goToPlayList} >Play Lists</button>
      <button onClick={this.goToRegistePlayList}>ADD Play List</button>
      {this.selectPage()}
    
    </div>
  );
  }

}

