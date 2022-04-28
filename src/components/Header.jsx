import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import requestFood from '../services/requestAPI';

function Header({ title }) {
  const history = useHistory();
  const [searchBtnVisible, setSearchBtnVisible] = useState(false);
  const [radioValue, setRadioValue] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const handleClickProfileBtn = () => {
    history.push('/profile');
  };

  const handleClickSearchBtn = () => {
    setSearchBtnVisible(!searchBtnVisible);
  };

  const searchFood = async (radio, search) => {
    const { pathname } = history.location;
    if (radio === 'First-Letter' && search.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    } else {
      const responseFoodOrDrink = await requestFood(pathname, radio, search);
      console.log(responseFoodOrDrink);
      if (pathname === '/foods' && responseFoodOrDrink.length === 1) {
        history.push(`foods/${responseFoodOrDrink[0].idMeal}`);
      }
      if (pathname === '/drinks' && responseFoodOrDrink.length === 1) {
        history.push(`drinks/${responseFoodOrDrink[0].idDrink}`);
      }
    }
    setSearchInput('');
  };

  return (
    <header className="d-flex flex-column">
      <section className="d-flex justify-content-between">
        <button
          type="button"
          onClick={ handleClickProfileBtn }
        >
          <img
            src={ profileIcon }
            alt="profile icon"
            data-testid="profile-top-btn"
          />
        </button>
        <h1 data-testid="page-title">{title}</h1>
        {title === 'Foods' || title === 'Drinks' || title === 'Explore Nationalities' ? (
          <button
            type="button"
            onClick={ handleClickSearchBtn }
          >
            <img
              src={ searchIcon }
              alt="search icon"
              data-testid="search-top-btn"
            />
          </button>
        ) : ''}
      </section>
      {searchBtnVisible ? (
        <>
          <input
            type="text"
            name="search"
            data-testid="search-input"
            value={ searchInput }
            onChange={ ({ target: { value } }) => setSearchInput(value) }
          />
          <form>
            <label htmlFor="Ingredient">
              <input
                type="radio"
                data-testid="ingredient-search-radio"
                name="First-Filter"
                value="Ingredient"
                id="Ingredient"
                onChange={ ({ target: { value } }) => setRadioValue(value) }
              />
              Ingredient
            </label>
            <label htmlFor="Name">
              <input
                type="radio"
                data-testid="name-search-radio"
                name="First-Filter"
                value="Name"
                id="Name"
                onChange={ ({ target: { value } }) => setRadioValue(value) }
              />
              Name
            </label>
            <label htmlFor="First-Letter">
              <input
                type="radio"
                data-testid="first-letter-search-radio"
                name="First-Filter"
                value="First-Letter"
                id="First-Letter"
                onChange={ ({ target: { value } }) => setRadioValue(value) }
              />
              First Letter
            </label>
          </form>
          <button
            type="button"
            data-testid="exec-search-btn"
            onClick={ () => searchFood(radioValue, searchInput) }
          >
            Search
          </button>
        </>)
        : ''}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
