/* ================================================
   DOMINION CITY GLOBAL SERVICES - MAIN JAVASCRIPT
   ================================================ */

// Navigation toggle for mobile
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav');

  if (navToggle) {
    navToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        nav.classList.remove('active');
      });
    });
  }

  // Set active nav link based on current page
  updateActiveNavLink();

  // Handle form submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }

  // Scroll animations
  observeElements();
});

// Update active navigation link
function updateActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Handle form submission
function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  // Validate form
  if (!validateForm(formData)) {
    showMessage('Please fill in all required fields correctly.', 'error');
    return;
  }

  // Simulate form submission
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;

  // Simulate delay
  setTimeout(() => {
    showMessage('Thank you! We will contact you shortly.', 'success');
    form.reset();
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }, 1500);
}

// Validate form data
function validateForm(formData) {
  const email = formData.get('email');
  const phone = formData.get('phone');
  const message = formData.get('message');

  // Check required fields
  for (let [key, value] of formData.entries()) {
    if (!value.trim()) {
      return false;
    }
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return false;
  }

  // Validate phone format (basic)
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  if (!phoneRegex.test(phone)) {
    return false;
  }

  return true;
}

// Show notification message
function showMessage(text, type) {
  // Remove existing message if any
  const existingMessage = document.querySelector('.form-message');
  if (existingMessage) {
    existingMessage.remove();
  }

  const messageDiv = document.createElement('div');
  messageDiv.className = `form-message form-message-${type}`;
  messageDiv.textContent = text;
  messageDiv.style.cssText = `
    padding: 1rem;
    border-radius: 0.375rem;
    margin-bottom: 1.5rem;
    font-weight: 500;
    animation: slideUp 0.3s ease-out;
    background: ${type === 'success' ? '#d4edda' : '#f8d7da'};
    color: ${type === 'success' ? '#155724' : '#721c24'};
    border: 1px solid ${type === 'success' ? '#c3e6cb' : '#f5c6cb'};
  `;

  const form = document.getElementById('contactForm');
  form.parentNode.insertBefore(messageDiv, form);

  // Auto remove message after 5 seconds
  setTimeout(() => {
    messageDiv.style.animation = 'fadeOut 0.3s ease-out forwards';
    setTimeout(() => messageDiv.remove(), 300);
  }, 5000);
}

// Intersection Observer for scroll animations
function observeElements() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'slideUp 0.6s ease-out forwards';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe feature cards and service cards
  const animatedElements = document.querySelectorAll(
    '.feature-card, .service-card, .industry-card'
  );
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
}

// Smooth scroll for anchor links
document.addEventListener('click', function(e) {
  if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
});

// Add CSS animation for fade out
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeOut {
    to {
      opacity: 0;
      transform: translateY(-10px);
    }
  }
`;
document.head.appendChild(style);
