import * as React from "react";
import { useMemo } from "react";
import { excludedFormFieldsControls, onCancel, renderButtons } from "@root/utils/storyUtils";
import { FieldDef } from "../../components/Field";
import Form, { useForm } from "@root/components/Form";

export default {
	title: "FormFields/FormFieldAddress",
	component: Form,
};

const Template = (args) => {
	const { state, dispatch } = useForm();
	const {
		disabled,
		label,
		required,
		amountPerType,
		amountShipping,
		amountPhysical,
		amountBilling
	} = args;

	const fields = useMemo(
		() =>
			[
				{
					disabled,
					label,
					required,
					name: "address",
					type: "address",
					inputSettings: {
						amountPerType,
						amountShipping,
						amountPhysical,
						amountBilling,
					},
				},
			] as FieldDef[],
		[
			disabled,
			label,
			required,
			amountPerType,
			amountShipping,
			amountPhysical,
			amountBilling,
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
	label: "Label",
	required: false,
	disabled: false,
	amountPerType: 1,
	amountShipping: 1,
	amountPhysical: 1,
	amountBilling: 1
};
