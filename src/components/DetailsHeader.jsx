import React from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import whiteHeart from '../images/whiteHeartIcon.svg';
// import blackHeart from '../images/blackHeartIcon.svg';

function DetailsHeader({ meal = {}, drink = {} }) {
  const isMeal = Object.keys(meal).length > 0;
  console.log(drink);
  return (
    <section>
      <img
        src={ isMeal ? meal.strMealThumb : drink.strDrinkThumb }
        alt={ isMeal ? 'meal thumb' : 'drink thumb' }
        width="100%"
        data-testid="recipe-photo"
      />
      <div className="d-flex justify-content-between">
        <span data-testid="recipe-title">
          { isMeal ? meal.strMeal : drink.strDrink }
        </span>
        <div>
          <button
            type="button"
            // onClick={ handleClickProfileBtn }
          >
            <img
              src={ shareIcon }
              alt="share icon"
              data-testid="share-btn"
            />
          </button>
          <button
            type="button"
            // onClick={ handleClickProfileBtn }
          >
            <img
              src={ whiteHeart }
              alt="share icon"
              data-testid="favorite-btn"
            />
          </button>
        </div>
      </div>
      <span data-testid="recipe-category">
        { isMeal ? meal.strCategory : drink.strCategory }
      </span>
    </section>
  );
}

DetailsHeader.propTypes = {
  meal: PropTypes.objectOf(PropTypes.any).isRequired,
  drink: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default DetailsHeader;
