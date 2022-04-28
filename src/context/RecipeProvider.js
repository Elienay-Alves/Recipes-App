import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import foodApiRequest from '../helpers/foodApiRequest';
import drinkApiRequest from '../helpers/drinkApiRequest';
import RecipeContext from './RecipeContext';

function RecipeProvider({ children }) {
  const [recipes, setRecipes] = useState(null);
  const [foods, setFoods] = useState([]);
  const [defaultFoods, setDefaultFoods] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [defaultDrinks, setDefaultDrinks] = useState([]);

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

  useEffect(() => {
    foodRequest();
    drinkRequest();
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
