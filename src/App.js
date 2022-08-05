import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  const [data, setData] = useState("");
  const [isLoading, setIsloading] = useState(true);
  const [userConnect, setUserConnect] = useState(false);
  const [priceMin, setPriceMin] = useState(null);
  const [priceMax, setPriceMax] = useState(null);
  const [sort, setSort] = useState("price-asc");
  const [title, setTitle] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      try {
        let filter = "";

        if (priceMin && priceMax) {
          filter = filter + `&priceMin=${priceMin}&priceMax=${priceMax}`;
        } else if (priceMin) {
          filter = filter + `&priceMin=${priceMin}`;
        } else if (priceMax) {
          filter = filter + `&priceMax=${priceMax}`;
        }

        /*--------*/

        /*-----*/

        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?title=${title}&sort=${sort}${filter}`
        );
        // console.log(response.data);
        setData(response.data);
        setIsloading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchdata();
  }, [sort, title, priceMax, priceMin]);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="App">
      {/* {console.log("this is", data)} */}
      <Router>
        <Header
          userConnect={userConnect}
          setUserConnect={setUserConnect}
          setTitle={setTitle}
          priceMin={priceMin}
          priceMax={priceMax}
          setPriceMax={setPriceMax}
          setPriceMin={setPriceMin}
          setSort={setSort}
          sort={sort}
        ></Header>
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/offer/:id" element={<Offer />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/login"
            element={
              <Login
                setUserConnect={setUserConnect}
                userConnect={userConnect}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
