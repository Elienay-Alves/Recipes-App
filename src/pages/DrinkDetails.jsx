import React, { useState, useEffect } from 'react';
import DetailsHeader from '../components/DetailsHeader';

function DrinkDetails() {
  const [drink, setDrink] = useState({});

  const fetchDrink = async () => {
    // 178319 drinkId para teste
    const drinkId = window.location.pathname.split('/')[2];
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;
    const response = await fetch(url);
    const data = await response.json();
    setDrink(data.drinks[0]);
  };
  useEffect(() => {
    fetchDrink();
  }, []);

  return (
    <>
      <h1>DrinkDetails</h1>
      <DetailsHeader drink={ drink } />
    </>
  );
}

export default DrinkDetails;
