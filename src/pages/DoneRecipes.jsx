import React from 'react';
import Header from '../components/Header';
import DoneRecipes from '../components/DoneRecipies';

function DoneRecipesPage() {
  return (
    <>
      <Header title="Done Recipes" />
      <DoneRecipes />
      <h1>DoneRecipes</h1>
    </>
  );
}

export default DoneRecipesPage;
