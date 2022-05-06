import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import DoneRecipes from '../pages/DoneRecipes';

describe('Testa o componente App', () => {
  test('Se o componente login possui dois inputs e um botao', () => {
    renderWithRouter(<DoneRecipes />);
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toBeInTheDocument();
  });
});
