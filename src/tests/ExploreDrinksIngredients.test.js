import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import ExploreDrinksIngredients from '../pages/ExploreDrinksIngredients';

describe('Testa o componente App', () => {
  test('Se o componente login possui dois inputs e um botao', () => {
    renderWithRouter(<ExploreDrinksIngredients />);
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toBeInTheDocument();
  });
});
