const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
document.getElementById('year').textContent = new Date().getFullYear();
