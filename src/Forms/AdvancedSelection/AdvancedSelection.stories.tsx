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
		category: 'Category',
		options: [
			{
				label: 'Label 1',
				value: 'label_1',
			},
			{
				label: 'Label 2',
				value: 'label_2',
			},
			{
				label: 'Label 3',
				value: 'label_3',
			},
		],
	},
	{
		category: 'Category 2',
		options: [
			{
				label: 'Label 2',
				value: 'label_2',
			},
			{
				label: 'Label 2',
				value: 'label_2',
			},
			{
				label: 'Label 3',
				value: 'label_3',
			},
		],
	},
	{
		category: 'Category 3',
		options: [
			{
				label: 'Label 1',
				value: 'label_1',
			},
			{
				label: 'Label 2',
				value: 'label_2',
			},
			{
				label: 'Label 3',
				value: 'label_3',
			},
		],
	},
];

export const Example = (): ReactElement => {
	return (
		<AdvancedSelection
			inputTitle={text('Input Title', 'Input Title')}
			options={options}
		/>
	);
};
