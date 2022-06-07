import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Pokedex from '../pages/Pokedex';
import pokemons from '../data';

test('Testa o componente Pokedex', () => {
  const isPokemonFavoriteById = {};
  render(
    <BrowserRouter>
      <Pokedex
        pokemons={ pokemons }
        isPokemonFavoriteById={ isPokemonFavoriteById }
      />
    </BrowserRouter>,
  );

  const headingEl = screen.getByRole('heading', {
    name: /Encountered pokémons/i, level: 2 });
  expect(headingEl).toBeInTheDocument();

  const nextButtonEl = screen.getByRole('button', { name: /Próximo pokémon/i });
  expect(nextButtonEl).toBeInTheDocument();

  userEvent.click(nextButtonEl);
  const nextPokemon = screen.getByText(/charmander/i);
  expect(nextPokemon).toBeInTheDocument();

  const numberImages = screen.getAllByRole('img');
  expect(numberImages.length).toBe(1);

  const numberButtons = screen.getAllByTestId('pokemon-type-button');
  const types = 7;
  expect(numberButtons.length).toBe(types);

  const buttonAll = screen.getByRole('button', { name: /All/i });
  expect(buttonAll).toBeInTheDocument();
  userEvent.click(buttonAll);
  const firstPokemon = screen.getByText(/pikachu/i);
  expect(firstPokemon).toBeInTheDocument();

  const typeButton = screen.getAllByRole('button', { name: /Psychic/i });
  expect(typeButton.length).toBe(1);
});
