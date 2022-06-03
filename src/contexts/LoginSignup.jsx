import { useState } from "react";
import { createContext } from "react";

export const LoginSignupContext=createContext()

export const LoginProvider=({children})=>{
    const [flag, setflag] = useState(false)

    const Login=(username,password)=>{
        if(username && password){
          setflag(true)
        }
    }
    const Logout=()=>{
        setflag(false)
    }
    return <LoginSignupContext.Provider value={{flag,Login,Logout}}>{children}</LoginSignupContext.Provider>
}