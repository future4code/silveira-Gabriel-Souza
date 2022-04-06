
import './App.css';
import React from 'react';
import axios from "axios"

const headers = {
  headers:{
    Authorization:"Gabriel-Menezes-Silvera"
  }
};

const baseUrl ="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

export default class App extends React.Component {
  state ={
   userList : [],
   inputName :"",
   inputEMail:"",
  }

  componentDidMount()
  {
 this.getAllUsers();
  }
  getAllUsers(){
    url="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    axios
    .get(url,headers)
    .then((res) => {
      this.setState({
        userList : res.data.result.list
      });
    })
    .catch((err)=>{
      console.log(err.response.data);
    });
  }
  
  
 }

