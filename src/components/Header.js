import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo de vinted" />
      </Link>
      <div className="search">
        <input
          type="search"
          name=""
          id=""
          placeholder="Recherche des articles"
        />
      </div>
      <div className="threeButton">
        <Link to="/signup">
          <button>S'inscrire</button>
        </Link>
        <Link to="/login">
          <button>Se connecter</button>
        </Link>
        <button>Vends tes articles</button>
      </div>
    </header>
  );
};

export default Header;
