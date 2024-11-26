import home from './home';
import menu from './menu';
import contact from './contact';

function loadPage(content) {
  const contentDiv = document.querySelector('#content');
  contentDiv.innerHTML = '';
  contentDiv.appendChild(content);
}

document.querySelector('#home').addEventListener('click', () => loadPage(home()));
document.querySelector('#menu').addEventListener('click', () => loadPage(menu()));
document.querySelector('#contact').addEventListener('click', () => loadPage(contact()));

// Load Home by default
loadPage(home());
