import Navigation from "../components/Navigation";
import { useEffect } from "react";
import "../css/CollectionPage.css";
import CollectionBook from "../components/CollectionPageBook";

export default function Collection() {
  useEffect(() => {
    document.body.classList.add("white-theme");
    return () => {
      document.body.classList.remove("white-theme");
    };
  }, []);

  return (
    <>
      <Navigation />
      <a href="/">
        <img className="back-button" src="/assets/arrow_black_left.png"></img>
      </a>
      <div className="page page-80 white-theme text80">
        <div className="collection-header">
          <h1>PEETERS COLLECTIE</h1>
          <p className="width-60">
            Dirk Lauwaert was een uitzonderlijke docent, één van de
            belangrijkste schrijvers over cultuur in dit land en een zeer
            beminnelijke en genereuze man. Zijn bibliotheek bevatte meer dan
            zevenduizend titels over film, fotografie, beeldende kunst,
            architectuur, stedenbouw, semiotiek, filosofie,… De collectie werd
            na zijn overlijden door de familie in bruikleen gegeven aan
            bibliotheek Sint-Lukas Brussel met de uitdrukkelijke wens dat deze
            toegankelijk gemaakt zou worden voor studenten en onderzoekers.
            <p />
            <br /> In 2023 ontwierp Sophie Nys met de bibliothecarissen een plek
            in de bibliotheek om boeken uit de Lauwaert-collectie te
            presenteren. Op geregelde tijdstippen wordt een lezer uitgenodigd om
            een persoonlijke selectie uit de Lauwaert-bibliotheek te maken. Via
            deze link kan de inventaris van de enorme boekencollectie bekijken.
            Titels uit de collectie kunnen aangevraagd en ter plaatse ingekeken
            worden.
          </p>
        </div>
        <CollectionBook />
      </div>
    </>
  );
}
