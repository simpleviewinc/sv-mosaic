import * as React from "react";
import { ReactElement, useMemo } from "react";
import { boolean, text, withKnobs, select } from "@storybook/addon-knobs";
import { AdvancedSelectionDef } from ".";
import { FieldDef } from "@root/components/Field";
import Form, { useForm } from "@root/components/Form";
import { onCancel, renderButtons } from "@root/utils/storyUtils";
import { additionalOptions } from "@root/forms/FormFieldAdvancedSelection";

// Components
import { MosaicLabelValue } from "@root/types";

export default {
	title: "FormFields/FormFieldAdvancedSelection",
	decorators: [withKnobs],
};

export const Playground = (): ReactElement => {
	const { state, dispatch } = useForm();
	const options = additionalOptions ? additionalOptions : [];
	const label = text("Label", "Label");
	const required = boolean("Required", false);
	const disabled = boolean("Disabled", false);
	const instructionText = text("Instruction text", "Instruction text");
	const helperText = text("Helper text", "Helper text");
	const optionsOrigin = select(
		"Options Origin",
		["Local", "DB"],
		"Local"
	);
	const getOptionsLimit = text("Get options limit", "5");
	const createNewOptionsKnob = boolean("Create new option", true);

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

		//Insert to db
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
						options: optionsOrigin === "Local" ? options : undefined,
						getOptions: optionsOrigin === "DB" ? getOptions : undefined,
						getOptionsLimit:
						optionsOrigin === "DB" && getOptionsLimit
							? getOptionsLimit
							: undefined,
						createNewOption: createNewOptionsKnob ? createNewOption : undefined
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
			getOptions,
			optionsOrigin,
			createNewOptionsKnob
		]
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				buttons={renderButtons(dispatch)}
				title={text("Title", "Form Title")}
				description={text("Description", "This is a description example")}
				state={state}
				fields={fields}
				dispatch={dispatch}
				onCancel={onCancel}
			/>
		</>
	);
};

export const KitchenSink = (): ReactElement => {
	const { state, dispatch } = useForm();
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

		//Insert to db
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
					}
				},
				{
					name: "getOptions",
					label: "Advanced selection with getOptions prop",
					type: "advancedSelection",
					inputSettings: {
						getOptions,
						getOptionsLimit: 5
					}
				},

				{
					name: "createNewOption",
					label: "Advanced selection with createNewOption prop",
					type: "advancedSelection",
					inputSettings: {
						options,
						getOptionsLimit: 10,
						createNewOption
					}
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
