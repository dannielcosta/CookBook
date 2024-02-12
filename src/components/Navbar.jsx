import React from "react";
import Egg from "../images/fried-egg.png";

function Navbar(){
    return (
        <div className = "header">
            <img className="logo" src={Egg} alt=""/>
            <h3>Choppedy</h3>
        </div>
    )
}
export default Navbar 