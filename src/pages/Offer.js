import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Offer.css";

const Offer = () => {
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        // console.log(response.data);
        setData(response.data);
        setIsloading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchdata();
  }, [id]);
  // console.log(data);
  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <section className="detailsOffer">
      <div className="boxOffer">
        <div>
          <img src={data.product_image.url} alt="vestido" />
        </div>
        <div className="descriptionOffer">
          <div>
            <p>{data.product_price} €</p>
          </div>
          <div>
            <div className="elementDescription">
              <div>
                <span>MARQUE</span>
              </div>
              <div>
                <p>{data.product_details[0].MARQUE}</p>
              </div>
            </div>
            <div className="elementDescription">
              <div>
                <span>TAILLE</span>
              </div>
              <div>
                <p>{data.product_details[1].TAILLE}</p>
              </div>
            </div>
            <div className="elementDescription">
              <div>
                <span>État</span>
              </div>
              <div>
                <p>{data.product_details[2].ÉTAT}</p>
              </div>
            </div>
            <div className="elementDescription">
              <div>
                <span>COULEUR</span>
              </div>
              <div>
                <p>{data.product_details[3].COULEUR}</p>
              </div>
            </div>
            <div className="elementDescription">
              <div>
                <span>EMPLACEMENT</span>
              </div>
              <div>
                <p>
                  {data.product_details[4] &&
                    data.product_details[4].EMPLACEMENT}
                </p>
              </div>
            </div>
            <div className="elementDescription last">
              <div>
                <span>MODES DE PAIEMENT</span>
              </div>
              <div>
                <p>
                  {data.product_details[5] &&
                    Object.values(data.product_details[5])}
                </p>
              </div>
            </div>
          </div>
          <div>
            <p>{data.product_name}</p>
            <p>{data.product_description}</p>
            <div className="avatarLogo">
              <img
                src={data.owner && data.owner.account.avatar.url}
                alt="avatar"
              />
              <p>{data.owner && data.owner.account.username}</p>
            </div>
            <button>Acheter</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
