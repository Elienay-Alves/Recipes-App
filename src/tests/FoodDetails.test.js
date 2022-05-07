import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import FoodDetails from '../pages/FoodDetails';

describe('Testa o componente FoodDetails', () => {
  test('Se o componente possui um titulo', () => {
    renderWithRouter(<FoodDetails />);
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toBeInTheDocument();
  });
});
