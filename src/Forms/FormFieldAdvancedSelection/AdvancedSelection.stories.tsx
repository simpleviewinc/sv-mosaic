import * as React from "react";
import { ReactElement, useCallback, useMemo } from "react";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";

// Components
import { AdvancedSelectionDef } from ".";
import Form from "../Form/Form";
import { FieldDef } from "@root/components/Field";
import { useForm } from "../Form/formUtils";

export default {
	title: "Forms|FormFieldAdvancedSelection",
	decorators: [withKnobs],
};

const additionalOptions = [
	{
		category: "Category 1",
		label: "Option 1",
		value: "option_1-cat_1",
	},
	{
		category: "Category 1",
		label: "Option 2",
		value: "option_2-cat_1",
	},
	{
		category: "Category 1",
		label: "Option 3",
		value: "option_3-cat_1",
	},
	{
		category: "Category 1",
		label: "Option 4",
		value: "option_4-cat_1",
	},
	{
		category: "Category 2",
		label: "Option 1 category 2",
		value: "option_1-cat_2",
	},
	{
		category: "Category 2",
		label: "Test option category 2",
		value: "option_2-cat_2",
	},
	{
		category: "Category 2",
		label: "Another option of catergory 2",
		value: "option_3-cat_2",
	},
	{
		category: "Category 2",
		label: "Option 4 category 2",
		value: "option_4-cat_2",
	},
	{
		category: "Test Category",
		label: "You can filter by category",
		value: "option_1-test_category",
	},
	{
		category: "Test Category",
		label: "Very long label that does not fit",
		value: "option_2-test_category",
	},
	{
		category: "Category 4",
		label: "Option 1 category 4",
		value: "option_1-cat_4",
	},
	{
		label: "Option without category",
		value: "option_without_category",
	},
	{
		category: "Category 5",
		label: "ABC",
		value: "ABC_UPPER",
	},
	{
		category: "Category 5",
		label: "abc",
		value: "abc_lower",
	},
	{
		category: "Category 5",
		label: "abcdef",
		value: "option_abcdef",
	},
	{
		category: "Category 5",
		label: "abc123",
		value: "option_abc123",
	},
];

export const Playground = (): ReactElement => {
	const { state, dispatch, events, registerFields, registerOnSubmit } = useForm();
	const options = additionalOptions ? additionalOptions : [];
	const label = text("Label", "Label");
	const required = boolean("Required", false);
	const disabled = boolean("Disabled", false);
	const instructionText = text("Instruction text", "Instruction text");
	const helperText = text("Helper text", "Helper text");
	const shouldUseGetOptions = boolean("Obtain options from db", false);
	const getOptionsLimit = text("Get options limit", "5");

	const getOptions = async ({ limit, filter, offset }) => {
		let internalOptionsArr = [...additionalOptions];

		if (filter) {
			const trimmedFilter = filter.trim().toLowerCase();
			internalOptionsArr = additionalOptions.filter(
				option => (
					option.label.toLowerCase().includes(trimmedFilter)
				)
			);
		}

		let optionsToReturn = [];
		if (limit) {
			for (let i = offset; i < offset + limit; i++) {
				if (i < internalOptionsArr.length)
					optionsToReturn.push(internalOptionsArr[i]);
			}
		} else {
			optionsToReturn = internalOptionsArr;
		}

		return optionsToReturn;
	};

	const getSelected = async (selectedOptions) => {
		if (!selectedOptions) return;

		const fullOptions = options.concat(additionalOptions);

		return selectedOptions.map((selectedOption) =>
			fullOptions.find(o => o.value === selectedOption)
		);
	}

	const createNewOption = async (newOptionLabel) => {
		const value = `${newOptionLabel}_${additionalOptions.length}`
		const newOption = {
			value,
			label: newOptionLabel,
		}

		//Insert to db
		additionalOptions.push(newOption);

		return value;
	}

	const fields = useMemo(
		() => (
			[
				{
					name: "advancedSelection",
					label,
					required,
					disabled,
					helperText,
					instructionText,
					type: "advancedSelection",
					inputSettings: {
						checkboxOptions: !shouldUseGetOptions ? options : undefined,
						getOptions: shouldUseGetOptions ? getOptions : undefined,
						getOptionsLimit: (shouldUseGetOptions && getOptionsLimit) ? getOptionsLimit : undefined,
						getSelected,
						createNewOption,
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
			getOptionsLimit,
			options,
			shouldUseGetOptions,
		]
	);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const onSubmit = useCallback((data) => {
		alert("Form submitted with the following data: " + JSON.stringify(data, null, " "));
	}, [state.validForm]);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

	const onCancel = () => {
		alert("Cancelling form, going back to previous site");
	};

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				title={text("Title", "Form Title")}
				description={text("Description", "This is a description example")}
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
	const options = additionalOptions ? additionalOptions : [];

	const getOptions = async ({ limit, filter, offset }) => {
		let internalOptionsArr = [...additionalOptions];

		if (filter) {
			const trimmedFilter = filter.trim().toLowerCase();
			internalOptionsArr = additionalOptions.filter(
				option => (
					option.label.toLowerCase().includes(trimmedFilter)
				)
			);
		}

		let optionsToReturn = [];
		if (limit) {
			for (let i = offset; i < offset + limit; i++) {
				if (i < internalOptionsArr.length)
					optionsToReturn.push(internalOptionsArr[i]);
			}
		} else {
			optionsToReturn = internalOptionsArr;
		}

		return optionsToReturn;
	};

	const getSelected = async (selectedOptions) => {
		if (!selectedOptions) return;

		const fullOptions = options.concat(additionalOptions);

		return selectedOptions.map((selectedOption) =>
			fullOptions.find(o => o.value === selectedOption)
		);
	}

	const createNewOption = async (newOptionLabel) => {
		const value = `${newOptionLabel}_${additionalOptions.length}`
		const newOption = {
			value,
			label: newOptionLabel,
		}

		//Insert to db
		additionalOptions.push(newOption);

		return value;
	}

	const fields = useMemo(
		() => (
			[
				{
					name: "checkboxOptions",
					label: "Advanced selection with checkboxOptions prop",
					type: "advancedSelection",
					inputSettings: {
						checkboxOptions: options,
						getSelected,
					}
				},
				{
					name: "getOptions",
					label: "Advanced selection with getOptions prop",
					type: "advancedSelection",
					inputSettings: {
						getOptions,
						getOptionsLimit: 5,
						getSelected,
					}
				},

				{
					name: "createNewOption",
					label: "Advanced selection with createNewOption prop",
					type: "advancedSelection",
					inputSettings: {
						checkboxOptions: options,
						getOptionsLimit: 10,
						getSelected,
						createNewOption
					}
				},
			] as FieldDef<AdvancedSelectionDef>[]
		),
		[
			options,
		]
	);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const onSubmit = useCallback((data) => {
		alert("Form submitted with the following data: " + JSON.stringify(data, null, " "));
	}, [state.validForm]);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

	const onCancel = () => {
		alert("Cancelling form, going back to previous site");
	};

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				title={text("Title", "Form Title")}
				description={text("Description", "This is a description example")}
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