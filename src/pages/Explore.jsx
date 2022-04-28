import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Explore() {
  return (
    <>
      <Header title="Explore" />
      <main>
        <Link to="/explore/foods">
          <button
            type="button"
            data-testid="explore-foods"
          >
            Explore Foods
          </button>
        </Link>
        <Link to="/explore/drinks">
          <button
            type="button"
            data-testid="explore-drinks"
          >
            Explore Drinks
          </button>
        </Link>
      </main>
      <Footer />
    </>
  );
}

export default Explore;
