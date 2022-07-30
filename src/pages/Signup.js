import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  /*--state par input--*/
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setnewsletter] = useState(false);
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
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email, password, newsletter);
  };
  let objectUser = {
    email: email,
    username: name,
    password: password,
    newsletter: newsletter,
  };
  console.log(objectUser);
  return (
    <article>
      <h1>S'inscrire</h1>
      <form onSubmit={handleSubmit}>
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
          <Link to="login">
            <p>Tu as déjà un compte ? Connecte-toi !</p>
          </Link>
        </div>
      </form>
    </article>
  );
};

export default Signup;
