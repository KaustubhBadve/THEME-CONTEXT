import React from 'react'

import { useContext } from 'react'
import { LoginSignupContext } from '../contexts/LoginSignup'
import { ThemeContext } from '../contexts/ThemeContext'
import style from "./navbar.module.css"




const Navbar = () => {
  const {isLight,toggleTheme} = useContext(ThemeContext)
  const {flag,Login,Logout} = useContext(LoginSignupContext)
  return (
    <div className={style.navbar}>
      
      <button onClick={toggleTheme}>{`Theme ${isLight ? "Dark" : "Light"}`}</button>

      <button
      onClick={()=>{
        if(flag)
        {
          Logout()
        }
        else{
          Login("A","B")
        }
      }}
      >{flag ? "Logout":"Login" }</button>

      
    </div>
  )
}

export default Navbar