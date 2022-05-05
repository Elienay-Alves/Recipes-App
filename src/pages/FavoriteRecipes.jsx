import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function FavoriteRecipes() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [filter, setFilter] = useState('All');
  useEffect(() => {
    setFavoriteRecipes(JSON.parse(localStorage.getItem('favoriteRecipes')) || []);
  }, []);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (filter === 'food') {
      const recipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
      const filterRecipes = recipes.filter((recipe) => recipe.type === 'food');
      setFavoriteRecipes(filterRecipes);
    } else if (filter === 'drink') {
      const recipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
      const filterRecipes = recipes.filter((recipe) => recipe.type === 'drink');
      setFavoriteRecipes(filterRecipes);
    } else {
      setFavoriteRecipes(JSON.parse(localStorage.getItem('favoriteRecipes')) || []);
    }
  }, [filter]);

  const handleFilter = (filterBy) => {
    setFilter(filterBy);
  };

  const handleFavorites = (id) => {
    const recipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    const newRecipes = recipes.filter((recipe) => recipe.id !== id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newRecipes));
    setFavoriteRecipes(newRecipes);
  };

  const handleShare = (type, id) => {
    const url = `http://localhost:3000/${type}/${id}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
  };
  const renderFavoriteFood = (recipe, index) => (
    <div key={ recipe.id }>
      <Link to={ `/foods/${recipe.id}` }>
        <img
          src={ recipe.image }
          alt={ recipe.name }
          data-testid={ `${index}-horizontal-image` }
        />
        <p
          data-testid={ `${index}-horizontal-top-text` }
        >
          {`${recipe.nationality} - ${recipe.category}`}
        </p>
        <h3 data-testid={ `${index}-horizontal-name` }>{ recipe.name }</h3>
      </Link>
      <button
        type="button"
        onClick={ () => { handleShare('foods', recipe.id); } }
        data-testid={ `${index}-horizontal-share-btn` }
        src={ shareIcon }
      >
        <img src={ shareIcon } alt="share icon" />
      </button>
      { copied && <p>Link copied!</p> }
      <button
        type="button"
        onClick={ () => handleFavorites(recipe.id) }
        data-testid={ `${index}-horizontal-favorite-btn` }
        src={ blackHeartIcon }
      >
        <img src={ blackHeartIcon } alt="favorite icon" />
      </button>
    </div>
  );
  const renderFavoriteDrink = (recipe, index) => (
    <div key={ recipe.id }>
      <Link to={ `/drinks/${recipe.id}` }>
        <img
          src={ recipe.image }
          alt={ recipe.name }
          data-testid={ `${index}-horizontal-image` }
        />
        <p data-testid={ `${index}-horizontal-top-text` }>{ recipe.alcoholicOrNot}</p>
        <h3 data-testid={ `${index}-horizontal-name` }>{ recipe.name }</h3>
      </Link>
      <button
        type="button"
        onClick={ () => { handleShare('drinks', recipe.id); } }
        data-testid={ `${index}-horizontal-share-btn` }
        src={ shareIcon }
      >
        <img src={ shareIcon } alt="share icon" />
      </button>
      { copied && <p>Link copied!</p> }
      <button
        type="button"
        onClick={ () => handleFavorites(recipe.id) }
        data-testid={ `${index}-horizontal-favorite-btn` }
        src={ blackHeartIcon }
      >
        <img src={ blackHeartIcon } alt="favorite icon" />
      </button>
    </div>
  );

  return (
    <>
      <Header title="Favorite Recipes" />
      <div>
        <button
          type="button"
          onClick={ () => handleFilter('food') }
          data-testid="filter-by-food-btn"
        >
          Food
        </button>
        <button
          type="button"
          onClick={ () => handleFilter('drink') }
          data-testid="filter-by-drink-btn"
        >
          Drinks
        </button>
        <button
          type="button"
          onClick={ () => handleFilter('All') }
          data-testid="filter-by-all-btn"
        >
          All
        </button>
      </div>
      <div>
        {favoriteRecipes.map((recipe, index) => (
          recipe.type === 'drink'
            ? renderFavoriteDrink(recipe, index)
            : renderFavoriteFood(recipe, index)
        ))}
      </div>
    </>
  );
}

export default FavoriteRecipes;
