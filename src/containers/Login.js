import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      // requête axios
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/Login",
        {
          email: email,
          password: password,
        }
      );
      // console.log(response.data);
      if (response.data.token) {
        // Enregistrer le token dans un cookie
        setUser(response.data.token);
        // Rediriger le user vers la homepage
        history.push("/");
      }
    } catch (error) {
      console.log(error.message);
      history.push("/");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
          E-MAIL
        <input onChange={(event) => setEmail(event.target.value)} type="text" />
        MOT DE PASSE
        <input
          onChange={(event) => setPassword(event.target.value)}
          type="password"
        />
        <input type="submit" value="Se connecter" />
      </form>
    </div>
  );
};

export default Login;