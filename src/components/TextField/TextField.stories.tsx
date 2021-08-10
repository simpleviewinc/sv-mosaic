import * as React from 'react';
import { boolean, withKnobs, text } from '@storybook/addon-knobs';
import { Meta } from '@storybook/addon-docs/blocks';
import styled from 'styled-components';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import TextField from '../TextField';

export default {
  title: 'Components|Input',
  decorators: [withKnobs],
} as Meta;

const onHandleChange = () => {
  console.log('Testing on change');
};

export const Default = () => <TextField onChange={onHandleChange} />;

export const multilineInput = () => (
  <TextField
    width={text('Width', '250px')}
    placeholder='Multiline'
    multiline={boolean('Multiline', false)}
  />
);

export const withError = () => (
  <TextField
    width={text('Width', '250px')}
    placeholder={text('Placeholder', 'placeholder')}
    error={boolean('Error', false)}
  />
)

export const disabled = () => (
  <TextField
    width={text('Width', '250px')}
    placeholder={text('Placeholder', 'disabled')}
    disabled={boolean('disabled', false)}
  />
)

export const withIcon = () => (
  <TextField
    width={text('Width', '250px')}
    placeholder={text('Placeholder', 'Text field with icon')}
    leadingIcon={AccountCircleIcon}
  />
)

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  & > * {
    margin-right: 10px;
  }
`;

export const Sizes = () => (
  <Row>
    <TextField placeholder='small' size='lg' />
    <TextField placeholder='medium' size='md' />
    <TextField placeholder='large' size='sm' />
  </Row>
);
