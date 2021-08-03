import React, { useState } from "react" ;
import axios from "axios" ;
import { useHistory } from "react-router-dom";
import Header from "../components/Header" ;



const Signup = ( {setUser}) => {
    const [username, setUsername] = useState("") ;
    const [email, setEmail] = useState("") ;
    const [phone, setPhone] = useState("") ;
    const [password, setPassword] = useState("") ;
    const [errorMessage, setErrorMessage] = useState("");

const history = useHistory();

    const handleSubmit = async (event) => {

         
        try {
            event.preventDefault();
            const response = await axios.post(
                "https://lereacteur-vinted-api.herokuapp.com/user/signup" , {
                
                    username:username,
                    email:email,
                    password:password,
                    phone:phone,
                }
            );
            if (response.data.token) {
                // si OK :
                // setUser(response.data.token)
                setUser(response.data.token);
                // rediriger le user vers "/"
                history.push("/");
                
              }
              // sinon ===> erreur
            } catch (error) {

              // pour avoir davantage d'info sur l'erreur
              // côté back : res.status(409).json({message: "This email already has an account."})
            //   console.log(error.response);
            //   console.log(error.message);
            
            //   if (error.response.status === 409) {
            //     setErrorMessage("Cet email est déjà utilisé.");
            




                // ^^^le code du haut est a enlever des commentaires -- 
                // sans backend je tenais a rendre mon site un peu plus fonctionnel
                //TIDJANE TIDJANE TIDJANE.S

                history.push("/");
              }
            
          };
    
    return(
        <>
        
        <Header />
        <div class="section_form">
        <form onSubmit={handleSubmit}>

        <input 
        type="text" 
        value={username}
        placeholder="NOM" 
        onChange={(event) => {
            setUsername(event.target.value) 
        }}/>
       
        <input type="email" 
        value={email} 
        placeholder="EMAIL"
        onChange={(event) => {
            setEmail(event.target.value) 
        }}/>
    <br />
    <input type="phone" 
        value={phone}
        placeholder="TELEPHONE" 
        onChange={(event) => {
            setPhone(event.target.value) 
        }}/>
   
        <input type="password" 
        value={password}
        placeholder="MOT DE PASSE" 
        onChange={(event) => {
            setPassword(event.target.value) 
        }}/>
    <br /><br />
    <p style={{ color: "brown" }}>{errorMessage}</p>
        <button style={{width:"100%"}} >
            <input style={{width:"100%"}} type="submit" value="S'inscrire" />
        </button> 
    
    </form>
</div>
        </>
    )
}

export default Signup ;