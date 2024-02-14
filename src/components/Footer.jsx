import React from "react"
import githubLogo from "../images/github-logo.png"
function Footer (){
    return(
        <div className="footer">
             <a href="https://github.com/dannielcosta/CookBook"><img className=""src={githubLogo} alt="GitHub" />Check the Repository</a>
            </div>
    )
}
export default Footer