import React from 'react';
// import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

function DetailsPageBtn() {
  return (
    <Button
      variant="success"
      data-testid="start-recipe-btn"
    >
      Start Recipe
    </Button>
  );
}

export default DetailsPageBtn;
