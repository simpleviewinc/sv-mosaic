import * as React from "react";
import { useMemo } from "react";
import FormFieldTable, { TableDef } from ".";
import { FieldDef } from "@root/components/Field";
import Form, { useForm } from "@root/components/Form";
import { ComponentMeta } from "@storybook/react";

// Utils
import {
	headers,
	deleteTableRow,
	useTable,
} from "@root/forms/FormFieldTable/tableUtils";
import { excludedFormFieldsControls, onCancel, renderButtons } from "@root/utils/storyUtils";

export default {
	title: "FormFields/FormFieldTable",
	component: FormFieldTable,
} as ComponentMeta<typeof FormFieldTable>;

const Template = (args) => {
	const { state, dispatch } = useForm();
	const { addTableRow, editAction, extraActionsTable } = useTable(
		state.data,
		"table",
		dispatch
	);

	const {
		disabled,
		helperText,
		instructionText,
		withMoreActions,
		headersArgs,
		label,
		required,
	} = args;

	const fields = useMemo(
		() =>
			[
				{
					disabled,
					helperText,
					instructionText,
					inputSettings: {
						handleAddElement: addTableRow,
						handleEdit: editAction,
						handleDelete: deleteTableRow,
						extraActions: withMoreActions && extraActionsTable,
						headers: headersArgs,
					},
					label,
					name: "table",
					required,
					type: "table",
				},
			] as FieldDef<TableDef>[],
		[
			addTableRow,
			disabled,
			headersArgs,
			helperText,
			instructionText,
			label,
			required,
			withMoreActions,
		]
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				buttons={renderButtons(dispatch)}
				description="This is a description example"
				dispatch={dispatch}
				fields={fields}
				onCancel={onCancel}
				state={state}
				title="Form Title"
			/>
		</>
	);
};

export const Playground = Template.bind({});
Playground.parameters = { controls: { exclude: excludedFormFieldsControls } };
Playground.args = {
	disabled: false,
	headersArgs: headers,
	helperText: "Helper text",
	label: "Label",
	instructionText: "Instruction text",
	required: false,
	withMoreActions: false,
};

const KitchenSinkTemplate = (args) => {
	const { state, dispatch } = useForm();

	const { addTableRow, editAction, extraActionsTable } = useTable(
		state.data,
		"table",
		dispatch
	);

	const { addTableRow: withoutHeaders } = useTable(
		state.data,
		"tableWithoutHeaders",
		dispatch
	);

	const fields = useMemo(
		() =>
			[
				{
					disabled: false,
					helperText:
						"The translate and the menu icons are shown to prove that the table can receive multiple actions",
					instructionText: "Instruction text",
					inputSettings: {
						handleAddElement: addTableRow,
						handleEdit: editAction,
						handleDelete: deleteTableRow,
						extraActions: extraActionsTable,
						headers: args.headers
					},
					label: "Table example with extra actions",
					name: "table",
					required: false,
					type: "table",
				},
				{
					disabled: false,
					helperText: "Default actions are the deletion and edition",
					instructionText: "Instruction text",
					inputSettings: {
						handleAddElement: withoutHeaders,
						handleEdit: editAction,
						handleDelete: deleteTableRow,
						extraActions: [],
						headers: [],
					},
					label: "Table without headers and with the default actions",
					name: "tableWithoutHeaders",
					required: false,
					type: "table",
				},
				{
					disabled: true,
					helperText: "Helper text",
					instructionText: "Instruction text",
					inputSettings: {
						handleAddElement: withoutHeaders,
						handleEdit: editAction,
						handleDelete: deleteTableRow,
						extraActions: [],
						headers: args.headers
					},
					label: "Table disabled",
					name: "disabled",
					required: false,
					type: "table",
				},
			] as FieldDef<TableDef>[],
		[addTableRow, withoutHeaders, args.headers]
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				buttons={renderButtons(dispatch)}
				description='Form description'
				dispatch={dispatch}
				fields={fields}
				onCancel={onCancel}
				state={state}
				title='Form Title'
			/>
		</>
	);
};

export const KitchenSink = KitchenSinkTemplate.bind({});
KitchenSink.parameters = { controls: { exclude: [...excludedFormFieldsControls, "headers"] } };
KitchenSink.args = {
	headers
}
