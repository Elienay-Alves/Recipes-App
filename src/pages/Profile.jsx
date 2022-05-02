import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Profile() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    setEmail(JSON.parse(localStorage.getItem('user')).email);
  }, []);

  return (
    <>
      <Header title="Profile" />
      <section>
        <h2 data-testid="profile-email">{ email }</h2>
        <button type="button" data-testid="profile-done-btn">Done Recipes</button>
        <button type="button" data-testid="profile-favorite-btn">Favorite Recipes</button>
        <button type="button" data-testid="profile-logout-btn">Logout</button>
      </section>
      <Footer />
    </>
  );
}

export default Profile;
