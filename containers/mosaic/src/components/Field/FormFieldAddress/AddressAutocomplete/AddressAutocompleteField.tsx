import type { ReactElement } from "react";

import React, { memo, useCallback, useContext, useState } from "react";
import { createPortal } from "react-dom";

import type { MosaicLabelValue } from "@root/types";

import { Sizes } from "@root/theme";
import FieldWrapper from "@root/components/FieldWrapper";
import AddressAutocomplete from "./AddressAutocomplete";
import { geocodeByAddress } from "react-places-autocomplete";
import { componentType } from "../utils/addressUtils";
import { FormContext } from "@root/components/Form/FormContext";
import Snackbar from "@root/components/Snackbar";

function AddressAutocompleteField(props): ReactElement {
	const { fieldDef, path } = props;
	const { inputSettings } = fieldDef;
	const {
		getOptionsCountries,
		getOptionsStates,
		googleMapsApiKey,
	} = inputSettings;
	const { methods } = useContext(FormContext);
	const { setFormValues } = methods;

	const [snackBarLabel, setSnackBarLabel] = useState("");
	const [openSnackBar, setOpenSnackbar] = useState(false);

	const onSelect = useCallback(async (value) => {
		const [geocodeItem] = await geocodeByAddress(value);
		const addressComponents = geocodeItem.address_components;

		/**
		 * Gets the long value of a given component by it's type and
		 * always returns a string.
		 *
		 * @param type The type of component to return the value of
		 * @returns The "long" value of a component
		 */
		const getComponentByType = (type: string): string => {
			const component = addressComponents.find(({ types }) => types.includes(type));

			if (!component || !component.long_name) {
				return "";
			}

			return component.long_name;
		};

		const hasPostalTown = Boolean(getComponentByType(componentType.town));

		const parts: { label: string; value: string | MosaicLabelValue; dataKey: string; emptyWarning?: boolean }[] = [
			{
				label: "Address 1",
				/**
				 * Address 1 needs both a number and a street to
				 * be considered valid and therefore auto-completed.
				 */
				value: [
					getComponentByType(componentType.no),
					getComponentByType(componentType.street),
				].filter(Boolean).join(" "),
				dataKey: "address1",
				emptyWarning: true,
			},
			{
				label: "Address 2",
				/**
				 * Addresses with a postal town have their "Address 2" (if applicable)
				 * in the locality component.
				 */
				value: hasPostalTown ? getComponentByType(componentType.locality) : "",
				dataKey: "address2",
			},
			{
				label: "City",
				/**
				 * Addresses with a postal town have their city in the town component
				 * but those without have their city in the locality
				 * component. For example, UK addresses have a postal town, US addresses
				 * do not.
				 */
				value: getComponentByType(hasPostalTown ? componentType.town : componentType.locality),
				dataKey: "city",
				emptyWarning: true,
			},
			{
				label: "Postal Code",
				value: getComponentByType(componentType.postcode),
				dataKey: "postalCode",
				emptyWarning: true,
			},
		];

		/**
		 * Makes a comparison of the value of the country
		 * found in the API's country component to the list
		 * of countries provided by the consumer. It's only
		 * considered valid if it's found in the resolved list.
		 */
		const availableCountries = await getOptionsCountries();
		const componentCountry = getComponentByType(componentType.country);
		const country = availableCountries.find(({ label }) => label.toLowerCase().includes(componentCountry.toLowerCase()));

		parts.push({
			label: "Country",
			value: country || "",
			dataKey: "country",
			emptyWarning: true,
		});

		/**
		 * Makes a comparison of the value of the state
		 * found in the API's state component to the list
		 * of states provided by the consumer using the
		 * country. It's only considered valid if the
		 * country is valid and the state is found in the
		 * resolved list.
		 */
		const availableStates = country ? (await getOptionsStates(country.value)) : [];
		const componentState = getComponentByType(hasPostalTown ? componentType.area2 : componentType.area1);
		const state = availableStates.find(({ label }) => label.toLowerCase().includes(componentState.toLowerCase()));

		parts.push({
			label: "State",
			value: state || "",
			dataKey: "state",
			emptyWarning: true,
		});

		const values = parts.reduce((acc, curr) => ({
			...acc,
			[curr.dataKey]: curr.value,
		}), {});

		const warnings = parts.filter(({ emptyWarning, value }) => emptyWarning && !value);

		setFormValues({
			values,
			path,
			validate: true,
		});

		if (warnings.length) {
			console.warn(
				"Some components could not be resolved.",
				"\n\nComponents received:\n", addressComponents,
				"\n\nBy type they are:\n", addressComponents.map(({ types: [type], long_name }) => `${type}: ${long_name}`).join("\n"),
				"\n\nMosaic Result:\n", parts,
			);
			setSnackBarLabel(warnings.map(({ label }) => label).join(", "));
			setOpenSnackbar(true);
		}
	}, [getOptionsCountries, getOptionsStates, path, setFormValues]);

	return (
		<>
			<FieldWrapper
				error={props.error}
				id={fieldDef.name}
				fieldDef={{
					name: fieldDef.name,
					type: "autocomplete",
					label: fieldDef.label,
					required: fieldDef.required,
					size: Sizes.lg,
				}}
				methods={props.methods}
				disabled={props.disabled}
				useRealLabel
			>
				<AddressAutocomplete
					onChange={(address) => props.onChange(address)}
					onBlur={props.onBlur}
					value={props.value ?? ""}
					onSelect={onSelect}
					googleMapsApiKey={googleMapsApiKey}
					disabled={props.disabled}
					id={`${fieldDef.name}-input`}
				/>
			</FieldWrapper>
			{createPortal(
				<Snackbar
					autoHideDuration={4000}
					label={`The following fields could not be autocompleted: ${snackBarLabel}.`}
					open={openSnackBar}
					onClose={() => setOpenSnackbar(false)}
				/>,
				document.body,
			)}
		</>
	);
}

export default memo(AddressAutocompleteField);
