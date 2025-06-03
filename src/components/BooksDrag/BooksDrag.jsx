import { useEffect, useState } from "react";
import "./BooksDrag.css";
import BooksDragBook from "../BooksDragBook";

export default function BooksDrag() {
  const [books, setBooks] = useState([]);
  const [positions, setPositions] = useState({});
  const [draggingId, setDraggingId] = useState(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    fetch("/assets/Data/Books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Failed to load books:", err));
  }, []);

  const handleMouseDown = (e, id) => {
    const rect = e.target.getBoundingClientRect();
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setDraggingId(id);
  };

  const handleMouseMove = (e) => {
    if (draggingId !== null) {
      setPositions((prev) => ({
        ...prev,
        [draggingId]: {
          x: e.clientX - offset.x,
          y: e.clientY - offset.y,
        },
      }));
    }
  };

  const handleMouseUp = () => {
    setDraggingId(null);
  };

  const renderBook = (book) => {
    const position = positions[book.id];
    const hasMoved = position !== undefined;

    const style = hasMoved
      ? {
          position: "relative",
          left: position.x,
          top: position.y,
          zIndex: draggingId === book.id ? 1000 : 1,
        }
      : {}; // Let CSS handle it initially

    return (
      <BooksDragBook
        key={book.id}
        style={style}
        src={book.src}
        alt={book.alt}
      />
    );
  };

  const row1Books = books.slice(0, 3);
  const row2Books = books.slice(3);

  return (
    <div
      className="booksWrapper"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="row1">{row1Books.map(renderBook)}</div>
      <div className="row2">{row2Books.map(renderBook)}</div>
    </div>
  );
}
