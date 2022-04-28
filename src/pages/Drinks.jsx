import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/';
import Header from '../components/Header';
import drinkApiRequest from '../helpers/drinkApiRequest';
import drinkCategoriesRequest from '../helpers/drinkCategoriesRequest';
import filterDrinkByCategory from '../helpers/filterDrinkByCategory';
import Footer from '../components/Footer';

function Drinks() {
  const [drinks, setDrinks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [defaultDrinks, setDefaultDrinks] = useState([]);

  const drinkRequest = async () => {
    const request = await drinkApiRequest();
    setDrinks(request);
    setDefaultDrinks(request);
  };

  const categoriesRequest = async () => {
    const request = await drinkCategoriesRequest();
    setCategories(request);
  };

  useEffect(() => {
    drinkRequest();
    categoriesRequest();
  }, []);

  const handleButton = async (category) => {
    const requestFilteredDrink = await filterDrinkByCategory(category);
    if (requestFilteredDrink[0].idDrink !== drinks[0].idDrink) {
      setDrinks(requestFilteredDrink);
    } else {
      setDrinks(defaultDrinks);
    }
  };

  return (
    <>
      <Header title="Drinks" />
      <h1>Drink</h1>
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
