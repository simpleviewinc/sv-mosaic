import * as React from "react";
import { ReactElement, useMemo } from "react";
import { boolean, number, text, withKnobs } from "@storybook/addon-knobs";
import { renderButtons } from "@root/utils/storyUtils";
import { FieldDef } from "../FieldTypes";
import Form, { useForm } from "@root/components/Form";
import { getOptionsCountries, getOptionsStates } from "./utils/optionGetters";

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
	const amountShipping = number("Amount shipping", 1);
	const amountPhysical = number("Amount physical", 1);
	const amountBilling = number("Amount billing", 1);

	const fields = useMemo(
		() : FieldDef[] => (
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
						getOptionsCountries,
						getOptionsStates,
						googleMapsApiKey: "AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac"
					},
				},
			]
		),
		[
			disabled,
			label,
			required,
			amountPerType,
			amountShipping,
			amountPhysical,
			amountBilling,
			getOptionsCountries,
			getOptionsStates
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
			/>
		</>
	);
};
