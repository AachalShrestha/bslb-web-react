import "../css/CollectionsContainer.css";
import { useNavigate } from "react-router-dom";

export default function CollectionsContainer() {
  const navigate = useNavigate();

  return (
    <div className="collectionsWrapper">
      <div className="collectionsContainer">
        <div onClick={() => navigate("/collection")}>
          <img src={"/assets/Collections/img_1.jpg"} alt="Dirk Lauwaerts" />
          <h3>Dirk Lauwaerts Collectie</h3>
        </div>

        <div onClick={() => navigate("/collection")}>
          <img src={"/assets/Collections/img_2.jpg"} alt="Hubert Peeters" />
          <h3>Hubert Peeters Collectie</h3>
        </div>
      </div>
    </div>
  );
}
