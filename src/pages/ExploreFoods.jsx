import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import RecipeContext from '../context/RecipeContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExploreFoods() {
  const { idFoodRandom } = useContext(RecipeContext);
  return (
    <>
      <Header title="Explore Foods" />
      <main>
        <Link to="/explore/foods/ingredients">
          <button
            type="button"
            data-testid="explore-by-ingredient"
          >
            By Ingredient
          </button>
        </Link>
        <Link to="/explore/foods/nationalities">
          <button
            type="button"
            data-testid="explore-by-nationality"
          >
            By Nationality
          </button>
        </Link>
        <Link to={ `/foods/${idFoodRandom}` }>
          <button
            type="button"
            data-testid="explore-surprise"
          >
            Surprise me!
          </button>
        </Link>
      </main>
      <Footer />
    </>
  );
}

export default ExploreFoods;
