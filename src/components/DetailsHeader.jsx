import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FavoriteBtn from './FavoriteBtn';
import shareIcon from '../images/shareIcon.svg';
import whiteHeart from '../images/whiteHeartIcon.svg';
import blackHeart from '../images/blackHeartIcon.svg';

const FIVE = 5;
function DetailsHeader({ meal = {}, drink = {} }) {
  const [copiedVisible, setCopiedVisible] = useState(false);
  const [favoriteSrc, setFavoriteSrc] = useState(whiteHeart);
  const isMeal = Object.keys(meal).length > 0;

  useEffect(() => {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    if (favoriteRecipes.some((favRecipe) => favRecipe.id === meal.idMeal
    || favRecipe.id === drink.idDrink)) {
      setFavoriteSrc(blackHeart);
    }
  }, []);

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
            onClick={ () => {
              navigator.clipboard.writeText(window.location.href
                .split('/').slice(0, FIVE).join('/'));
              setCopiedVisible(true);
            } }
          >
            <img
              src={ shareIcon }
              alt="share icon"
              data-testid="share-btn"
            />
          </button>
          {isMeal ? <FavoriteBtn
            src={ favoriteSrc }
            meal={ meal }
            setFavoriteSrc={ setFavoriteSrc }
          />
            : (
              <FavoriteBtn
                src={ favoriteSrc }
                drink={ drink }
                setFavoriteSrc={ setFavoriteSrc }
              />)}
        </div>
      </div>
      {copiedVisible ? <p>Link copied!</p> : ''}
      <span data-testid="recipe-category">
        { isMeal ? meal.strCategory : drink.strAlcoholic }
      </span>
    </section>
  );
}

DetailsHeader.propTypes = {
  meal: PropTypes.objectOf(PropTypes.any),
  drink: PropTypes.objectOf(PropTypes.any),
};

DetailsHeader.defaultProps = {
  meal: {},
  drink: {},
};

export default DetailsHeader;
