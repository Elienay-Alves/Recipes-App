import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import Login from '../pages/Login';
import RecipeContext from '../context/RecipeContext';

describe('Testa o contexto', () => {
  test('Se o contexto é criado', () => {
    expect(typeof (RecipeContext)).toBe('object');
  });
});

describe('Testa o componente Login', () => {
  test('Se o componente login possui dois inputs e um botao', () => {
    renderWithRouter(<Login />);
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const button = screen.getByRole('button');
    const title = screen.getByRole('heading', { level: 1 });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});
