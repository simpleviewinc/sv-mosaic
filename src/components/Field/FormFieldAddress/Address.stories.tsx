import * as React from "react";
import { ReactElement, useMemo } from "react";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { renderButtons } from "@root/utils/storyUtils";
import { FieldDef } from "..";
import Form, { useForm } from "@root/components/Form";
import { getOptionsCountries, getOptionsStates } from "./utils/optionGetters";

export default {
	title: "FormFields/FormFieldAddress",
	decorators: [withKnobs],
};

const amountOptions = [
	"undefined",
	1,
	2,
	3,
	4,
	5,
];

export const Playground = (): ReactElement => {
	const controller = useForm();
	const { state, dispatch } = controller;

	const label = text("Label", "Label");
	const disabled = boolean("Disabled", false);
	const required = boolean("Required", false);
	const amountPerType = select("Amount per type", amountOptions, "undefined");
	const amountShipping = select("Amount shipping", amountOptions, "undefined");
	const amountPhysical = select("Amount physical", amountOptions, "undefined");
	const amountBilling = select("Amount billing", amountOptions, "undefined");

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
						amountPerType: amountPerType === "undefined" ? undefined : Number(amountPerType),
						amountShipping: amountShipping === "undefined" ? undefined : Number(amountShipping),
						amountPhysical: amountPhysical === "undefined" ? undefined : Number(amountPhysical),
						amountBilling: amountBilling === "undefined" ? undefined : Number(amountBilling),
						getOptionsCountries,
						getOptionsStates,
						googleMapsApiKey: "AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",
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
			getOptionsStates,
		],
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				{...controller}
				buttons={renderButtons(dispatch)}
				title={text("Title", "Form Title")}
				description={text("Description", "This is a description example")}
				fields={fields}
			/>
		</>
	);
};
