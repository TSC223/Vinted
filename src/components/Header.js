import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../images/loGo.png" ;

const Header = () => {
    return(
        <>
            <div className="section_Header">
                <Link to="/">
                    <img className="logo_vinted" src={LOGO} />
                </Link>
               
                <nav className="nav_zone" >
                    <Link to="/Signup/">S'inscrire</Link>
                    <Link to="/Login/">Se connecter</Link>
                    <Link to="/">Vends tes articles</Link>
                </nav>
            </div>
        </>
    )
}

export default Header ;