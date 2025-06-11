import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import BookPage from "./pages/BookPage/BookPage";
import DragAndDropMouse from "./pages/test";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/bookpage/:id" element={<BookPage />} />
      <Route path="/dragtest" element={<DragAndDropMouse />} />
    </Routes>
  );
}
