import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import ExploreFoodsIngredients from '../pages/ExploreFoodsIngredients';

describe('Testa o componente App', () => {
  test('Se o componente login possui dois inputs e um botao', () => {
    renderWithRouter(<ExploreFoodsIngredients />);
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toBeInTheDocument();
  });
});
