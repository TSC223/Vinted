import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
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
    <div>
      <img src={data.product_image.secure_url} alt={data.product_name} />
      <p>{data.product_price}</p>
      <ul>
        {data.product_details.map((elem, index) => {
          const keys = Object.keys(elem);
          // 1er tour : ["MARQUE"]
          // 2e tour : ["TAILLE"]

          return (
            <li key={index}>
              <span>{keys[0]}</span>
              <span>{elem[keys[0]]}</span>
              {/* 1er tour : elem.MARQUE
                  2e tour : elem.TAILLE
               */}
            </li>
          );
        })}
      </ul>
    </div>
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