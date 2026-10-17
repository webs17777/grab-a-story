const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
menu.addEventListener('click', () => {const expanded = menu.getAttribute('aria-expanded') === 'true';menu.setAttribute('aria-expanded',String(!expanded));nav.classList.toggle('open',!expanded);});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');nav.querySelectorAll('a').forEach(a=>a.classList.toggle('active',a===link));}));
document.getElementById('year').textContent = new Date().getFullYear();