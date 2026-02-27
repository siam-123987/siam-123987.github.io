// Typing Effect
const texts = [
  "Problem Solver",
  "Future Software Engineer"
];

let count = 0;
let index = 0;

function type() {
  const currentText = texts[count];
  document.querySelector(".typing").textContent =
    currentText.substring(0, index + 1);

  index++;

  if (index === currentText.length) {
    setTimeout(() => {
      index = 0;
      count = (count + 1) % texts.length;
      type();
    }, 1200);
  } else {
    setTimeout(type, 120);
  }
}
type();


// Scroll Reveal
const sections = document.querySelectorAll(".section");

function reveal() {
  const trigger = window.innerHeight * 0.85;

  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < trigger) {
      section.classList.remove("hidden");
    }
  });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);


// Contact Form Alert
document.getElementById("contact-form")
.addEventListener("submit", function(e){
  e.preventDefault();
  alert("Message Sent Successfully!");
  this.reset();
});