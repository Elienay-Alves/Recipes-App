import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

function DetailsPageBtn({ meal, drink }) {
  const history = useHistory();
  const [btnText, setBtnText] = useState('Start Recipe');
  const [isBtnVisible, setBtnVisible] = useState(true);
  const handleClick = () => {
    const recipeId = window.location.pathname.split('/')[2];
    if (window.location.pathname.includes('foods')) {
      history.push(`/foods/${recipeId}/in-progress`);
    } else {
      history.push(`/drinks/${recipeId}/in-progress`);
    }
  };

  const handleBtnText = () => {
    console.log(drink);
    const isDone = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    if (isDone.some((recipe) => recipe.id === meal.idMeal
      || recipe.id === drink.idDrink)) {
      setBtnVisible(false);
      setBtnText('');
    }

    const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (inProgress) {
      if (window.location.pathname.includes('foods')) {
        Object.keys(inProgress.meals).some((id) => id === meal.idMeal);
        setBtnText('Continue Recipe');
      } else {
        Object.keys(inProgress.cocktails).some((id) => id === drink.idDrink);
        setBtnText('Continue Recipe');
      }
    }
  };

  useEffect(() => {
    // const doneRecipes = JSON.stringify([{
    //   id: '52772',
    //   type: 'comida-ou-bebida',
    //   nationality: 'nacionalidade-da-receita-ou-texto-vazio',
    //   category: 'categoria-da-receita-ou-texto-vazio',
    //   alcoholicOrNot: 'alcoholic-ou-non-alcoholic-ou-texto-vazio',
    //   name: 'nome-da-receita',
    //   image: 'imagem-da-receita',
    //   doneDate: 'quando-a-receita-foi-concluida',
    //   tags: 'array-de-tags-da-receita-ou-array-vazio' }]);
    // localStorage.setItem('doneRecipes', doneRecipes);
    // const inProgress = JSON.stringify({
    //   cocktails: {
    //     11005: ['lista-de-ingredientes-utilizados'],
    //   },
    //   meals: {
    //     52772: ['lista-de-ingredientes-utilizados'],
    //   },
    // });
    // localStorage.setItem('inProgressRecipes', inProgress);
    handleBtnText();
  }, []);

  return (
    isBtnVisible ? (
      <Button
        variant="success"
        data-testid="start-recipe-btn"
        className="fixed-bottom"
        onClick={ handleClick }
      >
        { btnText }
      </Button>) : ''
  );
}

DetailsPageBtn.propTypes = {
  meal: PropTypes.objectOf(PropTypes.any),
  drink: PropTypes.objectOf(PropTypes.any),
};

DetailsPageBtn.defaultProps = {
  meal: {},
  drink: {},
};

export default DetailsPageBtn;
