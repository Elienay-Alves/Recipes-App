import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import foodApiRequest from '../helpers/foodApiRequest';
import foodCategoriesRequest from '../helpers/foodCategoriesRequest';
import filterFoodByCategory from '../helpers/filterFoodByCategory';

function Foods() {
  const [foods, setFoods] = useState([]);
  const [categories, setCategories] = useState([]);
  const [defaultFoods, setDefaultFoods] = useState([]);

  const categoriesRequest = async () => {
    const request = await foodCategoriesRequest();
    setCategories(request);
  };

  const foodRequest = async () => {
    const request = await foodApiRequest();
    setFoods(request);
    setDefaultFoods(request);
  };

  useEffect(() => {
    foodRequest();
    categoriesRequest();
  }, []);

  const handleButton = async (category) => {
    const requestFilteredFood = await filterFoodByCategory(category);
    if (requestFilteredFood[0].idMeal !== foods[0].idMeal) {
      setFoods(requestFilteredFood);
    } else {
      setFoods(defaultFoods);
    }
  };

  return (
    <>
      <Header title="Foods" />
      <h1>Foods</h1>
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
          onClick={ foodRequest }
        >
          All
        </button>
      </div>
      { foods.map((food, index) => (
        <Link
          key={ food.idMeal }
          data-testid={ `${index}-recipe-card` }
          to={ `/foods/${food.idMeal}` }
        >
          <div>
            <img
              src={ food.strMealThumb }
              alt={ food.strMeal }
              data-testid={ `${index}-card-img` }
            />
            <h3 data-testid={ `${index}-card-name` }>{ food.strMeal }</h3>
          </div>
        </Link>
      )) }
    </>
  );
}

export default Foods;
