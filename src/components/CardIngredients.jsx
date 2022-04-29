import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import RecipeContext from '../context/RecipeContext';

function CardIngredients() {
  const { foodIngredientsList, drinkIngredientsList } = useContext(RecipeContext);
  const history = useHistory();
  const { pathname } = history.location;
  return (
    <main>
      { pathname === '/explore/foods/ingredients'
        ? foodIngredientsList.map(({ strIngredient }, index) => (
          <section key={ index } data-testid={ `${index}-ingredient-card` }>
            <Link to="/foods">
              <img
                data-testid={ `${index}-card-img` }
                src={ `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png` }
                alt={ strIngredient }
              />
              <h1 data-testid={ `${index}-card-name` }>
                { strIngredient }
              </h1>
            </Link>
          </section>
        )) : (
          drinkIngredientsList.map(({ strIngredient1 }, index) => (
            <section key={ index } data-testid={ `${index}-ingredient-card` }>
              <Link to="/drinks">
                <img
                  data-testid={ `${index}-card-img` }
                  src={ `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png` }
                  alt={ strIngredient1 }
                />
                <h1 data-testid={ `${index}-card-name` }>
                  { strIngredient1 }
                </h1>
              </Link>
            </section>
          ))
        )}
    </main>
  );
}

export default CardIngredients;
