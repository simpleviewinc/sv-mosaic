import type { AddressFieldInputSettings, AddressPart } from "../AddressTypes";
import type { FieldDef } from "../../FieldTypes";

import { validatePostcode } from "@root/utils/form/validators";
import AddressAutocompleteField from "../AddressAutocomplete/AddressAutocompleteField";
import AddressStateField from "../AddressStateField/AddressStateField";
import merge from "@root/utils/object/merge";

type GetAddressFieldsParams = Pick<AddressFieldInputSettings,
	| "getOptionsCountries"
	| "getOptionsStates"
	| "googleMapsApiKey"
> & {
	required?: FieldDef["required"];
	disabled?: FieldDef["disabled"];
	include?: AddressFieldInputSettings["subFields"];
}

const dependencies: Partial<Record<AddressPart, AddressPart[]>> = {
	address1: ["country", "city", "state", "postalCode"],
	address2: ["address1"],
	address3: ["address2"],
	state: ["country", "postalCode"],
	city: ["country", "state", "postalCode"],
};

function getInvalidParts(include: GetAddressFieldsParams["include"]) {
	const errors: string[] = [];
	const parts = include.map(item => typeof item === "string" ? item : item.name);

	for (const part of parts) {
		if (!dependencies[part]) {
			continue;
		}

		for (const dependency of dependencies[part]) {
			if (!parts.includes(dependency)) {
				errors.push(`The "${part}" sub field requires the ${dependency} to also be included.`);
			}
		}
	}

	return errors.join("\n");
}

export const defaultAddressFields: GetAddressFieldsParams["include"] = [
	"address1",
	"address2",
	"address3",
	"country",
	"city",
	"state",
	"postalCode",
];

function getAddressFields({
	getOptionsCountries,
	getOptionsStates,
	googleMapsApiKey,
	required,
	disabled,
	include = defaultAddressFields,
}: GetAddressFieldsParams): FieldDef[] {
	const invalidParts = include && getInvalidParts(include);

	if (invalidParts) {
		throw new Error(invalidParts);
	}

	// TODO Use an array here because an objects order is not guaranteed.
	const fieldMap: Record<AddressPart, FieldDef> = {
		address1: {
			name: "address1",
			required,
			disabled,
			label: "Address",
			size: "lg",
			// If a google maps API key has been provided,
			// use an autocomplete field. Otherwise, just a
			// standard text field will do.
			...(googleMapsApiKey ? {
				type: AddressAutocompleteField,
				inputSettings: {
					getOptionsCountries,
					getOptionsStates,
					googleMapsApiKey,
				},
			} : {
				type: "text",
			}),
		},
		address2: {
			name: "address2",
			label: "Address Line 2",
			hideLabel: true,
			type: "text",
			size: "lg",
			disabled,
		},
		address3: {
			name: "address3",
			label: "Address Line 3",
			hideLabel: true,
			type: "text",
			size: "lg",
			disabled,
		},
		country: {
			name: "country",
			type: "dropdown",
			label: "Country",
			size: "sm",
			required,
			disabled,
			inputSettings: {
				options: getOptionsCountries,
			},
			validates: [{
				name: "postalCode",
				include: [validatePostcode],
			}],
		},
		city: {
			name: "city",
			type: "text",
			label: "City",
			size: "sm",
			required,
			disabled,
		},
		state: {
			name: "state",
			type: AddressStateField,
			label: "State",
			size: "sm",
			disabled,
			inputSettings: {
				getOptionsStates,
			},
		},
		postalCode: {
			name: "postalCode",
			type: "text",
			label: "Postal Code",
			size: "sm",
			required,
			disabled,
			inputSettings: {
				type: "string",
			},
			validators: [
				{ fn: "validatePostcode", options: { countryField: "country" } },
			],
		},
	};

	return include.map(field => {
		if (typeof field === "string") {
			return fieldMap[field];
		}

		return merge(fieldMap[field.name], field);
	});
}

export default getAddressFields;
