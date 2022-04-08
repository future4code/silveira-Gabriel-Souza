import React from "react"
import HomePage from "./pages/HomePage/HomePage";
import PlaylistPage from "./pages/PlayListPage/PlayListPage";
import RegisterPlayList from "./pages/RegisterPlayList/RegisterPlayList";

export default class App extends React.Component {
  state={
    currentScreen:"Playlist"
  }
  selectPage =()=>{
    switch(this.state.currentScreen){
       
          
        case  "PlayList":
              return <PlaylistPage></PlaylistPage> ;
        case  "Home":
            return <HomePage></HomePage> ;
         case "CreatePlaylist":
              return <RegisterPlayList ></RegisterPlayList>;
        // default:
        //     return <HomePage></HomePage>    
    }
  }
  render()
  {
  return (
    <div>
      {this.selectPage()}
     
    
    </div>
  );
  }

}

