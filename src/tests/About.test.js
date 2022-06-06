import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import About from '../pages/About';

test('Testa componente About', () => {
  render(
    <BrowserRouter>
      <About />
    </BrowserRouter>,
  );

  const headingEl = screen.getByRole('heading', { name: /About Pokédex/i, level: 2 });
  expect(headingEl).toBeInTheDocument();

  const paragraphs = screen.getAllByText(/Pokémons/i);
  expect(paragraphs.length).toBe(2);

  const imgEl = screen.getByRole('img', { name: /Pokédex/i });
  const urlEl = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
  expect(imgEl).toBeInTheDocument();
  expect(imgEl.src).toBe(urlEl);
});
