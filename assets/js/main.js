/* ==========================================================
   UNCP ACM Chapter — Front-end JavaScript
   - Mobile menu toggle
   - Active link highlighting
   - Events filter (events.html)
   - Join form -> mailto
   - Contact form -> mailto
   - Scroll-triggered fade-ins
   ========================================================== */

(function () {
  // ----- Mobile menu toggle ---------------------------------
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // ----- Footer year (auto) ---------------------------------
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // ----- Events page: filter pills --------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const eventCards = document.querySelectorAll('.event-card');
  if (filterBtns.length && eventCards.length) {
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterBtns.forEach((b) => {
          b.classList.remove('active', 'bg-uncpblack', 'text-white');
          b.classList.add('border-slate-200');
        });
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        eventCards.forEach((card) => {
          const type = card.getAttribute('data-type');
          if (filter === 'all' || filter === type) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  }

  // ----- Join form -> mailto --------------------------------
  const joinForm = document.getElementById('join-form');
  if (joinForm) {
    joinForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(joinForm);
      const interests = data.getAll('interests').join(', ') || '(none selected)';
      const subject = encodeURIComponent('UNCP ACM — New member sign-up');
      const body = encodeURIComponent(
        `Hi UNCP ACM,\n\nI'd like to join the chapter.\n\n` +
          `Name:     ${data.get('firstname')} ${data.get('lastname')}\n` +
          `Email:    ${data.get('email')}\n` +
          `Major:    ${data.get('major')}\n` +
          `Year:     ${data.get('year')}\n` +
          `Interests: ${interests}\n\n` +
          `Note: ${data.get('message') || '(none)'}\n\nThanks!`
      );
      window.location.href = `mailto:acm@uncp.edu?subject=${subject}&body=${body}`;
      const status = document.getElementById('form-status');
      if (status) {
        status.textContent = 'Opening your email client… if nothing happens, email acm@uncp.edu directly.';
        status.classList.remove('hidden');
      }
    });
  }

  // ----- Contact form -> mailto -----------------------------
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(contactForm);
      const subject = encodeURIComponent(`UNCP ACM — ${data.get('ctopic')}`);
      const body = encodeURIComponent(
        `From: ${data.get('cname')} <${data.get('cemail')}>\n` +
          `Topic: ${data.get('ctopic')}\n\n` +
          `${data.get('cmessage')}\n`
      );
      window.location.href = `mailto:acm@uncp.edu?subject=${subject}&body=${body}`;
      const status = document.getElementById('contact-status');
      if (status) {
        status.textContent = 'Opening your email client… if nothing happens, email acm@uncp.edu directly.';
        status.classList.remove('hidden');
      }
    });
  }

  // ----- Scroll-triggered fade-ins --------------------------
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.fade-in').forEach((el) => io.observe(el));
  }
})();
