const phrases = [
  "networking · telecomunicazioni · IoT",
  "Python · C · HTML · CSS · JavaScript",
  "DSP · segnali · sistemi digitali",
  "problem solving con metodo ingegneristico"
];

const typingElement = document.querySelector("#typing-text");
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const current = phrases[phraseIndex];

  if (!deleting) {
    typingElement.textContent = current.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1200);
      return;
    }
  } else {
    typingElement.textContent = current.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  setTimeout(typeLoop, deleting ? 36 : 62);
}

typeLoop();

document.querySelector("#year").textContent = new Date().getFullYear();

const revealElements = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.16 }
);

revealElements.forEach(element => observer.observe(element));

const glow = document.querySelector(".cursor-glow");
window.addEventListener("mousemove", event => {
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const filterButtons = document.querySelectorAll(".filter-btn");
const examChips = document.querySelectorAll(".exam-chip");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    examChips.forEach(chip => {
      const match = filter === "all" || chip.dataset.category === filter;
      chip.classList.toggle("hide", !match);
    });
  });
});
