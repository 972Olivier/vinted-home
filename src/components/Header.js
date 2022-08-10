import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Header = ({
  userConnect,
  setUserConnect,
  setTitle,
  title,
  priceMin,
  setPriceMin,
  priceMax,
  setPriceMax,
  sort,
  setSort,
}) => {
  // console.log(userConnect);
  let article = "";
  const navigate = useNavigate();
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo de vinted" />
      </Link>
      <div className="search">
        <div
          onClick={() => {
            // alert("click");
            setTitle(article);
          }}
          className="loupe"
        >
          🔎
        </div>
        <input
          className="inputSearch"
          type="search"
          name="title"
          value={title}
          placeholder="Recherche des articles"
          onChange={(event) => {
            article = event.target.value;
          }}
        />
        <div className="filterPrice">
          <div className="ascOrDesc">
            <div>
              <p> prix : decroissant</p>
              <input
                type="checkbox"
                name="sort"
                onClick={() => {
                  if (sort === "price-asc") {
                    let ascOrDesc = "price-desc";
                    setSort(ascOrDesc);
                  }
                  if (sort === "price-desc") {
                    let ascOrDesc = "price-asc";
                    setSort(ascOrDesc);
                  }
                }}
              />
            </div>
          </div>
          <div>
            <p>Prix entre :</p>
            <input
              type="text"
              name="priceMin"
              value={priceMin}
              onChange={(event) => {
                setPriceMin(event.target.value);
              }}
            />
            <p>et</p>
            <input
              type="text"
              name="priceMax"
              value={priceMax}
              onChange={(event) => {
                setPriceMax(event.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className="threeButton">
        {userConnect === false && (
          <Link to="/signup">
            <button className="ButtonlogIn">S'inscrire</button>
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

              const falsy = false;
              setUserConnect(falsy);
              Cookies.remove("MyToken");
            }}
          >
            Se déconnecter
          </button>
        )}

        <button
          className="sold"
          onClick={() => {
            let token = Cookies.get("MyToken");
            // console.log(token);
            token ? navigate("/publish") : navigate("/login");
          }}
        >
          Vends tes articles
        </button>
      </div>
    </header>
  );
};

export default Header;
