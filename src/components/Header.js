import logo from "../assets/img/logo.svg";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo de vinted" />
      <div className="search">
        <input
          type="search"
          name=""
          id=""
          placeholder="Recherche des articles"
        />
      </div>
      <div className="threeButton">
        <button>S'inscrire</button>
        <button>Se connecter</button>
        <button>Vends tes articles</button>
      </div>
    </header>
  );
};

export default Header;
