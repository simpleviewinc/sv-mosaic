// import * as React from "react";
// import { useMemo, ReactElement } from "react";
// import { boolean, withKnobs, text } from "@storybook/addon-knobs";
// import { Meta } from "@storybook/addon-docs/blocks";
// import { FormFieldCheckboxDef } from ".";
// import { FieldDef } from "@root/components/Field";

// // Components
// import Form, { useForm } from "@root/components/Form";

// // Utils
// import { checkboxOptions } from "./FormFieldCheckboxUtils";
// // import { onCancel, renderButtons } from "@root/utils/storyUtils";

// export default {
// 	title: "FormFields/FormFieldCheckbox",
// 	decorators: [withKnobs],
// } as Meta;

// export const Playground = (): ReactElement => {
// 	const { state, dispatch } = useForm();

// 	const disabled = boolean("Disabled", false);
// 	const required = boolean("Required", false);
// 	const label = text("Label", "Label");
// 	const instructionText = text("Instruction Text", "Instruction Text");
// 	const helperText = text("Helper Text", "Helper Text");

// 	const fields = useMemo(
// 		() =>
// 			[
// 				{
// 					name: "checkbox",
// 					label,
// 					type: "checkbox",
// 					required,
// 					disabled,
// 					inputSettings: {
// 						options: checkboxOptions,
// 					},
// 					helperText,
// 					instructionText,
// 				},
// 			] as FieldDef<FormFieldCheckboxDef>[],
// 		[required, disabled, label, instructionText, helperText]
// 	);

// 	return (
// 		<>
// 			<pre>{JSON.stringify(state, null, "  ")}</pre>
// 			<Form
// 				buttons={renderButtons(dispatch)}
// 				title={text("Title", "Form Title")}
// 				description={text("Description", "This is a description example")}
// 				state={state}
// 				fields={fields}
// 				dispatch={dispatch}
// 				onCancel={onCancel}
// 			/>
// 		</>
// 	);
// };

// const kitchenSinkFields = [
// 	{
// 		name: "checkbox",
// 		label: "Regular example",
// 		type: "checkbox",
// 		required: false,
// 		disabled: false,
// 		inputSettings: {
// 			options: checkboxOptions,
// 		},
// 		helperText: "Helper Text",
// 		instructionText: "InstructionText",
// 	},
// 	{
// 		name: "disabledCheckbox",
// 		label: "Disabled example",
// 		type: "checkbox",
// 		required: false,
// 		disabled: true,
// 		inputSettings: {
// 			options: checkboxOptions,
// 		},
// 		helperText: "Helper Text",
// 		instructionText: "InstructionText",
// 	},
// 	/* Should inputSettings be an optional prop?
// 	{
// 		name: 'withoutOptions',
// 		label: 'Without options',
// 		type: 'checkbox',
// 		required: false,
// 		disabled: false,
// 		helperText: 'Helper Text',
// 		instructionText: 'InstructionText',
// 	}, */
// ] as FieldDef<FormFieldCheckboxDef>[];

// export const KitchenSink = (): ReactElement => {
// 	const { state, dispatch } = useForm();

// 	return (
// 		<>
// 			<pre>{JSON.stringify(state, null, "  ")}</pre>
// 			<Form
// 				buttons={renderButtons(dispatch)}
// 				title='Form Title'
// 				description='This is a description example'
// 				state={state}
// 				fields={kitchenSinkFields}
// 				dispatch={dispatch}
// 				onCancel={onCancel}
// 			/>
// 		</>
// 	);
// };
