import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ title }) {
  const history = useHistory();
  const [searchBtnVisible, setSearchBtnVisible] = useState(false);
  const handleClickProfileBtn = () => {
    history.push('/profile');
  };

  const handleClickSearchBtn = () => {
    setSearchBtnVisible(!searchBtnVisible);
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
          <input type="text" name="search" data-testid="search-input" />
          <label htmlFor="Ingredient">
            <input
              type="radio"
              data-testid="ingredient-search-radio"
              name="Ingredient"
              id="Ingredient"
            />
            Ingredient
          </label>
          <label htmlFor="Name">
            <input
              type="radio"
              data-testid="name-search-radio"
              name="Name"
              id="Name"
            />
            Name
          </label>
          <label htmlFor="First Letter">
            <input
              type="radio"
              data-testid="first-letter-search-radio"
              name="First Letter"
              id="First Letter"
            />
            First Letter
          </label>
          <button type="button" data-testid="exec-search-btn">Search</button>
        </>)
        : ''}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
