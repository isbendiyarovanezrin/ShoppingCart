"use strict";

// cursor
const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", changeCursor);

function changeCursor(e) {
  const x = e.pageX;
  const y = e.pageY;

  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
}
