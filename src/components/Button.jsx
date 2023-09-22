import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => (
  <button className="Button" type="button" onClick={onClick}>
    LOAD MORE
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
