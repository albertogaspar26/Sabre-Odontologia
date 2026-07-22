// Menu mobile
const burger = document.getElementById('navBurger');
const links = document.getElementById('navLinks');

if (burger && links) {
  burger.addEventListener('click', () => {
    const isOpen = links.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(isOpen));
  });

  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      links.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

// Ano dinâmico no rodapé
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
