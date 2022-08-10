import "./Publish.css";

const publish = () => {
  return (
    <section className="publishMain">
      <div className="divMain">
        <div className="titleH2">
          <h2>Vends ton article</h2>
        </div>
        <form className="publish">
          <section>
            <div className="addPicture">
              <input type="file" />
            </div>
          </section>
          <section>
            <div>
              <label htmlFor="titre">Titre</label>
              <input
                type="text"
                name="titre"
                id="titre"
                placeholder="ex: Chemise Sézane verte"
              />
            </div>
            <div>
              <label htmlFor="description">Décris ton article</label>
              <input
                type="text"
                name="description"
                id="description"
                placeholder="ex: porté quelquefois, taille correctement"
              />
            </div>
          </section>
          <section>
            <div>
              <label htmlFor="marque">Marque</label>
              <input type="text" placeholder="ex:Zara" id="marque" />
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
              <input type="text" placeholder="Neuf avec étiquette" id="etat" />
            </div>
            <div>
              <label htmlFor="lieu">Lieu</label>
              <input type="text" placeholder="ex:Paris" id="lieu" />
            </div>
          </section>
          <section>
            <div>
              <label htmlFor="prix">Prix</label>
              <input type="text" placeholder="0,00 €" id="prix" />
            </div>
            <div>
              <input type="checkbox" name="" id="checkbox" />
              <label htmlFor="checkbox">
                {" "}
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

export default publish;
