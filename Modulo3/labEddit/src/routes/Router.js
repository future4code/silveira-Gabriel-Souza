import React from "react"
import {Switch, Route} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import FeedPage from "../pages/FeedPage/FeedPage"


const Router = () =>{
    return (
       
             <Switch >
                <Route  exact path = "/">
                    <FeedPage></FeedPage>
                 

                </Route>
                <Route exact path="/Login">
                    <LoginPage ></LoginPage>                 

                </Route>
                <Route exact path = "/Comentarios/:id">
                    <PostPage ></PostPage>
                 

                </Route>
                <Route  exact path ="/Cadastro">
                    <SignUpPage></SignUpPage>
                 

                </Route>
                <Route>
                    <ErrorPage></ErrorPage>
                 

                </Route>
               
            </Switch>


    
        
        
       
}
export default Router