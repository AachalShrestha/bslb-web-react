import "../css/Navigation.css";

export default function Navigation() {
  return (
    <>
      <div className="nav">
        <a href="/">
          <img src="/assets/logo-GIF.gif" className="logo"></img>
        </a>
        <div>
          <nav className="navElementsContainer">
            <div>
              <a href="#" className="link">
                Account
              </a>
            </div>
            <div className="navElements">
              <a href="#" className="link">
                Catalogus
              </a>
              <a href="#" className="link">
                Events
              </a>
              <a href="#" className="link">
                Bijzondere Collecties
              </a>
              <a href="#" className="link">
                Over de Bib
              </a>
              <a href="#" className="link">
                Contact
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
