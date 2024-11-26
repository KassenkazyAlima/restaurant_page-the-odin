import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

function loadPage(pageFunction) {
  const content = document.getElementById('content');
  content.innerHTML = ''; 
  content.appendChild(pageFunction()); 
}


document.addEventListener('DOMContentLoaded', () => {
  const navButtons = document.querySelectorAll('nav button');
  navButtons[0].addEventListener('click', () => loadPage(loadHome));
  navButtons[1].addEventListener('click', () => loadPage(loadMenu));
  navButtons[2].addEventListener('click', () => loadPage(loadContact));

  loadPage(loadHome); //by default
});
