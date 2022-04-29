import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import RecipeContext from '../context/RecipeContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExploreDrinks() {
  const { idDrinkRandom } = useContext(RecipeContext);
  return (
    <>
      <Header title="Explore Drinks" />
      <main>
        <Link to="/explore/drinks/ingredients">
          <button
            type="button"
            data-testid="explore-by-ingredient"
          >
            By Ingredient
          </button>
        </Link>
        <Link to={ `/drinks/${idDrinkRandom}` }>
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

export default ExploreDrinks;
