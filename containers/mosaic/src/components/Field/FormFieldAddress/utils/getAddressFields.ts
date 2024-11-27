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
	required?: boolean;
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

function getAddressFields({
	getOptionsCountries,
	getOptionsStates,
	googleMapsApiKey,
	required,
	include,
}: GetAddressFieldsParams): FieldDef[] {
	const invalidParts = include && getInvalidParts(include);

	if (invalidParts) {
		throw new Error(invalidParts);
	}

	const fieldMap: Record<AddressPart, FieldDef> = {
		address1: {
			name: "address1",
			required,
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
			type: "text",
			label: undefined,
			size: "lg",
		},
		address3: {
			name: "address3",
			type: "text",
			label: undefined,
			size: "lg",
		},
		country: {
			name: "country",
			type: "dropdown",
			label: "Country",
			size: "sm",
			required,
			inputSettings: {
				getOptions: getOptionsCountries,
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
		},
		state: {
			name: "state",
			type: AddressStateField,
			label: "State",
			size: "sm",
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
			inputSettings: {
				type: "string",
			},
			validators: [
				{ fn: "validatePostcode", options: { countryField: "country" } },
			],
		},
	};

	if (!include) {
		return Object.values(fieldMap);
	}

	return include.map(field => {
		if (typeof field === "string") {
			return fieldMap[field];
		}

		return merge(fieldMap[field.name], field);
	});
}

export default getAddressFields;
