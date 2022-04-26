import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header() {
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
      {searchBtnVisible ? <input type="text" name="search" data-testid="search-input" />
        : ''}
    </header>
  );
}

export default Header;
