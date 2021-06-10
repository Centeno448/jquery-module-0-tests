import '@testing-library/jest-dom/extend-expect';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

let dom;
let container;

beforeEach(() => {
  dom = new JSDOM(html, { runScripts: 'dangerously' });
  container = dom.window.document.body;
});

it('index.html tiene 1 form con name="listaCompras" | Asegúrate de renderizar 1 form con name="listaCompras" en index.html', () => {
  const form = container.querySelector('form');
  expect(form).not.toBeNull();
  expect(form.name).toBe('listaCompras');
});

it('index.html tiene 1 div con id="button" | Asegúrate de renderizar 1 div con id="button" en index.html', () => {
  const div = container.querySelector('div#button');
  expect(div).not.toBeNull();
});
