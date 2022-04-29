import React from 'react';
import PropTypes from 'prop-types';

function Instructions({ meal = {}, drink = {} }) {
  const isMeal = Object.keys(meal).length > 0;
  return (
    <>
      <h1>
        Instructions
      </h1>
      <p data-testid="instructions">
        {isMeal ? meal.strInstructions : drink.strInstructions }
      </p>
    </>
  );
}

Instructions.propTypes = {
  meal: PropTypes.objectOf(PropTypes.any),
  drink: PropTypes.objectOf(PropTypes.any),
};

Instructions.defaultProps = {
  meal: {},
  drink: {},
};

export default Instructions;
