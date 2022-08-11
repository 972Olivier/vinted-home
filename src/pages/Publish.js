import "./Publish.css";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Publish = () => {
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const navigate = useNavigate();

  console.log(brand);
  console.log(title);
  console.log(description);
  console.log(condition);
  console.log("here", file);
  console.log(city);
  console.log(size);
  console.log(color);
  const token = Cookies.get("MyToken");
  console.log(token);
  return (
    <section className="publishMain">
      <div className="divMain">
        <div className="titleH2">
          <h2>Vends ton article</h2>
        </div>
        <form
          className="publish"
          onSubmit={async (event) => {
            event.preventDefault();
            const formData = new FormData();
            formData.append("title", title);
            formData.append("description", description);
            formData.append("price", price);
            formData.append("condition", condition);
            formData.append("city", city);
            formData.append("brand", brand);
            formData.append("size", size);
            formData.append("color", color);
            formData.append("picture", file);
            try {
              const response = await axios.post(
                "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
                formData,
                {
                  headers: {
                    authorization: `Bearer ${token}`,
                  },
                }
              );
              alert(JSON.stringify(response.data));
              navigate("/");
            } catch (error) {
              if (error.response.status === 500) {
                console.error("An error occurred");
              } else {
                console.error(error.response.data.msg);
              }
            }
          }}
        >
          <section>
            <div className="addPicture">
              <input
                type="file"
                onChange={(event) => {
                  setFile(event.target.files[0]);
                  setPreview(URL.createObjectURL(event.target.files[0]));
                }}
              />
              {preview && (
                <img
                  className="preview"
                  src={preview}
                  alt="preview before upload"
                />
              )}
            </div>
          </section>
          <section>
            <div>
              <label htmlFor="titre">Titre</label>
              <input
                type="text"
                name="titre"
                id="titre"
                value={title}
                placeholder="ex: Chemise Sézane verte"
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="description">Décris ton article</label>
              <input
                type="text"
                name="description"
                id="description"
                placeholder="ex: porté quelquefois, taille correctement"
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </div>
          </section>
          <section>
            <div>
              <label htmlFor="marque">Marque</label>
              <input
                type="text"
                placeholder="ex:Zara"
                id="marque"
                value={brand}
                onChange={(event) => {
                  setBrand(event.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="taille">Taille</label>
              <input
                type="text"
                placeholder="ex:L/40/12"
                id="taille"
                value={size}
                onChange={(event) => {
                  setSize(event.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="couleur">Couleur</label>
              <input
                type="text"
                placeholder="ex:Fushia"
                id="couleur"
                value={color}
                onChange={(event) => {
                  setColor(event.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="etat">Etat</label>
              <input
                type="text"
                placeholder="Neuf avec étiquette"
                id="etat"
                value={condition}
                onChange={(event) => {
                  setCondition(event.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="lieu">Lieu</label>
              <input
                type="text"
                placeholder="ex:Paris"
                id="lieu"
                value={city}
                onChange={(event) => {
                  setCity(event.target.value);
                }}
              />
            </div>
          </section>
          <section>
            <div>
              <label htmlFor="prix">Prix</label>
              <input
                type="text"
                placeholder="0,00 €"
                id="prix"
                value={price}
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              />
            </div>
            <div className="publishCheckbox">
              <input type="checkbox" name="" id="checkbox" />
              <label htmlFor="checkbox">
                Je suis intéressé(e) par les échanges
              </label>
            </div>
          </section>
          <button>Ajouter</button>
        </form>
      </div>
    </section>
  );
};

export default Publish;
