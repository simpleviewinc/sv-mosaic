import * as React from "react";
import { useMemo } from "react";
import { AdvancedSelectionDef } from ".";
import { FieldDef } from "@root/components/Field";
import Form, { useForm } from "@root/components/Form";
import {
	excludedFormFieldsControls,
	onCancel,
	renderButtons,
} from "@root/utils/storyUtils";
import { additionalOptions } from "@root/forms/FormFieldAdvancedSelection";

// Components
import { MosaicLabelValue } from "@root/types";

export default {
	title: "FormFields/FormFieldAdvancedSelection",
	component: Form,
};

const Template = (args) => {
	const { state, dispatch } = useForm();
	const {
		additionalOptions,
		disabled,
		label,
		required,
		instructionText,
		helperText,
		shouldUseGetOptions,
		getOptionsLimit,
		createNewOptions,
	} = args;

	const options = additionalOptions ? additionalOptions : [];

	const getOptions: ({
		filter,
		limit,
		offset,
	}: {
		filter?: string;
		limit?: number;
		offset?: number;
	}) => Promise<MosaicLabelValue[]> = async ({ limit, filter, offset }) => {
		let internalOptionsArr = [...additionalOptions];

		if (filter) {
			const trimmedFilter = filter.trim().toLowerCase();
			internalOptionsArr = additionalOptions.filter((option) =>
				option.label.toLowerCase().includes(trimmedFilter)
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

	const createNewOption = async (newOptionLabel) => {
		const value = `${newOptionLabel}_${additionalOptions.length}`;
		const newOption = {
			label: newOptionLabel,
			value,
		};

		// Insert to db
		additionalOptions.push(newOption);

		return newOption;
	};

	const fields = useMemo(
		() =>
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
						options: !shouldUseGetOptions ? options : undefined,
						getOptions: shouldUseGetOptions ? getOptions : undefined,
						getOptionsLimit:
							shouldUseGetOptions && getOptionsLimit
								? getOptionsLimit
								: undefined,
						createNewOption: createNewOptions ? createNewOption : undefined,
					},
				},
			] as FieldDef<AdvancedSelectionDef>[],
		[
			label,
			required,
			disabled,
			helperText,
			instructionText,
			getOptionsLimit,
			options,
			shouldUseGetOptions,
			createNewOptions,
		]
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				buttons={renderButtons(dispatch)}
				title="Form Title"
				description="This is a description example"
				state={state}
				fields={fields}
				dispatch={dispatch}
				onCancel={onCancel}
			/>
		</>
	);
};

export const Playground = Template.bind({});
Playground.parameters = { controls: { exclude: excludedFormFieldsControls } };
Playground.args = {
	additionalOptions,
	label: "Label",
	required: false,
	disabled: false,
	instructionText: "Instruction text",
	helperText: "Helper text",
	shouldUseGetOptions: false,
	getOptionsLimit: "5",
	createNewOptions: true,
};

const KitchenSinkTemplate = (args) => {
	const { state, dispatch } = useForm();
	const options = args.additionalOptions ? args.additionalOptions : [];

	const getOptions: ({
		filter,
		limit,
		offset,
	}: {
		filter?: string;
		limit?: number;
		offset?: number;
	}) => Promise<MosaicLabelValue[]> = async ({ limit, filter, offset }) => {
		let internalOptionsArr = [...additionalOptions];

		if (filter) {
			const trimmedFilter = filter.trim().toLowerCase();
			internalOptionsArr = additionalOptions.filter((option) =>
				option.label.toLowerCase().includes(trimmedFilter)
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

	const createNewOption = async (newOptionLabel) => {
		const value = `${newOptionLabel}_${additionalOptions.length}`;
		const newOption = {
			label: newOptionLabel,
			value,
		};

		// Insert to db
		additionalOptions.push(newOption);

		return newOption;
	};

	const fields = useMemo(
		() =>
			[
				{
					name: "checkboxOptions",
					label: "Advanced selection with options prop",
					type: "advancedSelection",
					inputSettings: {
						options,
					},
				},
				{
					name: "getOptions",
					label: "Advanced selection with getOptions prop",
					type: "advancedSelection",
					inputSettings: {
						getOptions,
						getOptionsLimit: 5,
					},
				},

				{
					name: "createNewOption",
					label: "Advanced selection with createNewOption prop",
					type: "advancedSelection",
					inputSettings: {
						options,
						getOptionsLimit: 10,
						createNewOption,
					},
				},
			] as FieldDef<AdvancedSelectionDef>[],
		[options]
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				buttons={renderButtons(dispatch)}
				title="Form Title"
				description="Description"
				state={state}
				fields={fields}
				dispatch={dispatch}
				onCancel={onCancel}
			/>
		</>
	);
};

export const KitchenSink = KitchenSinkTemplate.bind({});
KitchenSink.parameters = { controls: { exclude: [...excludedFormFieldsControls, "additionalOptions"] } };
KitchenSink.args = {
	additionalOptions
};
