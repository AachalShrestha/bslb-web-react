import "../css/App.css";
import Navigation from "../components/Navigation";
import BooksDrag from "../components/BooksDrag/BooksDrag";
import CollectionsContainer from "../components/CollectionsContainer";
import { useRef } from "react";

export default function Home() {
  const contentRef = useRef(null);
  const scrollFunction = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
    console.log("clicked");
  };
  return (
    <>
      <Navigation />
      <div className="page collection">
        <div>
          <div className="heroContainer">
            <h1 className="heroTitle">
              Hubert Peeter's <br />
              Collectie
            </h1>
            <button onClick={scrollFunction}>Ontdek meer</button>
            <img
              src="/assets/arrow-down.png"
              alt="arrow down"
              className="arrowDown"
              onClick={scrollFunction}
            ></img>
          </div>
          <BooksDrag />
          <div>
            <div className="aboutContainer" ref={contentRef}>
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

            <CollectionsContainer />
            <div>
              <p className="text80">
                Openrek-collectie: vrij toegankelijk en uitleenbaar Gesloten
                collectie: aanvragen aan de balie, enkel te consulteren in de
                bibliotheek (behalve de films) C-collectie: fragiele en/of
                kostbare werken, kunstenaarspublicaties, efemera, zeldzame
                catalogi e.d. Het tijdschriftenarchief: oudere jaargangen van
                tijdschriften van de 19de eeuw tot nu De “oude bibliotheek”
                (OB): hoofdzakelijk 19de eeuwse werken, geschonken aan de
                bibliotheek bij de oprichting van de school, aangevuld met
                werken tot 1950. Filmcollectie: ca. 5.000 titels op DVD en
                Blu-ray, te leen of ter plaatse te bekijken in Cinecappella, de
                mini-cinema van de bibliotheek. De Dirk Lauwaert-collectie:
                bruikleencollectie van ca. 8.000 boeken; privébibliotheek van
                voormalig docent, kunstcriticus en schrijver Dirk Lauwaert.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
