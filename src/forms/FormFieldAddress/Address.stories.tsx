import * as React from "react";
import { ReactElement, useMemo } from "react";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { ButtonProps } from "@root/components/Button";
import { FieldDef } from "../../components/Field";
import { useForm, formActions } from "../Form";

// Components
import Form from "../Form/Form";

export default {
	title: "FormFields/FormFieldAddress",
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

	const label = text("Label", "Label");
	const disabled = boolean("Disabled", false);
	const required = boolean("Required", false);

	const fields = useMemo(
		() => (
			[
				{
					disabled,
					label,
					required,
					name: "address",
					type: "address",
				},
			] as FieldDef[]
		),
		[disabled, label, required]
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
