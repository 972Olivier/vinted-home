import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import Cookies from "js-cookie";

const Signup = () => {
  /*--state par input--*/
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setnewsletter] = useState(false);
  // const [data, setData] = useState("");
  /*---fonction par input pour récuperer leur value---*/
  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  /*--------récupérer les données lors du submit---------*/
  // let objectUser = {
  //   email: email,
  //   username: name,
  //   password: password,
  //   newsletter: newsletter,
  // };
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.post(
  //       "https://lereacteur-vinted-api.herokuapp.com/user/signup",
  //       {
  //         email: email,
  //         username: name,
  //         password: password,
  //         newsletter: newsletter,
  //       }
  //     );
  //     console.log(response.data);
  //     setData(response.data);
  //   } catch (error) {
  //     console.log(error.response); // contrairement au error.message d'express
  //   }
  // };

  // const token = data.token;
  // // console.log(token);
  // Cookies.set("token", token, { expires: 7 });

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   fetchData();

  //   // console.log(name, email, password, newsletter);
  // };
  const token = Cookies.get("token");
  console.log(token);
  return (
    <article>
      <h1>S'inscrire</h1>
      <form
        onSubmit={async (ev) => {
          try {
            ev.preventDefault();
            const response = await axios.post(
              "https://lereacteur-vinted-api.herokuapp.com/user/signup",
              {
                email: email,
                username: name,
                password: password,
                newsletter: newsletter,
              }
            );
            Cookies.set("token", response.data.token, { expires: 7 });
            // setData(response.data);
          } catch (error) {
            console.log(error.response); // contrairement au error.message d'express
          }
        }}
      >
        <div className="lineUnderInput">
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Nom d'utilisateur"
            onChange={handleNameChange}
          />
        </div>
        <div className="lineUnderInput">
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
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
        <div className="newsletter">
          <div>
            <input
              onClick={() => {
                newsletter === false
                  ? setnewsletter(true)
                  : setnewsletter(false);
              }}
              type="checkbox"
              name="newsletter"
              value={newsletter}
              //   onChange={handleNewsletterChange}
            />
          </div>
          <p>S'inscrire à notre newsletter</p>
        </div>
        <p>
          En m'inscrivant je confirme avoir lu et accepté les Termes &
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans.
        </p>
        <button>S'inscrire</button>
        <div>
          <Link to="/login">
            <p>Tu as déjà un compte ? Connecte-toi !</p>
          </Link>
        </div>
      </form>
    </article>
  );
};

export default Signup;
