import React, { useState, useEffect, useContext } from 'react';
import DetailsHeader from '../components/DetailsHeader';
import Ingredients from '../components/Ingredients';
import Instructions from '../components/Instructions';
import Recommended from '../components/Recommended';
import DetailsPageBtn from '../components/DetailsPageBtn';
import RecipeContext from '../context/RecipeContext';

function FoodDetails() {
  const [meal, setMeal] = useState({});
  const { setWhatToFetch, recipe } = useContext(RecipeContext);
  console.log(meal);
  useEffect(() => {
    setWhatToFetch('meal');
    setMeal(recipe);
  }, [recipe]);

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
          <DetailsPageBtn meal={ meal } />
        </>
      ) : ''}
    </>
  );
}

export default FoodDetails;
