const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
  cursor.style.display = "block";
});