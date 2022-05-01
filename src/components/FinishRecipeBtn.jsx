import React from 'react';
// import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
// import { useHistory } from 'react-router-dom';

function FinishRecipeBtn() {
  return (
    <Button
      variant="success"
      data-testid="finish-recipe-btn"
      className="fixed-bottom"
      // onClick={ handleClick }
    >
      Finish Recipe
    </Button>
  );
}

export default FinishRecipeBtn;
