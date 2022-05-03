import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import CardRecipes from '../components/CardRecipes';
import filterFoodByCategory from '../helpers/filterFoodByCategory';
import foodCategoriesRequest from '../helpers/foodCategoriesRequest';
import RecipeContext from '../context/RecipeContext';
import Footer from '../components/Footer';

function Foods() {
  const { foods, setFoods, defaultFoods,
    foodRequest, setRecipes } = useContext(RecipeContext);
  const [categories, setCategories] = useState([]);

  const categoriesRequest = async () => {
    const request = await foodCategoriesRequest();
    setCategories(request);
  };

  useEffect(() => {
    categoriesRequest();
  }, []);

  const handleButton = async (category) => {
    setRecipes([]);
    const requestFilteredFood = await filterFoodByCategory(category);
    if (foods.length < 1) setFoods(defaultFoods);
    if (requestFilteredFood[0].idMeal !== foods[0].idMeal) {
      setFoods(requestFilteredFood);
    } else {
      setFoods(defaultFoods);
    }
  };

  return (
    <>
      <Header title="Foods" />
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
      <CardRecipes />
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
            <p data-testid={ `${index}-card-name` }>{ food.strMeal }</p>
          </div>
        </Link>
      )) }
      <Footer />
    </>
  );
}

export default Foods;
