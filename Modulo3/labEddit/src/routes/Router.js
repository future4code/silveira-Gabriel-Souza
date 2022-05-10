import React from "react"
import {BrowserRouter,Switch, Route} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";
import SingUpPage from "../pages/SingUpPage/SingUpPage";
import FeedPage from "../pages/FeedPage/FeedPage"
import Header from "../components/Header/Header";



const Router = () =>{
    return (
        <BrowserRouter>
        <Header> </Header>
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
                    <SingUpPage></SingUpPage>
                 

                </Route>
                <Route>
                    <ErrorPage></ErrorPage>
                 

                </Route>
               
            </Switch>


        
        
        
        </BrowserRouter>
    )
}
export default Router