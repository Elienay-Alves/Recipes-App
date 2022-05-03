import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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
        onChange={ (e) => foodAllByCountry(e.target.value) }
      >
        <option data-testid="All-option" value="All">All</option>
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
          && foodsCountry.map(({ idMeal, strMealThumb, strMeal }, index) => (
            <section key={ index }>
              <Link
                to={ `/foods/${idMeal}` }
                data-testid={ `${index}-recipe-card` }
              >
                <img
                  data-testid={ `${index}-card-img` }
                  src={ strMealThumb }
                  alt=""
                />
                <p data-testid={ `${index}-card-name` }>
                  { strMeal }
                </p>
              </Link>
            </section>
          ))}
      <Footer />
    </>
  );
}

export default ExploreFoodsNationalities;
