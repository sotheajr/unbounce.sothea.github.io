document.querySelectorAll(".box").forEach((box) => {
  box.addEventListener("mouseenter", () => {
    box.style.borderColor = "#e63946";
  });
  box.addEventListener("mouseleave", () => {
    box.style.borderColor = "#66bfbf";
  });
});
