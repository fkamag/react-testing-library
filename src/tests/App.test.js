import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe('Testa se o topo da aplicação contém um conjunto de links de navegação', () => {
  test('Testa o componente App.js', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    const homeEl = screen.getByRole('link', { name: /home/i });
    expect(homeEl).toBeInTheDocument();

    const aboutEl = screen.getByRole('link', { name: /about/i });
    expect(aboutEl).toBeInTheDocument();

    const favoriteEl = screen.getByRole('link', { name: /Favorite Pokémons/i });
    expect(favoriteEl).toBeInTheDocument();
  });
});
