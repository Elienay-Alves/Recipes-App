import React, { useContext } from 'react';
import RecipeContext from '../context/RecipeContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExploreFoodsNationalities() {
  const { foodByNationalities, foodsCountry,
    foodAllByCountry } = useContext(RecipeContext);
  return (
    <>
      <Header title="Explore Nationalities" />
      <select
        data-testid="explore-by-nationality-dropdown"
        onClick={ (e) => foodAllByCountry(e.target.value) }
      >
        {
          foodByNationalities.map(({ strArea }) => (
            <option
              key={ strArea }
              data-testid={ `${strArea}-option` }
            >
              { strArea }
            </option>
          ))
        }
      </select>
      { foodsCountry[0]
        && foodsCountry.map((food, index) => (
          <section data-testid={ `${index}-recipe-card` } key={ index }>
            <img
              data-testid={ `${index}-card-img` }
              src={ food.strMealThumb }
              alt=""
            />
            <p data-testid={ `${index}-card-name` }>
              { food.strMeal }
            </p>
          </section>
        ))}
      <Footer />
    </>
  );
}

export default ExploreFoodsNationalities;
