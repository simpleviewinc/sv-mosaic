import * as React from 'react';
import { ReactElement } from 'react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';

// Components
import AdvancedSelection from './AdvancedSelection';
import { optionsWithCategory } from './AdvancedSelectionTypes';

export default {
	title: 'Forms|AdvancedSelection',
	decorators: [withKnobs],
};

const options = [
	{
		category: 'Category 1',
		label: 'Option 1',
		value: 'option_1-cat_1',
	},
	{
		category: 'Category 1',
		label: 'Option 2',
		value: 'option_2-cat_1',
	},
	{
		category: 'Category 1',
		label: 'Option 3',
		value: 'option_3-cat_1',
	},
	{
		category: 'Category 1',
		label: 'Option 4',
		value: 'option_4-cat_1',
	},
	{
		category: 'Category 2',
		label: 'Option 1 category 2',
		value: 'option_1-cat_2',
	},
	{
		category: 'Category 2',
		label: 'Test option category 2',
		value: 'option_2-cat_2',
	},
	{
		category: 'Category 2',
		label: 'Another option of catergory 2',
		value: 'option_3-cat_2',
	},
	{
		category: 'Category 2',
		label: 'Option 4 category 2',
		value: 'option_4-cat_2',
	},
	{
		category: 'Test Category',
		label: 'You can filter by category',
		value: 'option_1-test_category',
	},
	{
		category: 'Test Category',
		label: 'Very long label that does not fit',
		value: 'option_2-test_category',
	},
	{
		category: 'Category 4',
		label: 'Option 1 category 4',
		value: 'option_1-cat_4',
	},
	{
		label: 'Option without category',
		value: 'option_without_category',
	},
];

export const Example = (): ReactElement => {
	const onChange = (savedOptions: optionsWithCategory[]) => {
		console.log("Stories: ", savedOptions)
	};

	return (
		<AdvancedSelection
			label={text('Label', 'Label')}
			error={boolean('Error', false)}
			errorText={text('Error text', '')}
			required={boolean('Required', false)}
			instructionText={text('Instruction text', 'Instruction text')}
			helperText={text('Helper text', 'Helper text')}
			disabled={boolean('Disabled', false)}
			modalTitle={text('Modal title', 'Modal title')}
			checkboxOptions={options}
			groupByCategory={boolean('Group by category', false)}
			onChange={onChange}
		/>
	);
};
