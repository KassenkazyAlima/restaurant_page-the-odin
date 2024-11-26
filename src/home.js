export default function home() {
  const homeContent = document.createElement('div');
  homeContent.innerHTML = `
    <h1>Welcome to Our Restaurant</h1>
    <p>Experience the finest dining experience with our exquisite menu and exceptional service!</p>
  `;
  return homeContent;
}
  