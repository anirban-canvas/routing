import { useContext } from "react";
import { Link, Navigate, Outlet,redirect ,useNavigate} from "react-router-dom";
import { AuthContext } from "../context/Authcontext";


export function Main(){
    const loggedin=useContext(AuthContext)
    const navigate=useNavigate()
    const isLoggedIn=loggedin()

    const handlLogout=()=>{
        localStorage.setItem('isLoggedin','false')
        navigate ("/login")
    }


    return(
        <>
        Main Menu 
        <ul>
            <li><Link to={'/dashboard'}>Dashboard</Link></li>
            <li><Link to={'/profile'}>Profile </Link> </li>
            <li onClick={()=>handlLogout()}>Logout</li>
        </ul>
        <div>
           {isLoggedIn==true ? <Outlet/> : <Navigate to={'/login'}/> } 
        </div>
        </>
    )


}