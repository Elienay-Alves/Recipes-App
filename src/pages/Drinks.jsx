import React from 'react';
import Header from '../components/Header';
import CardRecipes from '../components/CardRecipes';
import Footer from '../components/Footer';

function Drinks() {
  return (
    <>
      <Header title="Drinks" />
      <h1>Drink</h1>
      <CardRecipes />
      <Footer />
    </>
  );
}

export default Drinks;
