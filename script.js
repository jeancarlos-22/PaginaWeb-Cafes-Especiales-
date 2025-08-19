// ==========================
// Botón Volver Arriba
// ==========================
window.addEventListener("scroll", function() {
  const btn = document.getElementById("backToTop");
  if (window.scrollY > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================
// Animación al hacer scroll
// ==========================
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

sections.forEach(section => {
  observer.observe(section);
});

// ==========================
// Galería con Modal
// ==========================
const images = document.querySelectorAll(".galeria img");
const modal = document.createElement("div");
modal.id = "modal";
document.body.appendChild(modal);

images.forEach(img => {
  img.addEventListener("click", () => {
    modal.innerHTML = `<span id="close">✖</span><img src="${img.src}" alt="${img.alt}">`;
    modal.style.display = "flex";
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.id === "close" || e.target.id === "modal") {
    modal.style.display = "none";
  }
});
