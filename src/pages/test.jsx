import { useState, useEffect } from "react";

const DragAndDropMouse = () => {
  const [books, setBooks] = useState([]);
  const [draggedBook, setDraggedBook] = useState(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    fetch("/assets/Data/Books.json")
      .then((res) => res.json())
      .then((data) => {
        const booksWithPosition = data.map((book) => ({
          ...book,
          x: book.x || Math.random() * window.innerWidth * 0.8,
          y: book.y || Math.random() * window.innerHeight * 0.8,
        }));
        setBooks(booksWithPosition);
      })
      .catch((err) => console.error("Failed to load books:", err));
  }, []);

  const handleMouseDown = (e, id) => {
    e.preventDefault(); // Prevent text selection while dragging
    const book = books.find((item) => item.id === id);
    if (!book) return;

    const rect = e.currentTarget.getBoundingClientRect();
    setOffset({
      x: e.clientX - book.x,
      y: e.clientY - book.y,
    });
    setDraggedBook(id);
  };

  const handleMouseMove = (e) => {
    if (!draggedBook) return;

    setBooks(
      books.map((book) => {
        if (book.id === draggedBook) {
          return {
            ...book,
            x: e.clientX - offset.x,
            y: e.clientY - offset.y,
          };
        }
        return book;
      })
    );
  };

  const handleMouseUp = () => {
    setDraggedBook(null);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        border: "1px solid black",
        overflow: "hidden",
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {books.map((book) => (
        <div
          key={book.id}
          onMouseDown={(e) => handleMouseDown(e, book.id)}
          style={{
            position: "absolute",
            left: `${book.x}px`,
            top: `${book.y}px`,
            padding: "10px",
            cursor: book.id === draggedBook ? "grabbing" : "grab",
            userSelect: "none",
            width: "200px",
            zIndex: book.id === draggedBook ? 100 : 1,
          }}
        >
          <img
            src={book.src}
            alt={book.alt}
            style={{
              width: "100%",
              height: "auto",
              pointerEvents: "none",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default DragAndDropMouse;
