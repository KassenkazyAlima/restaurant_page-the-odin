export default function loadHome() {
    const home = document.createElement('div');
    home.innerHTML = `
      <h1>Welcome to Our Restaurant</h1>
      <p>Enjoy delicious food and great ambiance!</p>
    `;
    return home;
  }
  