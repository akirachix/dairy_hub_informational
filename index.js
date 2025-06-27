document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navLinkItems = document.querySelectorAll('.nav-link');
  const navbar = document.getElementById('navbar');

  let isManualNav = false;
  let manualNavTimeout;

  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !expanded);
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  navLinkItems.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      isManualNav = true;
      clearTimeout(manualNavTimeout);

      navLinkItems.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      if (window.innerWidth <= 1000) {
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      }

      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      manualNavTimeout = setTimeout(() => {
        isManualNav = false;
        updateActiveLinkOnScroll();
      }, 1200);
    });
  });

  let scrollTimeout;
  window.addEventListener('scroll', () => {
    if (scrollTimeout) clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      if (!isManualNav) {
        updateActiveLinkOnScroll();
      }
      if (window.scrollY > 0) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    }, 100);
  });

  function updateActiveLinkOnScroll() {
    const sections = ['home', 'about', 'whyus', 'explore', 'connect'];
    const scrollPos = window.scrollY + 120;

    for (let id of sections) {
      const section = document.getElementById(id);
      if (section) {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          navLinkItems.forEach(link => link.classList.remove('active'));
          const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
          if (activeLink) activeLink.classList.add('active');
          break;
        }
      }
    }
  }

  updateActiveLinkOnScroll();

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1000) {
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
});

var docWidth = document.documentElement.offsetWidth;
[].forEach.call(document.querySelectorAll('*'), function(el) {
  if (el.offsetWidth > docWidth) {
    console.log(el);
  }
});
