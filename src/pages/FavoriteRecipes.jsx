import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function FavoriteRecipes() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [filter, setFilter] = useState('All');
  useEffect(() => {
    setFavoriteRecipes(JSON.parse(localStorage.getItem('favoriteRecipes')) || []);
  }, []);

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
    const url = `localhost:3000/${type}/${id}`;
    navigator.clipboard.writeText(url);
  };
  const renderFavoriteFood = (recipe) => (
    <div key={ recipe.id }>
      <img src={ recipe.image } alt={ recipe.name } />
      <p>{`${recipe.nationality} - ${recipe.type}`}</p>
      <h3>{ recipe.name }</h3>
      <button
        type="button"
        onClick={ () => { handleShare('foods', recipe.id); } }
      >
        <img src={ shareIcon } alt="share icon" />
      </button>
      <button
        type="button"
        onClick={ () => handleFavorites(recipe.id) }
      >
        <img src={ blackHeartIcon } alt="favorite icon" />
      </button>
    </div>
  );
  const renderFavoriteDrink = (recipe) => (
    <div key={ recipe.id }>
      <img src={ recipe.image } alt={ recipe.name } />
      <p>{ recipe.alcoholicOrNot}</p>
      <h3>{ recipe.name }</h3>
      <button
        type="button"
        onClick={ () => { handleShare('drinks', recipe.id); } }
      >
        <img src={ shareIcon } alt="share icon" />
      </button>
      <button
        type="button"
        onClick={ () => handleFavorites(recipe.id) }
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
        >
          Food
        </button>
        <button
          type="button"
          onClick={ () => handleFilter('drink') }
        >
          Drinks
        </button>
        <button
          type="button"
          onClick={ () => handleFilter('All') }
        >
          All
        </button>
      </div>
      <div>
        {favoriteRecipes.map((recipe) => (
          recipe.idDrink
            ? renderFavoriteDrink(recipe)
            : renderFavoriteFood(recipe)
        ))}
      </div>
    </>
  );
}

export default FavoriteRecipes;
