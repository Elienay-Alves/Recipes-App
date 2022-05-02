import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import foodApiRequest from '../helpers/foodApiRequest';
import drinkApiRequest from '../helpers/drinkApiRequest';
import { foodRandom, drinkRandom } from '../helpers/foodAndDrinkRandomApi';
import { foodIngredients, drinkIngredients } from '../helpers/foodAndDrinkIngredientsApi';
import { foodNationalities, foodsByCountry } from '../helpers/foodNationalitiesRequest';
import RecipeContext from './RecipeContext';

const american = require('../helpers/mockAmerican');

function RecipeProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [foods, setFoods] = useState([]);
  const [defaultFoods, setDefaultFoods] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [defaultDrinks, setDefaultDrinks] = useState([]);
  const [idFoodRandom, setIdFoodRandom] = useState([]);
  const [idDrinkRandom, setIdDrinkRandom] = useState([]);
  const [foodIngredientsList, setFoodIngredientsList] = useState([]);
  const [drinkIngredientsList, setDrinkIngredientsList] = useState([]);
  const [foodByNationalities, setFoodByNationalities] = useState([]);
  const [foodsCountry, setFoodsCountry] = useState(american.meals);

  const drinkRequest = async () => {
    const request = await drinkApiRequest();
    setDrinks(request);
    setDefaultDrinks(request);
  };

  const foodRequest = async () => {
    const request = await foodApiRequest();
    setFoods(request);
    setDefaultFoods(request);
  };

  const foodAndDrinkRandomRequest = async () => {
    const responseFood = await foodRandom();
    const responseDrink = await drinkRandom();
    setIdFoodRandom(responseFood);
    setIdDrinkRandom(responseDrink);
  };

  const foodAndDrinkIngredientsRequest = async () => {
    const responseFood = await foodIngredients();
    const responseDrink = await drinkIngredients();
    setFoodIngredientsList(responseFood);
    setDrinkIngredientsList(responseDrink);
  };

  const foodNationalitiesRequest = async () => {
    const response = await foodNationalities();
    setFoodByNationalities(response);
  };

  const foodAllByCountry = async (value) => {
    const response = await foodsByCountry(value);
    setFoodsCountry(response);
  };

  useEffect(() => {
    foodRequest();
    drinkRequest();
    foodAndDrinkRandomRequest();
    foodAndDrinkIngredientsRequest();
    foodNationalitiesRequest();
  }, []);

  const contextValue = {
    recipes,
    setRecipes,
    foods,
    setFoods,
    defaultFoods,
    setDefaultFoods,
    foodRequest,
    drinks,
    setDrinks,
    defaultDrinks,
    setDefaultDrinks,
    drinkRequest,
    idFoodRandom,
    idDrinkRandom,
    foodIngredientsList,
    drinkIngredientsList,
    foodByNationalities,
    foodsCountry,
    foodAllByCountry,
  };

  return (
    <RecipeContext.Provider value={ contextValue }>
      { children }
    </RecipeContext.Provider>
  );
}

RecipeProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default RecipeProvider;
