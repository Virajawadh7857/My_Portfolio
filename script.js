// Simple console log
console.log("Welcome to Vikash's Java Portfolio!");

// Toggle dark mode class on the body
document.getElementById("toggleDark").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode"); // Adds or removes dark-mode class
});

// Typewriter effect for dynamic role display
const roles = ["Java Backend Developer", "DevOps Engineer", "Cloud Enthusiast"];
let i = 0, j = 0;
let isDeleting = false;

function typeWriter() {
  let currentRole = roles[i];
  let displayedText = currentRole.substring(0, j);
  document.getElementById("roleText").textContent = displayedText;

  // Typing or deleting
  if (!isDeleting && j < currentRole.length) {
    j++;
  } else if (isDeleting && j > 0) {
    j--;
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % roles.length; // Move to next role
  }

  setTimeout(typeWriter, isDeleting ? 50 : 150); // Typing speed
}
typeWriter();

