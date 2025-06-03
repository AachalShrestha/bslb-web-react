import React, { useEffect, useRef } from "react";

export default function BooksDragBook({ id, style, src, alt }) {
  const draggableItem = useRef(null);

  useEffect(() => {
    const elmnt = draggableItem.current;
    if (!elmnt) return;

    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;

    const dragMouseDown = (e) => {
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    };

    const elementDrag = (e) => {
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    };

    const closeDragElement = () => {
      document.onmouseup = null;
      document.onmousemove = null;
    };

    elmnt.onmousedown = dragMouseDown;

    // Clean up
    return () => {
      elmnt.onmousedown = null;
      document.onmouseup = null;
      document.onmousemove = null;
    };
  }, []);

  return (
    <div
      ref={draggableItem}
      className="book"
      style={{ position: "absolute", ...style }}
      id={id}
    >
      <a href="#" onMouseDown={(e) => e.preventDefault()}>
        <img src={src} alt={alt} className="bookImg" />
      </a>
    </div>
  );
}
