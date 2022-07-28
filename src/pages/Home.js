import { Link } from "react-router-dom";
import Hero from "../assets/img/Hero.jpg";

const Home = ({ data }) => {
  console.log(data.offers[1].owner.account.username);
  return (
    <main>
      <section className="hero">
        <img src={Hero} alt=" hero" />
      </section>
      <section></section>
      <Link to="/offer">Offer</Link>
    </main>
  );
};

export default Home;
