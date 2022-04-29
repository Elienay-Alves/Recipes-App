import React, { useState, useEffect } from 'react';
import DetailsHeader from '../components/DetailsHeader';
import Ingredients from '../components/Ingredients';
import Instructions from '../components/Instructions';
import Recommended from '../components/Recommended';
import DetailsPageBtn from '../components/DetailsPageBtn';

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
      {Object.keys(meal).length > 0 ? (
        <>
          <DetailsHeader meal={ meal } />
          <Ingredients meal={ meal } />
          <Instructions meal={ meal } />
          <iframe
            width="560"
            height="315"
            src={ meal.strYoutube.replace('watch?v=', 'embed/') }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write;
            encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            data-testid="video"
          />
          <Recommended />
          <DetailsPageBtn />
        </>
      ) : ''}
    </>
  );
}

export default FoodDetails;
