import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FavoritePokemons from '../pages/FavoritePokemons';

test('Testa o componente Favorite Pokémons', () => {
  render(
    <BrowserRouter>
      <FavoritePokemons />
    </BrowserRouter>,
  );

  const noPokemons = screen.getByText('No favorite pokemon found');
  expect(noPokemons).toBeInTheDocument();
});
