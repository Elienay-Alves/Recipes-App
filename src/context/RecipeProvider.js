import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import foodApiRequest from '../helpers/foodApiRequest';
import drinkApiRequest from '../helpers/drinkApiRequest';
import { foodRandom, drinkRandom } from '../helpers/foodAndDrinkRandomApi';
import { foodIngredients, drinkIngredients } from '../helpers/foodAndDrinkIngredientsApi';
import { foodNationalities, foodsByCountry } from '../helpers/foodNationalitiesRequest';
import RecipeContext from './RecipeContext';

function RecipeProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [recipe, setRecipe] = useState({});
  const [whatToFetch, setWhatToFetch] = useState('');
  const [foods, setFoods] = useState([]);
  const [defaultFoods, setDefaultFoods] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [defaultDrinks, setDefaultDrinks] = useState([]);
  const [idFoodRandom, setIdFoodRandom] = useState([]);
  const [idDrinkRandom, setIdDrinkRandom] = useState([]);
  const [foodIngredientsList, setFoodIngredientsList] = useState([]);
  const [drinkIngredientsList, setDrinkIngredientsList] = useState([]);
  const [foodByNationalities, setFoodByNationalities] = useState([]);
  const [foodsCountry, setFoodsCountry] = useState([]);

  const fetchMeal = async () => {
    // 52771 id para teste
    const mealId = window.location.pathname.split('/')[2];
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    setRecipe(data.meals[0]);
  };

  const fetchDrink = async () => {
    // 178319 drinkId para teste
    const drinkId = window.location.pathname.split('/')[2];
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;
    const response = await fetch(url);
    const data = await response.json();
    setRecipe(data.drinks[0]);
  };

  useEffect(() => {
    if (whatToFetch === 'meal') {
      fetchMeal();
    } else if (whatToFetch === 'drink') {
      fetchDrink();
    }
  }, [whatToFetch]);

  const drinkRequest = async () => {
    const request = await drinkApiRequest();
    setDrinks(request);
    setDefaultDrinks(request);
  };

  const foodRequest = async () => {
    const request = await foodApiRequest();
    setFoods(request);
    setFoodsCountry(request);
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
    if (value === 'All') {
      setFoodsCountry(foods);
    } else {
      const response = await foodsByCountry(value);
      setFoodsCountry(response);
    }
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
    setWhatToFetch,
    recipe,
  };

  return (
    <RecipeContext.Provider value={ contextValue }>
      { children }
    </RecipeContext.Provider>
  );
}

RecipeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipeProvider;
