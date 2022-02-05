import * as React from 'react';
import { ReactElement, useCallback, useMemo, useState } from 'react';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';

// Components
import { AdvancedSelectionDef } from '.';
import Form from '../Form/Form';
import { FieldDef } from '@root/components/Field';
import { useForm } from '../Form/formUtils';

export default {
	title: 'Forms|AdvancedSelection',
	decorators: [withKnobs],
};

const externalOptions = [
	{
		category: 'Category 1',
		label: 'Option 1',
		value: 'option_1-cat_1',
	},
];

export const Playground = (): ReactElement => {
	const { state, dispatch, events, registerFields, registerOnSubmit } = useForm();
	const [options, setOptions] = useState(externalOptions);

	const modalTitle = text('Modal title', 'Modal title');
	const groupByCategory = boolean('Group by category', false);
	const label = text('Label', 'Label');
	const required = boolean('Required', false);
	const disabled = boolean('Disabled', false);
	const instructionText = text('Instruction text', 'Instruction text');
	const helperText = text('Helper text', 'Helper text');
	const getOptionsLimit = number('Get options limit', 5);

	// const updateOptionsCb = (newOption) => {
	// 	const newOptions = [...options, newOption];
	// 	setOptions(newOptions);
	// };

	const getOptions = async ({ currentPage, limit, filter, groupByCategory }) => {
		let additionalOptions = [
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
			{
				category: 'Category 5',
				label: 'ABC',
				value: 'ABC_UPPER',
			},
			{
				category: 'Category 5',
				label: 'abc',
				value: 'abc_lower',
			},
			{
				category: 'Category 5',
				label: 'abcdef',
				value: 'option_abcdef',
			},
			{
				category: 'Category 5',
				label: 'abc123',
				value: 'option_abc123',
			},
		];

		if (filter) {
			const trimmedFilter = filter.trim().toLowerCase();
			additionalOptions = additionalOptions.filter(
				option => (
					option.label.toLowerCase().includes(trimmedFilter)
					|| (groupByCategory && option.category?.toLocaleLowerCase().includes(trimmedFilter))
				)
			);
		}

		let optionsToReturn = [];
		if (limit) {
			for (let i = currentPage * limit; i < (currentPage * limit) + limit; i++) {
				if (i < additionalOptions.length)
					optionsToReturn.push(additionalOptions[i]);
			}
		} else {
			optionsToReturn = additionalOptions;
		}

		return optionsToReturn;
	};

	const fields = useMemo(
		() => (
			[
				{
					name: 'advancedSelection',
					label,
					required,
					disabled,
					helperText,
					instructionText,
					type: 'advancedSelection',
					inputSettings: {
						modalTitle,
						checkboxOptions: options,
						groupByCategory,
						getOptions,
						getOptionsLimit,
						// updateOptionsCb,
					}
				},
			] as FieldDef<AdvancedSelectionDef>[]
		),
		[
			label,
			required,
			disabled,
			helperText,
			instructionText,
			registerFields,
			modalTitle,
			groupByCategory,
			options
		]
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

export const KitchenSink = (): ReactElement => {
	const { state, dispatch, events, registerFields, registerOnSubmit } = useForm();
	const [options, setOptions] = useState(externalOptions);

	const modalTitle = text('Modal title', 'Modal title');
	const groupByCategory = boolean('Group by category', false);

	// const updateOptionsCb = (newOption) => {
	// 	const newOptions = [...options, newOption];
	// 	setOptions(newOptions);
	// };

	const fields = useMemo(
		() => (
			[
				{
					name: "a",
					label: "Advanced selection field",
					type: 'advancedSelection',
					inputSettings: {
						modalTitle,
						checkboxOptions: options,
						groupByCategory,
						// updateOptionsCb,
					}
				},
			] as FieldDef<AdvancedSelectionDef>[]
		),
		[registerFields, modalTitle, groupByCategory, options]
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
