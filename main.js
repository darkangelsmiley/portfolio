  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        const id = entry.target.id;
        document.querySelectorAll('.circle-nav a.circle').forEach(link => {
          link.classList.remove('active-dot');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active-dot');
          }
        });
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.animate').forEach(section => {
    observer.observe(section);
  });
  
  
  tsParticles.load("tsparticles", {
    background: { color: "#000000" },
    fpsLimit: 60,
    fullScreen: { enable: false }, // Keeps it inside #tsparticles
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: ["#00cfff", "#c800ff"]
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.5
      },
      size: {
        value: 3
      },
      links: {
        enable: true,
        distance: 120,
        color: "#c800ff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        outMode: "bounce"
      }
    },
    detectRetina: true
  });
