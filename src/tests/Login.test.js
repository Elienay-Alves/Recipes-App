import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import Login from '../pages/Login';

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

  test('Testa se é possível escrever no input-email', () => {
    renderWithRouter(<Login />);
    const emailInput = screen.getByTestId('email-input');
    const email = 'trybe@trybe.com';
    userEvent.type(emailInput, email);
    expect(emailInput.value).toBe(email);
  });

  test('Testa se é possível escrever no input-password', () => {
    renderWithRouter(<Login />);
    const passwordInput = screen.getByTestId('password-input');
    const password = '123456';
    userEvent.type(passwordInput, password);
    expect(passwordInput.value).toBe(password);
  });

  test('Testa se a função handleButton é chamada', () => {
    const { customHistory } = renderWithRouter(<Login />);
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(customHistory.location.pathname).toBe('/foods');
  });
});
