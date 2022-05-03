import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Profile() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('user'))) {
      setEmail(JSON.parse(localStorage.getItem('user')).email);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <>
      <Header title="Profile" />
      <section>
        <h2 data-testid="profile-email">{ email }</h2>
        <Link to="/done-recipes">
          <button type="button" data-testid="profile-done-btn">Done Recipes</button>
        </Link>
        <Link to="/favorite-recipes">
          <button type="button" data-testid="profile-favorite-btn">
            Favorite Recipes
          </button>
        </Link>
        <Link to="/">
          <button
            type="button"
            data-testid="profile-logout-btn"
            onClick={ handleLogout }
          >
            Logout
          </button>
        </Link>
      </section>
      <Footer />
    </>
  );
}

export default Profile;
