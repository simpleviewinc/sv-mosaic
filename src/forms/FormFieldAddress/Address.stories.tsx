import * as React from "react";
import { ReactElement, useMemo } from "react";
import { boolean, number, text, withKnobs } from "@storybook/addon-knobs";
import { onCancel, renderButtons } from "@root/utils/storyUtils";
import { FieldDef } from "../../components/Field";
import { useForm } from "../Form";

// Components
import Form from "../Form/Form";

export default {
	title: "FormFields/FormFieldAddress",
	decorators: [withKnobs],
};

export const Playground = (): ReactElement => {
	const { state, dispatch } = useForm();

	const label = text("Label", "Label");
	const disabled = boolean("Disabled", false);
	const required = boolean("Required", false);
	const amountPerType = number("Amount per type", 1);
	const amountShipping = number("Amount shipping", 0);
	const amountPhysical = number("Amount physical", 0);
	const amountBilling = number("Amount billing", 0);

	const fields = useMemo(
		() => (
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
						amountBilling
					},
				},
			] as FieldDef[]
		),
		[disabled, label, required, amountPerType, amountShipping, amountPhysical, amountBilling]
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
