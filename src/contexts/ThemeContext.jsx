import { useState } from "react";
import { createContext } from "react";

export const ThemeContext=createContext()

export const ThemeContextProvider=({children})=>{
    const [theme, settheme] = useState("light")
    const toggleTheme=()=>{
        if(theme==="light")
        {
            settheme("dark")
        }
        else{
            settheme("light")
        }
    } 
    return <ThemeContext.Provider value={{toggleTheme,theme,isLight:theme==="light"}}>{children}</ThemeContext.Provider>
}