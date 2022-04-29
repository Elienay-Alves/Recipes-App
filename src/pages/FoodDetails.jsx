import React, { useState, useEffect } from 'react';
import DetailsHeader from '../components/DetailsHeader';
import Ingredients from '../components/Ingredients';

function FoodDetails() {
  const [meal, setMeal] = useState({});

  const fetchMeal = async () => {
    // 52771 id para teste
    const mealId = window.location.pathname.split('/')[2];
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    const response = await fetch(url);
    const data = await response.json();
    setMeal(data.meals[0]);
  };
  useEffect(() => {
    fetchMeal();
  }, []);

  return (
    <>
      <h1>FoodDetails</h1>
      <DetailsHeader meal={ meal } />
      <Ingredients meal={ meal } />
    </>
  );
}

export default FoodDetails;
