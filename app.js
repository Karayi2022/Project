var Typed = new Typed(".auto-type", {
  strings: [
    "UX/UI Design.",
    "Figma.",
    "Wordpress.",
    "Canva.",
    "Adobe Photoshop.",
    "Pixellab.",
    "Vector Ink.",
    "Web Development.",
  ],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}
