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
		id: '1',
		items: ['John', 'john@email.com', '01/01/2021', '3231-962-7516'],
	},
	{
		id: '2',
		items: ['Sally', 'sally@email.com', '12/24/2020', '011-962-111'],
	},
	{
		id: '3',
		items: ['Maria', 'maria@email.com', '12/01/2020', '788-962-7516'],
	},
	{
		id: '4',
		items: ['John', 'john@email.com', '01/01/2021', '3231-962-7516'],
	},
	{
		id: '5',
		items: ['Sally', 'sally@email.com', '12/24/2020', '011-962-111'],
	},
	{
		id: '6',
		items: ['Maria', 'maria@email.com', '12/01/2020', '788-962-7516'],
	},
	{
		id: '7',
		items: ['John', 'john@email.com', '01/01/2021', '3231-962-7516'],
	},
	{
		id: '8',
		items: ['Sally', 'sally@email.com', '12/24/2020', '011-962-111'],
	},
	{
		id: '9',
		items: ['Maria', 'maria@email.com', '12/01/2020', '788-962-7516'],
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
