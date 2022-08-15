import { useLocation } from "react-router-dom";
import "./Payment.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/ChecKoutForm";

const stripePromise = loadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
);

const Payment = () => {
  const location = useLocation();
  const { title, price } = location.state;
  let protect = (price * 10) / 100;
  let port = protect * 2;

  console.log(protect);
  console.log(port);
  let total = price + protect + port;
  console.log(total); //arrondir au supérieur
  //   console.log(title, price);
  return (
    <article className="boxPayment">
      <h3>Résumé de la commande</h3>
      <div className="paymentDetails">
        <div>
          <p>Commande</p> <span>{price} €</span>
        </div>
        <div>
          <p>Frais protection acheteurs</p> <span>{protect} €</span>
        </div>
        <div>
          <p>Frais de port</p> <span>{port} €</span>
        </div>
        <div className="boxTotal">
          <div>
            <span>Total</span>
            <span>{total} €</span>
          </div>
          <div>
            <p>
              Il ne vous reste plus qu'un étape pour vous offrir {title}. Vous
              allez payer {total} € (frais de protection et frais de port
              inclus).
            </p>
          </div>
        </div>
        <p>{title}</p>
      </div>
      <Elements stripe={stripePromise}>
        <CheckoutForm title={title} total={total} />
      </Elements>
    </article>
  );
};

export default Payment;
