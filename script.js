 // ============ THEME TOGGLE ============
      const themeToggle = document.getElementById('themeToggle');
      const body = document.body;

      // Check saved theme or default to dark
      const savedTheme = localStorage.getItem('nexttech-theme') || 'dark';
      body.setAttribute('data-theme', savedTheme);

      themeToggle.addEventListener('click', function (e) {
        // Ripple effect
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        this.appendChild(ripple);

        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = e.clientX - rect.left - size / 2 + 'px';
        ripple.style.top = e.clientY - rect.top - size / 2 + 'px';

        setTimeout(() => ripple.remove(), 600);

        // Toggle theme
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('nexttech-theme', newTheme);
      });

      // ============ HEADER SCROLL ============
      const header = document.getElementById('header');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      });

      // ============ MOBILE MENU ============
      const hamburger = document.getElementById('hamburger');
      const navLinks = document.getElementById('navLinks');

      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
      });

      document.querySelectorAll('.nav-links a').forEach((link) => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          navLinks.classList.remove('active');
        });
      });

      // ============ SMOOTH SCROLL ============
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      });