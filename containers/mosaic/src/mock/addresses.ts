import type { AddressData } from "@root/components";

export const mockAddresses: AddressData = [
	{
		address1: "81 Sussex Gardens",
		address2: "Hucclecote",
		country: {
			label: "United Kingdom",
			value: "GB",
		},
		city: "Gloucester",
		state: {
			label: "Gloucestershire",
			value: "GLS",
		},
		postalCode: "GL3 3SP",
		types: [{ label: "Billing", value: "billing" }],
	},
	{
		address1: "81 Sussex Gardens",
		address2: "Hucclecote",
		country: {
			label: "United Kingdom",
			value: "GB",
		},
		city: "Gloucester",
		state: {
			label: "Gloucestershire",
			value: "GLS",
		},
		postalCode: "GL3 3SP",
		types: [{ label: "Physical", value: "physical" }],
	},
	{
		address1: "81 Sussex Gardens",
		address2: "Hucclecote",
		country: {
			label: "United Kingdom",
			value: "GB",
		},
		city: "Gloucester",
		state: {
			label: "Gloucestershire",
			value: "GLS",
		},
		postalCode: "GL3 3SP",
		types: [{ label: "Shipping", value: "shipping" }],
	},
];
