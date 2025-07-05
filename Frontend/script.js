// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Print greeting message in console (branding!)
console.log("%cWelcome to Viraj's Portfolio!", "color: green; font-size: 16px");

// Example of future enhancement: Fetch projects from backend API (Spring Boot)
// fetch("http://localhost:8080/api/projects")
//   .then(response => response.json())
//   .then(data => {
//     const projectSection = document.getElementById("projects");
//     data.forEach(project => {
//       const div = document.createElement("div");
//       div.classList.add("project");
//       div.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p>`;
//       projectSection.appendChild(div);
//     });
//   })
//   .catch(error => console.error("Failed to load projects", error));
