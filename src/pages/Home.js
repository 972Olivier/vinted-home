import { Link } from "react-router-dom";
import Hero from "../assets/img/Hero.jpg";

const Home = ({ data }) => {
  // console.log(data.offers[6].owner.account.avatar.url);
  return (
    <main>
      <section className="hero">
        <img src={Hero} alt=" hero" />
      </section>
      <section className="allOffer">
        {data.offers.map((element, index) => {
          console.log(element);
          // créer la route vers offer http://localhost:3000/offer/:id
          // transmettre le param de l'id à Offer.
          // pour récupérer l'annonce dans Offer avec les éléments pour construire la page.
          return (
            // J'ai englobé la div du link pour renvoyer vers la page !!!!
            <Link to="/offer">
              <div key={index} className="containOffer">
                <div className="avatarAndName">
                  <div>
                    {element.owner && (
                      <img
                        className="avatar"
                        src={element.owner.account.avatar.url}
                        alt="avatar"
                      />
                    )}
                  </div>
                  <div>
                    <span>
                      {element.owner && element.owner.account.username}
                    </span>
                  </div>
                </div>

                <div className="pictureOffer" key={index}>
                  <img
                    src={element.product_pictures[0].secure_url}
                    alt="vetement"
                  />
                </div>
                <div className="threeSpan">
                  <span>{element.product_price} €</span>
                  <span>
                    {element.product_details[1].TAILLE &&
                      element.product_details[1].TAILLE}
                  </span>
                  <span>
                    {element.product_details[0].MARQUE &&
                      element.product_details[0].MARQUE}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
      <Link to="/offer">Offer</Link>
    </main>
  );
};

export default Home;
