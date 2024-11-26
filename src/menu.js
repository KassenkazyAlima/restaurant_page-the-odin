export default function loadMenu() {
    const menu = document.createElement('div');
    menu.innerHTML = `
    <h1>Our Menu</h1>
    <p>Explore our diverse selection of dishes:</p>
    <ul style="list-style: none; padding: 0;">
      <li>Mezzaluna - $$$</li>
      <li>Le Normandie - $$$</li>
      <li>Bisou - $$$</li>
      <li>Indee - $$$</li>
      </ul>
    `;
    return menu;
  }
  