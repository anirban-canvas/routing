
import { useState } from "react"
export const useUser=()=>{

    const[user,setUser]=useState({isLoggedIn:false})


    return {user,setUser}


}