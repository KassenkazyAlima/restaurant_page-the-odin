export default function loadContact() {
    const contact = document.createElement('div');
    contact.innerHTML = `
      <h1>Contact Us</h1>
      <p>Email: contact@restaurant.com</p>
      <p>Phone: +123-456-7890</p>
    `;
    return contact;
  }
  