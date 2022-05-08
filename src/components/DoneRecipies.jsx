import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RecipeContext from '../context/RecipeContext';
import shareIcon from '../images/shareIcon.svg';

function DoneRecipes() {
  const { doneRecipes } = useContext(RecipeContext);
  const [copyAlert, setCopyAlert] = useState('');
  const [recipesFilter, setrecipesFilter] = useState([]);

  useEffect(() => {
    setrecipesFilter(doneRecipes);
  }, []);

  const filters = ({ target }) => {
    let filter = '';

    if (target.name === 'foods') {
      filter = doneRecipes.filter((value) => value.type === 'foods');
      setrecipesFilter(filter);
    } else if (target.name === 'drinks') {
      filter = doneRecipes.filter((value) => value.type === 'drinks');
      setrecipesFilter(filter);
    } else if (target.name === 'all') {
      filter = doneRecipes;
      setrecipesFilter(filter);
    } else {
      filter = '';
    }
  };

  const share = async ({ target }) => {
    const { id } = target;
    await navigator.clipboard.writeText(`http://localhost:3000/foods/${id}`);
    setCopyAlert('Link copied!');
  };

  return (
    <div>
      <button
        type="button"
        data-testid="filter-by-all-btn"
        name="all"
        onClick={ filters }
      >
        All
      </button>

      <button
        type="button"
        data-testid="filter-by-food-btn"
        name="foods"
        onClick={ filters }
      >
        Food
      </button>

      <button
        type="button"
        data-testid="filter-by-drink-btn"
        name="drinks"
        onClick={ filters }
      >
        Drinks
      </button>

      { recipesFilter.map((value, index) => (
        <div key={ value.id }>
          <Link to={ `/${value.type}/${value.id}` }>
            <img
              src={ value.image }
              alt={ value.name }
              data-testid={ `${index}-horizontal-image` }
            />
          </Link>

          <p
            data-testid={ `${index}-horizontal-top-text` }
          >
            { value.category }
          </p>

          <Link to={ `/${value.type}/${value.id}` }>
            <p
              data-testid={ `${index}-horizontal-name` }
            >
              {value.name}
            </p>
          </Link>

          <p
            data-testid={ `${index}-horizontal-done-date` }
          >
            {value.doneDate}
          </p>

          <button
            type="button"
            onClick={ (event) => {
              share(event);
              global.alert('Link copied!');
            } }
          >
            <img
              data-testid={ `${index}-horizontal-share-btn` }
              src={ shareIcon }
              alt="profile"
              id={ value.id }
            />
          </button>

          {value.tags.map((val, ind) => (
            <p
              data-testid={ `${index}-${val}-horizontal-tag` }
              key={ ind }
            >
              {val}
            </p>
          ))}
          {copyAlert}
        </div>
      )) }
    </div>
  );
}

export default DoneRecipes;
