import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import FoodDetails from '../pages/FoodDetails';
import DetailsHeader from '../components/DetailsHeader';
import DetailsPageBtn from '../components/DetailsPageBtn';
import App from '../App';

const mockkFavorite = [{
  alcoholicOrNot: '',
  category: 'Side',
  idMeal: 52977,
  strMealThumb: 'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg',
  strMeal: 'Corba',
  nationality: 'Turkish',
  type: 'food',
},
{
  alcoholicOrNot: 'Alcoholic',
  category: 'Cocktail',
  id: '17222',
  image: 'https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg',
  name: 'A1',
  nationality: '',
  type: 'drink',
}];

describe('Testa o componente FoodDetails', () => {
  beforeEach(() => {
    const mockFavorite = [{
      alcoholicOrNot: '',
      category: 'Side',
      id: 52977,
      image: 'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg',
      name: 'Corba',
      nationality: 'Turkish',
      type: 'food',
    },
    {
      alcoholicOrNot: 'Alcoholic',
      category: 'Cocktail',
      id: '17222',
      image: 'https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg',
      name: 'A1',
      nationality: '',
      type: 'drink',
    }];
    global.localStorage.setItem('favoriteRecipes', JSON.stringify(mockFavorite));
  });

  test('Se o componente possui um titulo', () => {
    renderWithRouter(<FoodDetails />);
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toBeInTheDocument();
  });

  test('Se o componente DetailsHeader possui os elementos esperados', () => {
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: () => {},
      },
    });
    renderWithRouter(<DetailsHeader />);
    expect(localStorage).toHaveLength(1);
    const img = screen.getByTestId('recipe-photo');
    const shareBtn = screen.getByTestId('share-btn');
    userEvent.click(shareBtn);
    const copied = screen.getByText(/Link copied!/i);
    expect(img && copied).toBeInTheDocument();
  });

  test('Se o componente DetailsPageBtn possui os elementos esperados', () => {
    jest.spyOn(Object.getPrototypeOf(window.localStorage), 'getItem');
    Object.setPrototypeOf(window.localStorage.getItem, jest.fn());
    const { customHistory } = renderWithRouter(<DetailsPageBtn />);
    customHistory.push('/drinks');
    const startRecipe = screen.getByText(/Start Recipe/i);
    expect(startRecipe).toBeInTheDocument();
    userEvent.click(startRecipe);
    expect(customHistory.location.pathname).toBe('/drinks/undefined/in-progress');
    expect(localStorage.getItem).toHaveBeenCalled();
  });

  test('Se o componente DetailsPageBtn renderiza as instruções', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(mockkFavorite),
    }));
    renderWithRouter(<App />);
    const emailInput = screen.getByTestId('email-input');
    const email = 'trybe@trybe.com';
    const passwordInput = screen.getByTestId('password-input');
    const password = '1234567';
    const button = screen.getByTestId('login-submit-btn');
    userEvent.type(passwordInput, password);
    userEvent.type(emailInput, email);
    userEvent.click(button);
    const corba = await screen.findByText(/Corba/i);
    expect(corba).toBeInTheDocument();
  });
});
