import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";


const Home = () => {
   const [data, setData] = useState({}) ;
   const [isLoading ,setIsLoading] = useState({});
   
    useEffect(() =>{
        const fetchData = async () => {
        const response  = await axios.get(
            "https://lereacteur-vinted-api.herokuapp.com/offers"
            ) ;
         // console.log(response.data);
    setData(response.data) ;
    setIsLoading(false) ;
        };
     fetchData() ;   
    },[]) ;
    return isLoading ? (
    <p>En cour de chargement ...</p>
    ) : (
    <>
    <div>
        <Header />
        <Hero />
    </div>
    <div className="section_offer">
    <div>{data.offers.map((offer, index) => {
        return(
        <>
            <div className="offer_card">
                <Link to={`/Offers/${offer._id}`} key={offer._id}>
                
                    
                    
                    
                    <div className="offer_name">{offer.owner.account.username}</div>
                    <img className="offer_image_principal" 
                        alt="vinted_reacteur" 
                        src={offer.product_image.secure_url} />
                    <div className="offer_desciption">
                        <h3>{offer.product_details[0].MARQUE}</h3>
                        <p>{offer.product_details[1].TAILLE}</p>
                        <p>{offer.product_price}€</p>
                        
                        
                        
                    </div>
                </Link>
         </div>

        </>) 
    })}</div>
    </div>
    </>
    ) ;
}


export default Home ;