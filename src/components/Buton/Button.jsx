import React from 'react';
import { Buttons } from './Button.styled';

const Button = ({ onClick }) => (
  <Buttons type="button" onClick={onClick}>
    LOAD MORE
  </Buttons>
);


export default Button;
