import { useEffect, useState } from "react"

const Darkmode = () => {

const[theme,setTheme]=useState("light-theme")
const toggleTheme= ()=>{
    if(theme === "dark-theme")
    {
        setTheme('light-theme')
    }
    else
    {
        setTheme('dark-theme')
    }
};
useEffect(()=>{

    document.body.className=theme;
},[theme]);
  return (
    <div>
      <button className="darkthemebtn" onClick={()=>toggleTheme()} >
      🌙 
      </button>
    </div>
  )
}

export default Darkmode
