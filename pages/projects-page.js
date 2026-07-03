/*=========================================
    PROJECTS PAGE JAVASCRIPT
=========================================*/

document.addEventListener("DOMContentLoaded", () => {
  /*=====================================
      ACTIVE NAVIGATION
    =====================================*/

  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");

    if (href === currentPage) {
      link.classList.add("active");
    }
  });

  /*=====================================
      SCROLL REVEAL ANIMATION
    =====================================*/

  const cards = document.querySelectorAll(".project-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.2,
    },
  );

  cards.forEach((card) => {
    observer.observe(card);
  });

  /*=====================================
      PROJECT BUTTONS
    =====================================*/

  const buttons = document.querySelectorAll(".project-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      alert("Demo coming soon! This is a sample portfolio project.");
    });
  });
});
