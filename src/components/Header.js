import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";

const Header = ({ userConnect }) => {
  console.log(userConnect);
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
        {userConnect === false && (
          <Link to="/signup">
            <button>S'inscrire</button>
          </Link>
        )}

        {userConnect === false ? (
          <Link to="/login">
            <button>Se connecter</button>
          </Link>
        ) : (
          <button>Se déconnecter</button>
        )}

        <button>Vends tes articles</button>
      </div>
    </header>
  );
};

export default Header;
