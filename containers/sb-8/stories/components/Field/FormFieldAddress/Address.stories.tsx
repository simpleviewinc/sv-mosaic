import type { ReactElement } from "react";
import React, { useMemo } from "react";
import { commonFieldControls, renderButtons } from "../../../../utils";
import type { AddressData, FieldDefAddress } from "@root/components/Field/FormFieldAddress";
import Form, { useForm } from "@root/components/Form";
import type { FieldDef } from "@root/components/Field";
import { getOptionsCountries, getOptionsStates } from "@root/mock/options";

export default {
	title: "FormFields/FormFieldAddress",
};

const amountOptions = [
	"undefined",
	1,
	2,
	3,
	4,
	5,
	-1,
];

const commonInputSettings = {
	getOptionsCountries,
	getOptionsStates,
};

const defaultGoogleKey = "AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac";

const addresses: AddressData = [
	{
		id: 1,
		address1: "137 Teaticket Highway",
		address2: "",
		city: "Falmouth",
		state: {
			label: "Massachusetts",
			value: "MA",
		},
		postalCode: "02536",
		country: {
			label: "United States",
			value: "US",
		},
		types: [
			{
				label: "Physical",
				value: "physical",
			},
		],
	},
	{
		id: 2,
		address1: "555 East Main Street",
		address2: "",
		city: "Norfolk",
		state: {
			label: "Virginia",
			value: "VA",
		},
		postalCode: "23510",
		country: {
			label: "United States",
			value: "US",
		},
		types: [
			{
				label: "Physical",
				value: "physical",
			},
		],
	},
];

export const Playground = ({
	label,
	disabled,
	required,
	prepop,
	amountPerType,
	amountShipping,
	amountPhysical,
	amountBilling,
	googleKey,
}: typeof Playground.args): ReactElement => {
	const controller = useForm({ data: prepop ? { address: addresses } : {} });
	const { state, handleSubmit } = controller;

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
						googleMapsApiKey: googleKey,
						...commonInputSettings,
					},
				},
			]
		),
		[disabled, label, required, amountPerType, amountShipping, amountPhysical, amountBilling, googleKey],
	);

	return (
		<>
			<Form
				{...controller}
				buttons={renderButtons(handleSubmit)}
				title="Address field"
				fields={fields}
			/>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
		</>
	);
};

Playground.args = {
	...commonFieldControls.args,
	amountPerType: "undefined",
	amountShipping: "undefined",
	amountPhysical: "undefined",
	amountBilling: "undefined",
	googleKey: defaultGoogleKey,
};

Playground.argTypes = {
	...commonFieldControls.argTypes,
	amountPerType: {
		name: "Maximum of Each Type",
		control: { type: "select" },
		options: amountOptions,
	},
	amountShipping: {
		name: "Shipping Maximum",
		control: { type: "select" },
		options: amountOptions,
	},
	amountPhysical: {
		name: "Physical Maximum",
		control: { type: "select" },
		options: amountOptions,
	},
	amountBilling: {
		name: "Billing Maximum",
		control: { type: "select" },
		options: amountOptions,
	},
	googleKey: {
		name: "Google API Key",
	},
};

export const Single = ({
	label,
	disabled,
	required,
	prepop,
	subFields,
	googleKey,
}: typeof Single.args): ReactElement => {
	const controller = useForm({ data: prepop ? { address: addresses[0] } : {} });
	const { state, handleSubmit } = controller;

	const fields = useMemo(
		() : FieldDef[] => (
			[
				{
					disabled,
					label,
					required,
					name: "address",
					type: "addressSingle",
					inputSettings: {
						subFields,
						googleMapsApiKey: googleKey,
						...commonInputSettings,
					},
				},
			]
		),
		[disabled, label, required, subFields, googleKey],
	);

	return (
		<>
			<Form
				{...controller}
				buttons={renderButtons(handleSubmit)}
				title="Address Single field"
				fields={fields}
			/>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
		</>
	);
};

Single.args = {
	...commonFieldControls.args,
	subFields: ["address1", "address2", "address3", "country", "city", "state", "postalCode"],
	googleKey: defaultGoogleKey,
};

Single.argTypes = {
	...commonFieldControls.argTypes,
	subFields: {
		name: "Sub-Fields",
		control: { type: "object" },
	},
	googleKey: {
		name: "Google API Key",
	},
};

const fields: FieldDefAddress[] = [
	{
		label: "Provide a physical address",
		name: "physicalOnly",
		type: "address",
		inputSettings: {
			amountPhysical: 1,
			...commonInputSettings,
		},
	},
	{
		label: "Provide 1 physical address and 1 shipping address",
		name: "physicalAndShipping",
		type: "address",
		inputSettings: {
			amountPhysical: 1,
			amountShipping: 1,
			...commonInputSettings,
		},
	},
	{
		label: "Provide any combination of addresses with a maximum of 1 each",
		name: "anyCombinationMax1",
		type: "address",
		inputSettings: {
			...commonInputSettings,
		},
	},
	{
		label: "Provide any combination of addresses with no maximum",
		name: "anyCombinationNoMax",
		type: "address",
		inputSettings: {
			amountPerType: -1,
			...commonInputSettings,
		},
	},
];

export const KitchenSink = (): ReactElement => {
	const controller = useForm();

	return (
		<Form
			{...controller}
			title="Address Field"
			fields={fields}
		/>
	);
};
