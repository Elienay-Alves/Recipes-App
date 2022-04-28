import React from 'react';
import Header from '../components/Header';
import CardRecipes from '../components/CardRecipes';
import Footer from '../components/Footer';

function Foods() {
  return (
    <>
      <Header title="Foods" />
      <h1>Foods</h1>
      <CardRecipes />
      <Footer />
    </>
  );
}

export default Foods;
