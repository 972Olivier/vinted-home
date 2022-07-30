import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  return (
    <article>
      <h1>S'inscrire</h1>
      <form>
        <div className="lineUnderInput">
          <input type="text" placeholder="Nom d'utilisateur" />
        </div>
        <div className="lineUnderInput">
          <input type="email" placeholder="Email" />
        </div>
        <div className="lineUnderInput">
          <input type="password" placeholder="Mot de passe" />
        </div>
        <div className="newsletter">
          <div>
            <input type="checkbox" name="" id="" />
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
