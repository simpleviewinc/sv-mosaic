import { ElementType, MouseEventHandler, ReactNode } from 'react';

export type ButtonType = 'contained' | 'text' | 'secondary';

export interface ButtonProps {
  children?: ReactNode;
  color: 'primary' | 'secondary' | 'blue' | 'red';
  disabled?: boolean;
  icon?: ElementType;
  iconPosition?: 'left' | 'right';
  label?: string | JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: ButtonType;
}
