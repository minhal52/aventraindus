    // navbar menu toggle buttons
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
document.addEventListener('click', (e) => {
  const dropBtn = e.target.closest('.dropbtn');
  
  if (!dropBtn) return;

  if (window.innerWidth <= 992) {
    e.preventDefault();

    const dropdown = dropBtn.closest('.dropdown');
    const content = dropdown.querySelector('.dropdown-content');
    const arrow = dropBtn.querySelector('.arrow-icon');

    content.classList.toggle('show');
    arrow?.classList.toggle('arrow-rotate');
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

 // contact form sendamessage mail functionalty

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    this.reset();
  });
// 

 

  document.getElementById('mailto-btn').addEventListener('click', function () {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validation (optional)
    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(
      `Full Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n\n` +
      `Message:\n${message}`
    );

    const mailtoLink = `mailto:info@aventraindus.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  });

