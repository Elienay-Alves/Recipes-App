import React from 'react';
import PropTypes from 'prop-types';

function Ingredients({ meal }) {
  return (
    <p>Ingredients</p>
  );
}

DetailsHeader.propTypes = {
  meal: PropTypes.objectOf(PropTypes.any).isRequired,
  drink: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Ingredients;
