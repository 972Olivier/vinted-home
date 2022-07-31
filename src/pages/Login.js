import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setUserConnect, userConnect }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   console.log(email, password);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  //   const token = Cookies.get("token");
  //   console.log(token);
  return (
    <article className="boxConnect">
      <h1>Se connecter</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const response = await axios.post(
              "https://lereacteur-vinted-api.herokuapp.com/user/login",
              {
                email: email,
                password: password,
              }
            );
            console.log(response.data);
            Cookies.set("token", response.data.token, { expires: 7 });
            setUserConnect(true);
            userConnect === true && navigate("/");
          } catch (error) {
            console.log(error.response);
          }
        }}
      >
        <div>
          <div className="lineUnderInput">
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Adresse email"
              onChange={handleEmailChange}
            />
          </div>
          <div className="lineUnderInput">
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Mot de passe"
              onChange={handlePasswordChange}
            />
          </div>
        </div>
        <button>Se connecter</button>
        <div>
          <Link to="/signup">
            <p>Pas encore de compte ? Inscris-toi !</p>
          </Link>
        </div>
      </form>
    </article>
  );
};

export default Login;
