import "./Publish.css";
import { useState } from "react";
import axios from "axios";

const Publish = () => {
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [brand, setBrand] = useState("");

  console.log(brand);
  console.log(title);
  console.log(description);
  console.log(condition);
  console.log("here", file);
  console.log(city);
  return (
    <section className="publishMain">
      <div className="divMain">
        <div className="titleH2">
          <h2>Vends ton article</h2>
        </div>
        <form className="publish">
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
              <input type="text" placeholder="ex:L/40/12" id="taille" />
            </div>
            <div>
              <label htmlFor="couleur">Couleur</label>
              <input type="text" placeholder="ex:Fushia" id="couleur" />
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
