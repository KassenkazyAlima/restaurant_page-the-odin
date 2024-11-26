document.getElementById('home').addEventListener('click', () => {
  document.getElementById('content').innerHTML = `
      <div>
          <h1>Welcome to Our Restaurant</h1>
          <p>Enjoy delicious food and great ambiance!</p>
          <img src="https://via.placeholder.com/600x400" alt="Restaurant" style="width: 80%; border-radius: 10px;">
      </div>
  `;
});

document.getElementById('menu').addEventListener('click', () => {
  document.getElementById('content').innerHTML = `
      <div>
          <h1>Our Menu</h1>
          <p>Delicious dishes crafted with love and care.</p>
          <ul>
              <li>Pizza</li>
              <li>Pasta</li>
              <li>Salad</li>
              <li>Desserts</li>
          </ul>
      </div>
  `;
});

document.getElementById('contact').addEventListener('click', () => {
  document.getElementById('content').innerHTML = `
      <div>
          <h1>Contact Us</h1>
          <p>Email: contact@ourrestaurant.com</p>
          <p>Phone: +123 456 7890</p>
      </div>
  `;
});

// Load Home page by default
document.getElementById('home').click();
