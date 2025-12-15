const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const h = window.innerHeight;

  // Initial position
  if (scrollY < h) {
    card2.style.transform = "translate(-50%, 300px)";
    card3.style.transform = "translate(-50%, 500px)";
  }

  // Card 2 comes up
  if (scrollY >= h && scrollY < h * 2) {
    const move = Math.min(scrollY - h, 200);
    card2.style.transform = `translate(-50%, ${300 - move}px)`;
    card3.style.transform = "translate(-50%, 500px)";
  }

  // Card 3 comes up
  if (scrollY >= h * 2) {
    const move = Math.min(scrollY - h * 2, 200);
    card3.style.transform = `translate(-50%, ${500 - move}px)`;
  }
});
