import "./css/App.css";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <>
      <Navigation />
      <div className="page">
        <div className="heroContainer">
          <h1 className="heroTitle">
            Hubert Peeter's <br />
            Collectie
          </h1>
          <button>Ontdek meer</button>
          <img
            src="/assets/arrow-down.png"
            alt="arrow down"
            className="arrowDown"
          ></img>
        </div>
        <div className="booksWrapper">
          <div className="row1">
            <div className="book">
              <a href="/">
                <img
                  src="/assets/BookCovers/interfunktionen9.png"
                  className="bookImg"
                  alt="Interfunktionen 9"
                />
              </a>
            </div>

            <div className="book">
              <a href="/">
                <img
                  src="/assets/BookCovers/sonsbeek 72.png"
                  className="bookImg"
                  alt="Sonsbeek 72"
                />
              </a>
            </div>

            <div className="book">
              <a href="/">
                <img
                  src="/assets/BookCovers/telephonebook.png"
                  className="bookImg"
                  alt="Telephone Book"
                />
              </a>
            </div>
          </div>

          <div className="row2">
            <div className="book">
              <a href="/">
                <img
                  src="/assets/BookCovers/Joseph Beuys und die Medizin.png"
                  className="bookImg"
                  alt="Joseph Beuys und die Medizin"
                />
              </a>
            </div>
            <div className="book">
              <a href="/">
                <img
                  src="/assets/BookCovers/Store days documents from The store and Ray Gun Theater.png"
                  className="bookImg"
                  alt="Joseph Beuys und die Medizin"
                />
              </a>
            </div>
            <div className="book">
              <a href="/">
                <img
                  src="/assets/BookCovers/Neue Galerie der Stadt Aachen.png"
                  className="bookImg"
                  alt="Joseph Beuys und die Medizin"
                />
              </a>
            </div>
            <div className="book">
              <a href="/">
                <img
                  src="/assets/BookCovers/The Fourth Sex Adolescent Extremes.png"
                  className="bookImg"
                  alt="Joseph Beuys und die Medizin"
                />
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="aboutContainer">
            <h1 className="title">BIJZONDERE COLLECTIES</h1>
            <p className="text60 marginTop">
              De bibliotheek heeft fysieke en elektronische collecties over
              beeldende kunsten, fotografie, film, animatie, beeldverhaal,
              grafisch design, interieurvormgeving, en het kunstonderwijs. De
              nadruk ligt op 20ste-eeuwse en hedendaagse ontwikkelingen, op de
              interacties tussen de genoemde disciplines en op theoretische
              reflectie.
            </p>
          </div>
          <div className="collectionsContainer">
            <div>
              <img src={"/assets/Collections/img_1.jpg"}></img>
              <h3>Dirk Lauwaerts Collectie</h3>
            </div>
            <div>
              <img src={"/assets/Collections/img_2.jpg"}></img>
              <h3>Hubert Peeters Collectie</h3>
            </div>
          </div>
          <div>
            <p className="text">
              Openrek-collectie: vrij toegankelijk en uitleenbaar Gesloten
              collectie: aanvragen aan de balie, enkel te consulteren in de
              bibliotheek (behalve de films) C-collectie: fragiele en/of
              kostbare werken, kunstenaarspublicaties, efemera, zeldzame
              catalogi e.d. Het tijdschriftenarchief: oudere jaargangen van
              tijdschriften van de 19de eeuw tot nu De “oude bibliotheek” (OB):
              hoofdzakelijk 19de eeuwse werken, geschonken aan de bibliotheek
              bij de oprichting van de school, aangevuld met werken tot 1950.
              Filmcollectie: ca. 5.000 titels op DVD en Blu-ray, te leen of ter
              plaatse te bekijken in Cinecappella, de mini-cinema van de
              bibliotheek. De Dirk Lauwaert-collectie: bruikleencollectie van
              ca. 8.000 boeken; privébibliotheek van voormalig docent,
              kunstcriticus en schrijver Dirk Lauwaert.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
