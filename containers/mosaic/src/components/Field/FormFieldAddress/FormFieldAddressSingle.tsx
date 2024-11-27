import type { ReactElement } from "react";
import React, { memo, useMemo } from "react";
import FormFieldGroup from "../FormFieldGroup/FormFieldGroup";
import type { AddressData, AddressSingleFieldInputSettings } from "./AddressTypes";
import type { FieldDef, MosaicFieldProps } from "../FieldTypes";
import AddressAutocompleteField from "./AddressAutocomplete/AddressAutocompleteField";
import defaultResolver from "@root/utils/form/defaultResolver";
import { Sizes } from "@root/theme";
import { validatePostcode } from "@root/utils/form/validators";
import AddressStateField from "./AddressStateField/AddressStateField";

function FormFieldAddressSingle(props: MosaicFieldProps<"addressSingle", AddressSingleFieldInputSettings, AddressData[number]>): ReactElement {
	const fields = useMemo<FieldDef[]>(() => [
		{
			name: "address1",
			label: "Address",
			type: AddressAutocompleteField,
			required: true,
			inputSettings: {
				googleMapsApiKey: props.fieldDef.inputSettings.googleMapsApiKey,
			},
			getResolvedValue: defaultResolver,
		},
		{
			name: "address2",
			type: "text",
			size: Sizes.lg,
		},
		{
			name: "address3",
			type: "text",
			size: Sizes.lg,
		},
		{
			name: "country",
			type: "dropdown",
			label: "Country",
			size: "sm",
			required: true,
			inputSettings: {
				getOptions: props.fieldDef.inputSettings.getOptionsCountries,
			},
			validates: [{
				name: "postalCode",
				include: [validatePostcode],
			}],
		},
		{
			name: "city",
			type: "text",
			label: "City",
			size: "sm",
			required: true,
		},
		{
			name: "state",
			type: AddressStateField,
			label: "State",
			size: "sm",
			inputSettings: {
				getOptionsStates: props.fieldDef.inputSettings.getOptionsStates,
			},
		},
		{
			name: "postalCode",
			type: "text",
			label: "Postal Code",
			size: "sm",
			required: true,
			validators: [
				{ fn: "validatePostcode", options: { countryField: "country" } },
			],
		},
	], [props.fieldDef.inputSettings.getOptionsCountries, props.fieldDef.inputSettings.getOptionsStates, props.fieldDef.inputSettings.googleMapsApiKey]);

	return (
		<FormFieldGroup
			{...props}
			fieldDef={{
				...props.fieldDef,
				type: "group",
				inputSettings: {
					...props.fieldDef.inputSettings,
					fields,
				},
			}}
		/>
	);
}

export default memo(FormFieldAddressSingle);
