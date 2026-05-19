// ===== ECOBIN MAIN JS =====

// Navbar scroll effect
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.style.background = window.scrollY > 50
      ? 'rgba(10,26,11,0.97)'
      : 'rgba(10,26,11,0.85)';
  });
}

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}

// Particle field
const pf = document.getElementById('particleField');
if (pf) {
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    const size = Math.random() * 3 + 1;
    p.style.cssText = `
      position:absolute;
      width:${size}px;height:${size}px;
      background:rgba(76,175,80,${Math.random() * 0.5 + 0.1});
      border-radius:50%;
      left:${Math.random() * 100}%;
      top:${Math.random() * 100}%;
      animation:particleFloat ${Math.random() * 8 + 6}s ease-in-out infinite;
      animation-delay:${Math.random() * 6}s;
    `;
    pf.appendChild(p);
  }
  const style = document.createElement('style');
  style.textContent = `
    @keyframes particleFloat {
      0%,100% { transform:translateY(0) translateX(0); opacity:0.4; }
      33% { transform:translateY(-${Math.random()*30+20}px) translateX(${Math.random()*20-10}px); opacity:1; }
      66% { transform:translateY(${Math.random()*20+10}px) translateX(${Math.random()*20-10}px); opacity:0.6; }
    }
  `;
  document.head.appendChild(style);
}

// Animate progress bars on scroll (impacto page)
const progressBars = document.querySelectorAll('.prog-fill');
if (progressBars.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.style.width = el.dataset.width || '0%';
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  progressBars.forEach(bar => observer.observe(bar));
}

// Animate numbers on scroll
const animNums = document.querySelectorAll('.imp-num');
animNums.forEach(el => {
  const io = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      el.style.opacity = '1';
      el.style.transform = 'scale(1)';
      io.unobserve(el);
    }
  });
  el.style.opacity = '0';
  el.style.transform = 'scale(0.8)';
  el.style.transition = 'all 0.5s cubic-bezier(0.34,1.56,0.64,1)';
  io.observe(el);
});

// Typing demo in hero chat preview
const typingDemo = document.getElementById('typingDemo');
if (typingDemo) {
  setTimeout(() => {
    typingDemo.outerHTML = `<div class="msg bot">El cartón mojado generalmente <strong>NO se recicla</strong> 😔 Los contaminantes dañan las fibras. Sepáralo como orgánico o basura general; en EcoBin, EcoBot te ayuda a decidir antes de depositarlo.</div>`;
  }, 3500);
}

// Active nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  a.classList.remove('active');
  if (a.getAttribute('href') === currentPage) a.classList.add('active');
});
