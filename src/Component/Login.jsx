import { useContext } from "react"
import { AuthContext } from "../context/Authcontext"
import { Navigate, redirect, useNavigate } from "react-router-dom"

export function Login(){

const nevigate=useNavigate()
const loggedin=useContext(AuthContext)
const hanldeLogin=()=>{
    localStorage.setItem('isLoggedin',true)
    nevigate("/")
}
  
    console.log(loggedin());
    return(
        <div>
            <>Logged in status : {loggedin.isLoggedIn}</>
        <div>
            User Name <input/>
            
        </div>
         <div>
         password : <input/>
         
     </div>
     <div>
        <button onClick={()=>hanldeLogin()}>  Login </button>
         
     </div>
     </div>
    )

}