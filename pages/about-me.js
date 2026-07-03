/*=========================================
  ABOUT ME PAGE JAVASCRIPT
=========================================*/

document.addEventListener("DOMContentLoaded", () => {
  /*=====================================
      SCROLL REVEAL ANIMATION
    =====================================*/

  const cards = document.querySelectorAll(".card");

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
      ACTIVE NAVIGATION LINK
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
      SMOOTH SCROLL
    =====================================*/

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});
