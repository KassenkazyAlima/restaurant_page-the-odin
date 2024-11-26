export default function loadMenu() {
    const menu = document.createElement('div');
    menu.innerHTML = `
      <h1>Our Menu</h1>
      <ul>
        <li>Pizza - $10</li>
        <li>Pasta - $12</li>
        <li>Salad - $8</li>
      </ul>
    `;
    return menu;
  }
  