import * as React from "react";
import { ReactElement, useMemo } from "react";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { FieldDef } from "@root/components/Field";
import { DateFieldDef } from "./DateFieldTypes";
import { useForm, formActions } from "@root/forms/Form";
import { ButtonProps } from "@root/components/Button";

// Components
import Form from "../../Form/Form";

export default {
	title: "FormFields/FormFieldDateField",
	decorators: [withKnobs],
};

const onCancel = () => {
	alert("Cancelling form, going back to previous site");
};

const onSubmit = async (dispatch) => {
	const { valid, data } = await dispatch(formActions.submitForm());
	if (!valid) return;

	alert("Form submitted with the following data: " + JSON.stringify(data, null, " "));
};

const renderButtons = (dispatch): ButtonProps[] => [
	{
		label: "Save",
		onClick: () => onSubmit(dispatch),
		color: "yellow",
		variant: "contained",
	},
	{
		label: "Cancel",
		onClick: onCancel,
		color: "gray",
		variant: "outlined",
	},
];

export const Playground = (): ReactElement => {
	const { state, dispatch, registerFields } = useForm();

	const label = text("Label", "Date Field Picker");
	const helperText = text("Helper text", "Helper text");
	const instructionText = text("Instruction text", "Instruction text");
	const disabled = boolean("Disabled", false);
	const required = boolean("Required", false);
	const showTime = boolean("Show time", false);

	const fields = useMemo(
		() => [
			{
				name: "date",
				type: "date",
				label,
				required,
				disabled,
				helperText,
				instructionText,
				inputSettings: {
					showTime
				}
			}
		] as FieldDef[],
		[label, required, disabled, helperText, instructionText, showTime]
	);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

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
	const {
		state,
		dispatch,
		registerFields
	} = useForm();

	const helperText = "Helper text";
	const instructionText = "Instruction text";

	const fields = useMemo(
		() =>
			[
				{
					name: "singleDate",
					type: "date",
					label: "Single Date Calendar",
					required: false,
					disabled: false,
					helperText,
					instructionText,
					inputSettings: {
						showTime: false
					}
				},
				{
					name: "disableSingleDate",
					type: "date",
					label: "Disable Single Date Calendar",
					required: false,
					disabled: true,
					helperText,
					instructionText,
					inputSettings: {
						showTime: false
					}
				},
				{
					name: "dateTime",
					type: "date",
					label: "Date Time Input",
					required: false,
					disabled: false,
					helperText,
					instructionText,
					inputSettings: {
						showTime: true
					}
				}, {
					name: "disableDateTime",
					type: "date",
					label: "Disable Date Time Calendar",
					required: false,
					disabled: true,
					helperText,
					instructionText,
					inputSettings: {
						showTime: true
					}
				}, {
					name: "requiredDateTime",
					type: "date",
					label: "Required Single Date Calendar",
					required: true,
					disabled: false,
					helperText,
					instructionText,
					inputSettings: {
						showTime: true
					}
				} as FieldDef<DateFieldDef>
			],
		[]
	);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				buttons={renderButtons(dispatch)}
				title={"Date Field Calendar"}
				description={"This is a description example"}
				state={state}
				fields={fields}
				dispatch={dispatch}
				onCancel={onCancel}
			/>
		</>
	);
};
