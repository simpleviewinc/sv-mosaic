import * as React from 'react';
import { ReactElement } from 'react';
import { boolean, select, withKnobs, text } from '@storybook/addon-knobs';
import AddIcon from '@material-ui/icons/Add';

import Button from './Button';

export default {
  title: 'Forms|Button',
  decorators: [withKnobs],
};

export const Example = (): ReactElement => {
  const buttonColor = select(
    'Color',
    ['primary', 'secondary', 'blue', 'red'],
    'primary'
  );
  const buttonType = select(
    'Button type',
    ['contained', 'text', 'secondary'],
    'contained'
  );
  const disabled = boolean('Disabled', false);

  return (
    <Button
      children='Test'
      color={buttonColor}
      disabled={disabled}
      type={buttonType}
    />
  );
};

export const withIcon = (): ReactElement => {
  const buttonColor = select(
    'Color',
    ['primary', 'secondary', 'blue', 'red'],
    'primary'
  );
  const buttonType = select(
    'Button type',
    ['contained', 'text', 'secondary'],
    'contained'
  );
  const disabled = boolean('Disabled', false);

  return (
    <Button
      children='Test'
      color={buttonColor}
      disabled={disabled}
      type={buttonType}
      icon={AddIcon}
    />
  );
};
