import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RecipeContext from './RecipeContext';

function RecipeProvider({ children }) {
  const [recipe, setRecipe] = useState({});
  const [whatToFetch, setWhatToFetch] = useState('');

  const fetchMeal = async () => {
    // 52771 id para teste
    const mealId = window.location.pathname.split('/')[2];
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
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

  const contextValue = {
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
