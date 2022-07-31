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
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(true);
  const [userConnect, setUserConnect] = useState(false);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        // console.log(response.data);
        setData(response.data);
        setIsloading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchdata();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="App">
      {/* {console.log("this is", data)} */}
      <Router>
        <Header userConnect={userConnect}></Header>
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
