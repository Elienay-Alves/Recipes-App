import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import RecipeContext from '../context/RecipeContext';

function CardRecipes() {
  const { recipes } = useContext(RecipeContext);
  const history = useHistory();
  const { pathname } = history.location;
  return (
    <main>
      { recipes
        && recipes.map((recipe, index) => {
          let listRecipes = {};
          switch (pathname) {
          case '/foods':
            listRecipes = { thumb: recipe.strMealThumb,
              name: recipe.strMeal,
            };
            break;
          case '/drinks':
            listRecipes = { thumb: recipe.strDrinkThumb,
              name: recipe.strDrink,
            };
            break;
          default:
            break;
          }

          return (
            <section key={ index } data-testid={ `${index}-recipe-card` }>
              <p data-testid={ `${index}-card-name` }>
                { listRecipes.name }
              </p>
              <img
                width="100px"
                height="100px"
                data-testid={ `${index}-card-img` }
                src={ listRecipes.thumb }
                alt={ listRecipes.name }
              />
            </section>);
        })}
    </main>
  );
}

export default CardRecipes;
