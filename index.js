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
