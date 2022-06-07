import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Pokemon from '../components/Pokemon';
import pokemon from '../data';

test('', () => {
  const isFavorite = true;
  render(
    <BrowserRouter>
      <Pokemon
        isFavorite={ isFavorite }
        pokemon={ pokemon[0] }
      />
    </BrowserRouter>,
  );

  const namePokemon = screen.getByText(/Pikachu/i);
  expect(namePokemon).toBeInTheDocument();

  const typePokemon = screen.getByText(/Electric/i);
  expect(typePokemon).toBeInTheDocument();

  const averagePokemon = screen.getByText(/Average weight: 6.0 kg/i);
  expect(averagePokemon).toBeInTheDocument();

  const urlImgPokemon = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png';
  const altPokemon = 'Pikachu sprite';
  const urlPokemon = screen.getByRole('img', { name: /Pikachu sprite/i });
  expect(urlPokemon.src).toBe(urlImgPokemon);
  expect(urlPokemon.alt).toBe(altPokemon);

  const linkDetails = screen.getByRole('link', { name: /More details/i });
  const linkExpected = 'http://localhost/pokemons/25';
  expect(linkDetails).toBeInTheDocument();
  expect(linkDetails.href).toBe(linkExpected);
  userEvent.click(linkDetails);

  const favoritePok = screen.getByRole('img', { name: /Pikachu is marked as favorite/i });
  const srcExpected = 'http://localhost/star-icon.svg';
  expect(favoritePok).toBeInTheDocument();
  expect(favoritePok.src).toBe(srcExpected);
});
