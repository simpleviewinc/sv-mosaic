import * as React from "react";
import { ReactElement, useMemo } from "react";
import { boolean, text, withKnobs, select, number } from "@storybook/addon-knobs";
import { FieldDef } from "@root/components/Field";
import Form, { useForm } from "@root/components/Form";
import { renderButtons } from "@root/utils/storyUtils";
import { additionalOptions } from "@root/components/Field/FormFieldAdvancedSelection";
import JSONDB from "@root/utils/JSONDB";
import MultiSelectHelper from "@root/components/DataView/example/MultiSelectHelper";
import categories from "@root/components/DataView/example/categories.json";
import { nanoid } from "nanoid";
import { MosaicLabelValue } from "@root/types";

export default {
	title: "FormFields/FormFieldAdvancedSelection",
	decorators: [withKnobs],
};

export const Playground = (): ReactElement => {
	const { state, dispatch } = useForm();
	const options: MosaicLabelValue[] = additionalOptions ? additionalOptions : [];
	const label = text("Label", "Label");
	const required = boolean("Required", false);
	const disabled = boolean("Disabled", false);
	const instructionText = text("Instruction text", "Instruction text");
	const helperText = text("Helper text", "Helper text");
	const optionsOrigin = select(
		"Options Origin",
		["Local", "DB"],
		"Local",
	);
	const getOptionsLimit = number("Get options limit", 5);
	const createNewOptionsKnob = boolean("Create new option", true);
	const selectLimit = text("Select limit", "");

	const categoriesApi = new JSONDB(categories);

	const categoriesHelper = new MultiSelectHelper({
		api: categoriesApi,
		labelColumn: "tag",
		valueColumn: "id",
		sortColumn: "sort_tag",
	});

	const createNewOption = async (newOptionLabel) => {
		const value = nanoid();
		const newOption = {
			"_id": value,
			"tag": newOptionLabel,
			"sort_tag": newOptionLabel,
			"updated": new Date(),
			"created": new Date(),
			"id": value,
		};

		//Insert to db
		additionalOptions.push({ label: newOption.tag, value: newOption.id });

		const data = await categoriesApi.getData();

		const newData = [...data, newOption];

		await categoriesApi.setData(newData);

		return { label: newOption.tag, value: newOption.id };
	};

	const fields = useMemo(
		() : FieldDef[] =>
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
						getOptions: optionsOrigin === "DB" ? categoriesHelper.getOptions.bind(categoriesHelper) : undefined,
						getOptionsLimit:
						optionsOrigin === "DB" && getOptionsLimit
							? getOptionsLimit
							: undefined,
						createNewOption: createNewOptionsKnob ? createNewOption : undefined,
						selectLimit: selectLimit.trim() !== "" && !isNaN(Number(selectLimit)) ? Number(selectLimit) : undefined,
					},
				},
			],
		[
			label,
			required,
			disabled,
			helperText,
			instructionText,
			getOptionsLimit,
			options,
			optionsOrigin,
			createNewOptionsKnob,
			selectLimit,
		],
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
			/>
		</>
	);
};

export const KitchenSink = (): ReactElement => {
	const { state, dispatch } = useForm();
	const options = additionalOptions ? additionalOptions : [];

	const categoriesApi = new JSONDB(categories);

	const categoriesHelper = new MultiSelectHelper({
		api: categoriesApi,
		labelColumn: "tag",
		valueColumn: "id",
		sortColumn: "sort_tag",
	});

	const createNewOption = async (newOptionLabel) => {
		const value = nanoid();
		const newOption = {
			"_id": value,
			"tag": newOptionLabel,
			"sort_tag": newOptionLabel,
			"updated": new Date(),
			"created": new Date(),
			"id": value,
		};

		//Insert to db
		additionalOptions.push({ label: newOption.tag, value: newOption.id });

		const data = await categoriesApi.getData();

		const newData = [...data, newOption];

		await categoriesApi.setData(newData);

		return { label: newOption.tag, value: newOption.id };
	};

	const fields: FieldDef[] = useMemo(
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
						getOptions: categoriesHelper.getOptions.bind(categoriesHelper),
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
				{
					name: "selectLimitOfOptions",
					label: "Advanced selection with selectLimit prop (Max 2 options)",
					type: "advancedSelection",
					inputSettings: {
						options,
						getOptionsLimit: 10,
						selectLimit: 2,
					},
				},
			],
		[options],
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
			/>
		</>
	);
};
