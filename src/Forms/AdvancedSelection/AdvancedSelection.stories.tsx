import * as React from 'react';
import { ReactElement } from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';

// Components
import AdvancedSelection from './AdvancedSelection';

export default {
	title: 'Forms|AdvancedSelection',
	decorators: [withKnobs],
};

const options = [
	{
		category: 'Cat1',
		label: 'Option 1',
		value: 'option_1-cat_1',
	},
	{
		category: 'Cat1',
		label: 'Option 2',
		value: 'option_2-cat_1',
	},
	{
		category: 'Cat2',
		label: 'Option 1',
		value: 'option_2-cat_2',
	},
	{
		category: 'Cat2',
		label: 'Test',
		value: 'test',
	},
	{
		category: 'Cat3',
		label: 'Very long label that does not fit',
		value: 'option_1-cat_3',
	},
	{
		category: 'Cat3',
		label: 'Very long label that does not fit',
		value: 'option_2-cat_3',
	},
	{
		category: 'Cat4',
		label: 'Option 1 category 4',
		value: 'option_1-cat_4',
	},
];

export const Example = (): ReactElement => {
	return (
		<AdvancedSelection
			inputTitle={text('Input Title', 'Input Title')}
			checkboxOptions={options}
			groupByCategory={true}
		/>
	);
};
