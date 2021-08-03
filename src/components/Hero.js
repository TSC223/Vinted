import React from "react";
import entete from "../images/banner_.jpg" ;

const Hero = () => {
    
    return(
        <>
        <div className="section_hero">
            <div className="hero_carre_blanc">
                <h1>Prêts à faire du tri dans vos placards ?</h1>
                <button>Vends maintenant</button>
                <p>Découvrir comment ça marche</p>
            </div>
        <img src={entete} alt="entete_vited" />
        </div>
        
        </>
    )
}

export default Hero ;