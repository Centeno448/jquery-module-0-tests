import '@testing-library/jest-dom/extend-expect';
const $ = require('jquery');

beforeAll(() => {
  // Set up our document body
  document.body.innerHTML = `
    <div class="container">
      <h2>Bienvenido al curso de jQuery</h2>
      <form name="listaCompras"></form>

      <div id="button">Añadir Item</div>
    </div>
    `;
  require('./index');
});

it('runs', () => {
  expect(true).toBe(true);
});
