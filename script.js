// Mobile navigation toggle
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  // Close nav when a link is clicked (mobile)
  nav.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    })
  );
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');
    if (targetId && targetId.length > 1) {
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// Reveal elements on scroll
const revealEls = document.querySelectorAll('.reveal, .reveal-delayed');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });
revealEls.forEach(el => observer.observe(el));

// Subtle 3D tilt effect for project cards
document.querySelectorAll('.tilt').forEach(card => {
  let rect;
  const damp = 28; // lower = stronger tilt

  card.addEventListener('mouseenter', () => rect = card.getBoundingClientRect());

  card.addEventListener('mousemove', e => {
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y / rect.height) - 0.5) * -damp;
    const ry = ((x / rect.width) - 0.5) * damp;
    card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// Simple contact form handler (client-side demo only)
function handleContact(e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    message: form.message.value.trim()
  };

  if (!data.name || !data.email || !data.message) {
    alert('Please fill all fields.');
    return false;
  }

  alert('Thanks! Your message is noted (demo). Connect this form to Formspree, Netlify Forms, or a backend to receive emails.');
  form.reset();
  return false;
}
