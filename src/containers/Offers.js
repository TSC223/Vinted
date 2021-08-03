import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";

const Offers = () => {
  const { id } = useParams();

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [id]);

  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <>
    <Header />
    <div className="page_offer">
      <div className="img_offer">
        <img src={data.product_image.secure_url} alt={data.product_name} />
        
    </div>
    <div>
      <ul className="descript_du_haut">
        <p className="price_offer">Prix de l'article <strong>{data.product_price} €</strong></p>

        {data.product_details.map((elem, index) => {
          const keys = Object.keys(elem);
          // 1er tour : ["MARQUE"]
          // 2e tour : ["TAILLE"]
          return (
            <div 
            className="li_descript_detail"
            key={index}>
              <div><strong>{keys[0]} :</strong></div>
              <div>  <span>{elem[keys[0]]}</span></div>
            
              
              {/* 1er tour : elem.MARQUE
                  2e tour : elem.TAILLE
               */}
               <br />
               
            </div>
           
          ); 
        })}
        
         
         <div className="descript_zone_dubas">
           <br />
            <strong>{data.product_details[1].ÉTAT}</strong>
            <p>{data.product_description}</p>
            <button>ACHETER</button>
            
         </div>
      </ul>
      
      </div>
      
    </div> 
    </>
  );
 
};
 
export default Offers;







// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom" ;




//  function Offers() {
//    const { id } = useParams() ;

//     const [data, setData] = useState();
//     const [isLoading, setIsLoading] = useState(true);
  
//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const response = await axios.get(`https://lereacteur-vinted-api.herokuapp.com/offer/{:id}`);
//           setData(response.data);
//           setIsLoading(false);
//         } catch (error) {
//           console.log(error.message);
//         }
//       };
//       fetchData();
//     }, [id]);
//     return isLoading ? (
//       <span>En cours de chargement...</span>
//     ) : (
//       <div>
//         <p>{data.product_name}</p>
//         <p>
//           {data.product_details.map((elem, index) => {
//             const keys = Object.keys(elem)
//             return(
//             <p> 
//             {keys[0]} {elem[keys[0]]}
//             </p>
//             )
//           })}
//         </p>
//       </div>
//     );
//   }

// export default Offers ;