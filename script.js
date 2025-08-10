// Mobile nav
const btn = document.getElementById('menuBtn');
const menu = document.getElementById('mobileMenu');
if (btn && menu){
  btn.addEventListener('click', () => {
    const isHidden = menu.hasAttribute('hidden');
    if (isHidden) menu.removeAttribute('hidden'); else menu.setAttribute('hidden','');
  });
}

// Year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Simple client-side search to highlight cards containing the query
const input = document.getElementById('searchInput');
if (input){
  input.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    cards.forEach(c => {
      const text = c.innerText.toLowerCase();
      c.style.opacity = q && !text.includes(q) ? 0.35 : 1;
    });
  });
}
