import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../images/loGo.png" ;

const Header = () => {
    return(
        <>
            <div className="section_Header">
                <img className="logo_vinted" src={LOGO}/>
               
                <nav className="nav_zone" >
                    <div>S'inscrire</div>
                    <div>Se connecter</div>
                    <div>Vends tes articles</div>
                </nav>
            </div>
        </>
    )
}

export default Header ;