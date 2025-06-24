document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navLinkItems = document.querySelectorAll('.nav-link');

  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
    hamburger.setAttribute('aria-expanded', !expanded);
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
      navLinkItems.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      if (window.innerWidth <= 900) {
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('open');
      }
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('open');
    }
  });
});

hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
  hamburger.setAttribute('aria-expanded', !expanded);
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});

  window.addEventListener('scroll', function () {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 0) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }

      const sections = ['home', 'about', 'whyus', 'explore', 'connect'];
      let scrollPos = window.scrollY + 100;
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            document.querySelectorAll('.nav-link').forEach((link) => {
              link.classList.remove('active');
            });
            const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
            if (activeLink) activeLink.classList.add('active');
          }
        }
      });
    });

    document.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', function () {
        document.querySelectorAll('.nav-link').forEach((l) => l.classList.remove('active'));
        this.classList.add('active');
      });
    });