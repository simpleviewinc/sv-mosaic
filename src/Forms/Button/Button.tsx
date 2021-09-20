import * as React from 'react';

// Types and styles
import { ButtonProps } from './ButtonTypes';
import { ReactElement } from 'react';
import { StyledButton, StyledIcon } from './ButtonStyled';

const Button = (props: ButtonProps): ReactElement => {
  const {
    children,
    color,
    disabled = false,
    icon,
    iconPosition = 'left',
    label, // may be could be remove and only use children prop
    type = 'contained',
    onClick,
  } = props;

  const childrenWithIcon = !icon ? (
    children
  ) : (
    <>
      {children}
      <StyledIcon as={icon} />
    </>
  );

  return (
    <StyledButton disabled={disabled} onClick={onClick} type={type}>
      {childrenWithIcon}
    </StyledButton>
  );
};

export default Button;
