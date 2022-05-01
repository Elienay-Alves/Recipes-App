import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const INGREDIENTS_NUMBER = 20;

function IngredientsInProgress({ meal = {}, drink = {} }) {
  const [ingredientsInProgress, setIngredientsInProgress] = useState([]);

  const getIngredientsInProgress = () => {
    const isMeal = Object.keys(meal).length > 0;
    const isDrink = Object.keys(drink).length > 0;
    if (isMeal || isDrink) {
      const ingredientsInProgressArr = [];
      for (let index = 0; index < INGREDIENTS_NUMBER; index += 1) {
        if (meal[`strIngredient${index + 1}`]) {
          const ingredientStr = meal[`strIngredient${index + 1}`];
          const measureStr = meal[`strMeasure${index + 1}`];
          ingredientsInProgressArr.push(`${ingredientStr} - ${measureStr}`);
        }
        if (drink[`strIngredient${index + 1}`]) {
          const ingredientStr = drink[`strIngredient${index + 1}`];
          const measureStr = drink[`strMeasure${index + 1}`] || '';
          ingredientsInProgressArr.push(`${ingredientStr} - ${measureStr}`);
        }
      }
      setIngredientsInProgress(ingredientsInProgressArr);
    }
  };

  useEffect(() => {
    getIngredientsInProgress();
  }, []);

  return (

    <>
      <h3>
        Ingredients In Progress
      </h3>
      <ul>
        {ingredientsInProgress.map((ingredient, index) => (
          <li key={ index } data-testid={ `${index + 1}-ingredient-step` }>
            <input
              type="checkbox"
            />
            {ingredient}
          </li>
        ))}
      </ul>
    </>
  );
}

IngredientsInProgress.propTypes = {
  meal: PropTypes.objectOf(PropTypes.any),
  drink: PropTypes.objectOf(PropTypes.any),
};

IngredientsInProgress.defaultProps = {
  meal: {},
  drink: {},
};

export default IngredientsInProgress;
