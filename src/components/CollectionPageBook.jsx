import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function CollectionBook() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/assets/Data/Books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Failed to load books:", err));
  }, []);

  const handleClick = (id) => {
    navigate(`/bookpage/${id}`);
  };
  return (
    <div className="books-grid-wrapper">
      {books.map((book, index) => (
        <div
          className="grid-book"
          key={index}
          onClick={() => handleClick(book.id)}
        >
          <div>
            <p className="title">{book.title}</p>
            <p>{book.author}</p>
          </div>
          <div>
            <img src={book.src} alt={book.title} />
          </div>
          <div>
            <p className="udc-tag">{book.udc}</p>
            <a className="addToList-button">+ Add to list</a>
          </div>
        </div>
      ))}
    </div>
  );
}
