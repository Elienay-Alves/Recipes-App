import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('Farewell, front-end', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/TRYBE/i);
  expect(linkElement).toBeInTheDocument();
});
