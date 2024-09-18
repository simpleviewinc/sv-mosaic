import * as React from "react";
import { ReactElement, useMemo } from "react";
import { nanoid } from "nanoid";

import { FieldDef } from "@root/components/Field";
import Form, { useForm } from "@root/components/Form";
import { renderButtons } from "@root/utils/storyUtils";
import { optionsLibrary } from "@root/mock";
import JSONDB from "@root/utils/JSONDB";
import MultiSelectHelper from "@root/components/DataView/example/MultiSelectHelper";
import categories from "@root/components/DataView/example/categories.json";
import { MosaicLabelValue } from "@root/types";

export default {
	title: "FormFields/FormFieldAdvancedSelection",
};

export const Playground = ({
	label,
	required,
	skeleton,
	disabled,
	instructionText,
	helperText,
	optionsOrigin,
	getOptionsLimit,
	createNewOptionsKnob,
	selectLimit,
}: typeof Playground.args): ReactElement => {
	const controller = useForm();
	const { state, handleSubmit } = controller;

	const options: MosaicLabelValue[] = optionsLibrary ? optionsLibrary : [];
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
		optionsLibrary.push({ label: newOption.tag, value: newOption.id });

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
						selectLimit,
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
				{...controller}
				buttons={renderButtons(handleSubmit)}
				title="Advanced Selection Field"
				fields={fields}
				skeleton={skeleton}
			/>
		</>
	);
};

Playground.args = {
	label: "Label",
	disabled: false,
	required: false,
	skeleton: false,
	instructionText: "Instruction text",
	helperText: "Helper text",
	optionsOrigin: "Local",
	getOptionsLimit: 5,
	createNewOptionsKnob: true,
	selectLimit: -1,
};

Playground.argTypes = {
	label: {
		name: "Label",
	},
	disabled: {
		name: "Disabled",
	},
	required: {
		name: "Required",
	},
	skeleton: {
		name: "Skeleton",
	},
	instructionText: {
		name: "Instruction Text",
	},
	helperText: {
		name: "Helper Text",
	},
	optionsOrigin: {
		name: "Options Origin",
	},
	getOptionsLimit: {
		name: "Get Options Limit",
	},
	createNewOptionsKnob: {
		name: "Create New Option",
	},
	selectLimit: {
		name: "Select Limit",
	},
};

export const KitchenSink = (): ReactElement => {
	const controller = useForm();
	const { state, handleSubmit } = controller;
	const options = optionsLibrary ? optionsLibrary : [];

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
		optionsLibrary.push({ label: newOption.tag, value: newOption.id });

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
				{...controller}
				buttons={renderButtons(handleSubmit)}
				title="Form Title"
				description="Description"
				fields={fields}
			/>
		</>
	);
};
