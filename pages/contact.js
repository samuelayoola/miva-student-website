/*==========================================
    CONTACT PAGE JAVASCRIPT
==========================================*/

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");

  /*==========================================
      FORM VALIDATION
    ==========================================*/

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();

    // Check for empty fields
    if (name === "" || email === "" || subject === "" || message === "") {
      alert("Please fill in all fields.");

      return;
    }

    // Validate email
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");

      emailInput.focus();

      return;
    }

    // Success message
    alert("Thank you! Your message has been sent successfully.");

    // Reset the form
    form.reset();
  });

  /*==========================================
      EMAIL VALIDATION
    ==========================================*/

  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
  }
});
