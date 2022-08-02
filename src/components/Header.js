import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Header = ({ userConnect, setUserConnect }) => {
  console.log(userConnect);
  // const token = Cookies.get("token");
  // console.log("this is", token);

  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo de vinted" />
      </Link>
      <div className="search">
        <input type="search" name="" placeholder="Recherche des articles" />
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
          <button
            onClick={(event) => {
              event.preventDefault();
              // alert("c'est cliké");
              // const token = Cookies.get("token");
              // console.log("this is", token);
              const falsy = false;
              setUserConnect(falsy);
              Cookies.remove("MyToken");
            }}
          >
            Se déconnecter
          </button>
        )}

        <button>Vends tes articles</button>
      </div>
    </header>
  );
};

export default Header;
