import React from 'react';
import { Buttons } from './Button.styled';

const Button = ({ onClick, children }) => (
  <Buttons type="button" onClick={onClick}>
    {children}
  </Buttons>
);


export default Button;
