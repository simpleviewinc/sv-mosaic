import * as React from 'react';
import { ReactElement } from 'react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';

// Components
import Field from '@root/components/Field';
import Table from './Table';

export default {
  title: 'Forms|Table',
  decorators: [withKnobs],
};

const headers = ['Label 1', 'Label 2', 'Label 3', 'Label 4'];
const rows = [
  {
    id: 1,
    fullName: 'Jenny Chan',
    address: '3 waterfoot road',
    phoneNumber: '333-962-7516',
    email: 'jenny.chan@email.com',
  },
  {
    id: 2,
    fullName: 'Jessica warren',
    address: '4 tall town',
    phoneNumber: '011-211-7516',
    email: 'jessica.warren@email.com',
  },
  {
    id: 3,
    fullName: 'Tony Frank',
    address: '11 lesly road',
    phoneNumber: '788-962-7516',
    email: 'tony.frank@email.com',
  },
  {
    id: 4,
    fullName: 'Jeremy Clark',
    address: '333 miltown manor',
    phoneNumber: '011-962-111',
    email: 'jeremy.clark@email.com',
  },
  {
    id: 5,
    fullName: 'Raymond Edwards',
    address: '99 blue acres',
    phoneNumber: '3231-962-7516',
    email: 'raymon.edwards@email.com',
  },
];

export const Example = (): ReactElement => {
  const editRow = () => {
    alert('EDIT CLICK');
  };

  const addElement = () => {
    alert('ADD CLICK');
  };

  const onDelete = () => {
    alert('DELETE CLICK');
  };

  return (
    <Field
      label={text('Label', 'Label')}
      error={boolean('Error', false)}
      errorText={text('Error text', '')}
      required={boolean('Required', false)}
      disabled={boolean('Disabled', false)}
      instructionText={''}
      helperText={text('Helper text', 'Helper text')}
    >
      <Table
        handleAddElement={addElement}
        handleEdit={editRow}
        handleDelete={onDelete}
        headers={headers}
        rows={rows}
      />
    </Field>
  );
};
