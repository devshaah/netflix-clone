import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [show,handleshow] = useState(false);
    const navigate = useNavigate(); 


    const transitionNavbar = ()=>{
        if(window.scrollY > 100)
        {
            handleshow(true)
        }
        else handleshow(false)
    }
    useEffect(()=>{
        window.addEventListener("scroll",transitionNavbar);
        return ()=>window.removeEventListener("scroll",transitionNavbar)
    },[])

  return (
    <div className={`nav ${ show && 'nav_black'} `}>
      <div className="nav_container">
        <img
          onClick={()=> navigate("/")}
          className="nav_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="logo" />
        <img
          onClick={()=> navigate("/profile")}
          className="nav_avatar"
          src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png"
          alt=""/>
      </div>

      {/* <h1>This is the nav</h1> */}
    </div>
  );
};

export default Navbar;
