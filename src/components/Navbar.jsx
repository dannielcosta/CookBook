import React from "react";
import Egg from "../images/fried-egg.png";
import {FcSearch} from "react-icons/fc";

function Navbar(){
    return (
        <div className = "header">
                 <img className="logo" src={Egg} alt=""/>
                 <h1>GrubHub.</h1>
            <div className="search">
                <button><FcSearch style={{width: "30px", height: "30px"}}/></button>
            </div>
        </div>
    )
}
export default Navbar 