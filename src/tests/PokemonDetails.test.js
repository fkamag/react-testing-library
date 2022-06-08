import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );

  const moreDetailsEl = screen.getByRole('link', { name: /More details/i });
  userEvent.click(moreDetailsEl);

  const titleMore = screen.getByRole('heading', { name: /Pikachu Details/i, level: 2 });
  expect(titleMore).toBeInTheDocument();
  const linkDetails = screen.queryByRole('link', { name: /More details/i });
  expect(linkDetails).not.toBeInTheDocument();

  const titleSummary = screen.queryByRole('heading', { name: /Summary/i });
  expect(titleSummary).toBeInTheDocument();

  const paragraphs = screen.getAllByText(/intelligent/i);
  expect(paragraphs.length).toBe(1);

  const gameLocations = screen.getByRole('heading',
    { name: /Game Locations of Pikachu/i, level: 2 });
  expect(gameLocations).toBeInTheDocument();

  const mapLocations = screen.getAllByRole('img', { name: /Pikachu location/i });
  expect(mapLocations.length).toBe(2);
  const textLocation = screen.getByText('Kanto Viridian Forest');
  expect(textLocation).toBeInTheDocument();
  const srcMapLocation = 'https://pwo-wiki.info/images/4/47/Viridian_Forest.gif';
  expect(mapLocations[0].src).toBe(srcMapLocation);

  const checkFavorite = screen.getByRole('checkbox', { name: /Pokémon favoritado?/i });
  expect(checkFavorite).toBeInTheDocument();
  userEvent.click(checkFavorite);
  const favoritePok = screen.getByRole('img', { name: /Pikachu is marked as favorite/i });
  expect(favoritePok).toBeInTheDocument();
  userEvent.click(checkFavorite);
  expect(favoritePok).not.toBeInTheDocument();
});
