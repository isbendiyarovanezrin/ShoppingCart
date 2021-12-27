// cursor
let cursor = document.getElementById("cursor");

window.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
});
