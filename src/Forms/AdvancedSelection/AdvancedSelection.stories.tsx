import * as React from 'react';
import { ReactElement, useCallback, useMemo } from 'react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';

// Components
import AdvancedSelection from './AdvancedSelection';
import { optionsWithCategory } from './AdvancedSelectionTypes';
import Form from '../Form/Form';
import { FieldDefProps } from '@root/components/Field';
import { useForm } from '../Form/formUtils';

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
			error={text('Error text', '')}
			required={boolean('Required', false)}
			instructionText={text('Instruction text', 'Instruction text')}
			helperText={text('Helper text', 'Helper text')}
			disabled={boolean('Disabled', false)}
			inputSettings={{
				modalTitle: text('Modal title', 'Modal title'),
				checkboxOptions: options,
				groupByCategory: boolean('Group by category', false),
			}}
			onChange={onChange}
		/>
	);
};

export const FormExample = (): ReactElement => {
	const { state, dispatch, events, registerFields, registerOnSubmit } = useForm();

	const modalTitle = text('Modal title', 'Modal title');
	const groupByCategory = boolean('Group by category', false);

	const fields = useMemo(
		() => (
			[
				{
					name: "a",
					label: "a",
					type: 'advancedSelection',
					inputSettings: {
						modalTitle,
						checkboxOptions: options,
						groupByCategory
					}
				},
			] as FieldDefProps[]
		),
		[registerFields, modalTitle, groupByCategory]
	);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const onSubmit = useCallback((data) => {
		alert('Form submitted with the following data: ' + JSON.stringify(data, null, " "));
	}, [state.validForm]);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

	const onCancel = () => {
		alert('Cancelling form, going back to previous site');
	};

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				title={text('Title', 'Form Title')}
				description={text('Description', 'This is a description example')}
				state={state}
				fields={fields}
				dispatch={dispatch}
				events={events}
				onCancel={onCancel}
				onSubmit={onSubmit}
			/>
		</>
	);
};