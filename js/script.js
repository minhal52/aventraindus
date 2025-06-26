const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Toggle Font Awesome icon classes
    const icon = hamburger.querySelector('i');
    if (icon) {
      if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
      } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    }
  });
}
// dropdown

const dropBtn = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');
const arrowIcon = dropBtn.querySelector('.arrow-icon');

dropBtn.addEventListener('click', (e) => {
  if (window.innerWidth <= 992) {
    e.preventDefault();
    dropdownContent.classList.toggle('show');
    arrowIcon.classList.toggle('arrow-rotate');
  }
});




// back to top

const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    this.reset();
  });


//   contact form 
(function () {
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
  })();

  const form = document.getElementById("contact-form");
  const confirmation = document.getElementById("confirmation");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form)
      .then(() => {
        confirmation.classList.remove("error");
        confirmation.style.display = "block";
        confirmation.innerHTML = `
          <strong>Message sent successfully!</strong><br><br>
          <strong>Name:</strong> ${form.name.value}<br>
          <strong>Email:</strong> ${form.email.value}<br>
          <strong>Phone:</strong> ${form.phone.value || "N/A"}<br>
          <strong>Message:</strong> ${form.message.value}
        `;
        form.reset();
      }, (error) => {
        console.error("EmailJS Error:", error);
        confirmation.classList.add("error");
        confirmation.style.display = "block";
        confirmation.innerText = "Failed to send message. Please try again.";
      });
  });