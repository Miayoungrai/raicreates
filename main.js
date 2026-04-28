/* RaiCreates — main.js */

// ---- Nav scroll effect ----
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

// ---- Mobile nav toggle ----
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.classList.toggle('open');
  });
  // Close on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// ---- Newsletter form ----
async function handleNewsletterSubmit(e) {
  e.preventDefault();
  const input = e.target.querySelector('input[type="email"]');
  const btn = e.target.querySelector('button');
  const email = input.value;
  btn.textContent = 'Subscribing...';
  btn.disabled = true;
  try {
    const res = await fetch('https://formspree.io/f/xrerpvyz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ email: email, _subject: 'New Newsletter Signup — RaiCreates' })
    });
    if (res.ok) {
      btn.textContent = 'Subscribed!';
      btn.style.background = '#8aab96';
      input.value = '';
      input.placeholder = 'Welcome to the community!';
      input.disabled = true;
    } else {
      btn.textContent = 'Try again';
      btn.disabled = false;
    }
  } catch(err) {
    btn.textContent = 'Subscribed!';
    btn.style.background = '#8aab96';
    input.value = ''; input.placeholder = 'Welcome to the community!';
    input.disabled = true;
  }
}

// ---- Reveal on scroll ----
const reveals = document.querySelectorAll('.pillar-card, .testi-card, .program-row, .stat');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = `${i * 0.08}s`;
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  revealObserver.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
  // Re-trigger for elements already in view
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }
  });
});

// Listen for class adds
const styleEl = document.createElement('style');
styleEl.textContent = `.revealed { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(styleEl);
