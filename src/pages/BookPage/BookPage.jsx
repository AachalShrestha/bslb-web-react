import "./BookPage.css";
import Navigation from "../../components/Navigation";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Example book data
// or wherever your JSON is stored

export default function BookPage() {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the book ID from URL
  const [book, setBook] = useState(null);

  useEffect(() => {
    document.body.classList.add("white-theme");
    return () => document.body.classList.remove("white-theme");
  }, []);

  useEffect(() => {
    fetch("/assets/Data/Books.json")
      .then((res) => res.json())
      .then((data) => {
        const foundBook = data.find((b) => b.id === parseInt(id));
        setBook(foundBook);
      });
  }, [id]);

  if (!book) {
    return <p>Boek niet gevonden.</p>;
  }

  return (
    <>
      <Navigation category={book.category} />
      <a onClick={() => navigate(-1)}>
        <img
          className="back-button"
          src="/assets/arrow_black_left.png"
          alt="Back"
        />
      </a>
      <div className="page white-theme bookpage-content">
        <div className="booktitles">
          <h1>{book.title}</h1>
          <h3>{book.author}</h3>
          <p>{book.udc}</p>
        </div>
        <div className="bookinfo-container">
          <img src={book.src} alt={book.alt} />
          <div>
            <p>{book.description}</p>
            <br />
            <p
              className={`availability ${
                book.available ? "available" : "not-available"
              }`}
            >
              {book.available ? "Beschikbaar" : "Niet beschikbaar"}
            </p>
            <button className="button-black">+ Voeg toe aan lijst</button>
          </div>
        </div>
      </div>
    </>
  );
}
