import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom/';
import RecipeContext from '../context/RecipeContext';
import Header from '../components/Header';
import CardRecipes from '../components/CardRecipes';
import drinkCategoriesRequest from '../helpers/drinkCategoriesRequest';
import filterDrinkByCategory from '../helpers/filterDrinkByCategory';
import Footer from '../components/Footer';

function Drinks() {
  const { drinks, setDrinks, defaultDrinks,
    drinkRequest, setRecipes } = useContext(RecipeContext);
  const [categories, setCategories] = useState([]);

  const categoriesRequest = async () => {
    const request = await drinkCategoriesRequest();
    setCategories(request);
  };

  useEffect(() => {
    categoriesRequest();
  }, []);

  const handleButton = async (category) => {
    setRecipes([]);
    const requestFilteredDrink = await filterDrinkByCategory(category);
    if (drinks.length < 1) setDrinks(defaultDrinks);
    if (requestFilteredDrink[0].idDrink !== drinks[0].idDrink) {
      setDrinks(requestFilteredDrink);
    } else {
      setDrinks(defaultDrinks);
    }
  };

  return (
    <>
      <Header title="Drinks" />
      <div>
        { categories.map((category) => (
          <button
            key={ category.strCategory }
            type="button"
            data-testid={ `${category.strCategory}-category-filter` }
            onClick={ () => handleButton(category.strCategory) }
          >
            { category.strCategory }
          </button>
        ))}
        <button
          type="button"
          data-testid="All-category-filter"
          onClick={ drinkRequest }
        >
          All
        </button>
      </div>
      <CardRecipes />
      { drinks.map((drink, index) => (
        <Link
          key={ drink.idDrink }
          data-testid={ `${index}-recipe-card` }
          to={ `/drinks/${drink.idDrink}` }
        >
          <div>
            <img
              src={ drink.strDrinkThumb }
              alt={ drink.strDrink }
              data-testid={ `${index}-card-img` }
            />
            <h3 data-testid={ `${index}-card-name` }>{ drink.strDrink }</h3>
          </div>
        </Link>
      )) }
      <Footer />
    </>
  );
}

export default Drinks;
