import "../css/CollectionsContainer.css";

export default function CollectionsContainer() {
  return (
    <div className="collectionsWrapper">
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
    </div>
  );
}
