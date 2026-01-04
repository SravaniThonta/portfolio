// ===== Mobile Navigation Toggle =====
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('active');
  navToggle.classList.toggle('open');
});

// ===== Smooth Scroll for Anchor Links =====
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Close nav on mobile after click
    mainNav.classList.remove('active');
    navToggle.classList.remove('open');
  });
});

// ===== Scroll Reveal Animations =====
const revealElements = document.querySelectorAll('.section, .skill-card, .project-card, .timeline-item');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) {
      el.classList.add('reveal');
    } else {
      el.classList.remove('reveal');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===== Optional: Typing effect for hero =====
const heroText = document.querySelector('.hero-copy h1');
if (heroText) {
  const text = heroText.textContent;
  heroText.textContent = '';
  let i = 0;
  const type = () => {
    if (i < text.length) {
      heroText.textContent += text.charAt(i);
      i++;
      setTimeout(type, 100);
    }
  };
  type();
}
