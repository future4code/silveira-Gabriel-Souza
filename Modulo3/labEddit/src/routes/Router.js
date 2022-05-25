import React from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import FeedPage from "../pages/FeedPage/FeedPage";

const Router = ({ setRightButtonText }) => {
  return (
    <Routes>
      <Route path="/" element={<FeedPage></FeedPage>}></Route>
      <Route
        path="/Login"
        element={
          <LoginPage setRightButtonText={setRightButtonText}></LoginPage>
        }
      ></Route>

      <Route path="/Comentarios/:id" element={<PostPage></PostPage>}></Route>

      <Route
        path="/Cadastro"
        element={
          <SignUpPage setRightButtonText={setRightButtonText}></SignUpPage>
        }
      ></Route>

      {/* <Route>
        <ErrorPage></ErrorPage>
      </Route> */}
    </Routes>
  );
};
export default Router;
