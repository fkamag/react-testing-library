import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound';

test('Testa componente NotFound', () => {
  render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>,
  );

  const altImg = 'Pikachu crying because the page requested was not found';
  const notFoundEl = screen.getByRole('heading', {
    name: /Page requested not found/i,
    level: 2 });
  expect(notFoundEl).toBeInTheDocument();

  const imgNotFound = screen.getByRole('img', { name: altImg });
  expect(imgNotFound).toBeInTheDocument();

  const urlImgNotFound = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
  expect(imgNotFound.src).toBe(urlImgNotFound);
});
