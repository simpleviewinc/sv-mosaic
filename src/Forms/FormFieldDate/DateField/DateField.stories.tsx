import * as React from "react";
import { ReactElement, useMemo, useCallback } from "react";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { FieldDef } from "@root/components/Field";
import { useForm } from "@root/forms/Form/formUtils";

// Components
import Form from "../../Form/Form";
import { DateFieldDef } from "./DateFieldTypes";

export default {
	title: "Forms|FormFieldDateField",
	decorators: [withKnobs],
};

const onCancel = () => {
	alert("Cancelling form, going back to previous site");
};

export const Playground = (): ReactElement => {
	const {
		state,
		dispatch,
		events,
		registerFields,
		registerOnSubmit
	} = useForm();

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

	const onSubmit = useCallback(
		(data) => {
			alert(
				"Form submitted with the following data: " +
				JSON.stringify(data, null, " ")
			);
		},
		[state.validForm]
	);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

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

	const {
		state,
		dispatch,
		events,
		registerFields,
		registerOnSubmit
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
				title={"Date Field Calendar"}
				description={"This is a description example"}
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
