import '@testing-library/jest-dom/extend-expect';
import fs from 'fs';
import path from 'path';
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

it('index.js maneja el click en div id="button"', () => {
  var file = fs.readFileSync(path.resolve(__dirname, './index.js'), 'utf8');
  const regex =
    /\$\('#button'\)\.click\((function)?[\s]*\(\)[\s]*(=>)?[\s]*{[\d\D\n]*}[\s\n]*\)/;
  expect(regex.test(file)).toBe(true);
});
