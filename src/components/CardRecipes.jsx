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
          let listRecipe = {};
          switch (pathname) {
          case '/foods':
            listRecipe = { thumb: recipe.strMealThumb,
              name: recipe.strMeal,
            };
            break;
          case '/drinks':
            listRecipe = { thumb: recipe.strDrinkThumb,
              name: recipe.strDrink,
            };
            break;
          default:
            break;
          }

          return (
            <section key={ index } data-testid={ `${index}-recipe-card` }>
              <h2 data-testid={ `${index}-card-name` }>
                { listRecipe.name }
              </h2>
              <img
                width="100px"
                height="100px"
                data-testid={ `${index}-card-img` }
                src={ listRecipe.thumb }
                alt=""
              />
            </section>);
        })}
    </main>
  );
}

export default CardRecipes;
