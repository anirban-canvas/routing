import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RouterProvider} from 'react-router-dom'
import { router } from './routes';
import { AuthContext } from './context/Authcontext';
//import { useUser } from './Hooks/useUser';

const checkUser=()=>{

 console.log("login check",localStorage.getItem('isLoggedin'))

  if(localStorage.getItem('isLoggedin')==='true'){
    return true
  }else{
    return false 
  }
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <AuthContext.Provider value={checkUser}>

    <RouterProvider router={router}/>
    </AuthContext.Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
