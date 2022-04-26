import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header() {
  return (
    <header className="d-flex flex-column">
      <section className="d-flex justify-content-between">
        <button
          type="button"
          data-testid="profile-top-btn"
          onClick={ handleClickProfileBtn }
        >
          <img src={ profileIcon } alt="profile icon" />
        </button>
        <h1 data-testid="page-title">Foods</h1>
        <button
          type="button"
          data-testid="search-top-btn"
          onClick={ handleClickSearchBtn }
        >
          <img src={ searchIcon } alt="search icon" />
        </button>
      </section>
    </header>
  );
}

export default Header;
