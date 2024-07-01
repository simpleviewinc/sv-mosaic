import * as React from "react";
import { ReactElement, SyntheticEvent, useCallback, useEffect, useMemo, useState } from "react";
import type { FieldDef } from "@root/components/Field/FieldTypes";
import { ButtonProps } from "@root/components/Button";

// Components
import Form, { SectionDef, useForm } from "@root/components/Form";

// Utils
import { AddressDrawerProps, IAddress } from "../AddressTypes";
import { FormDrawerWrapper } from "@root/forms/shared/styledComponents";
import AddressAutocomplete from "../AddressAutocomplete";
import { geocodeByAddress } from "react-places-autocomplete";
import { componentType } from "../utils/addressUtils";
import { MosaicLabelValue } from "@root/types";
import Snackbar from "@root/components/Snackbar";
import Sizes from "@root/theme/sizes";
import FieldWrapper from "@root/components/FieldWrapper";
import addressesAreEqual from "../utils/addressesAreEqual";
import { validatePostcode } from "@root/components/Form/validators";

const AddressDrawer = (props: AddressDrawerProps): ReactElement => {
	const {
		onSave,
		addressToEdit,
		handleClose,
		handleUnsavedChanges,
		dialogOpen,
		handleDialogClose,
		addressTypes,
		getOptionsCountries,
		getOptionsStates,
		googleMapsApiKey,
	} = props;

	const controller = useForm();
	const { state, methods: { setFieldValue, setFormValues }, handleSubmit } = controller;

	const [address, setAddress] = useState("");
	const [snackBarLabel, setSnackBarLabel] = useState("");
	const [openSnackBar, setOpenSnackbar] = useState(false);

	useEffect(() => {
		handleUnsavedChanges(!addressesAreEqual(addressToEdit, state.data as any));
	}, [addressToEdit, state.data]);

	/**
	 * Where "state" means geographical state, not app state:
	 *
	 * Unsets the state if the country changes and the currently
	 * selected state cannot be located in the list of states
	 * for that given country.
	 */
	useEffect(() => {
		if (!state.data.country || !state.data.state) {
			return;
		}

		const maybeUnsetState = async () => {
			const availableStates = await getOptionsStates(state.data.country.value);
			const matchingState = availableStates.find(({ label }) => label.toLowerCase().includes(state.data.state.label.toLowerCase()));

			if (matchingState) {
				return;
			}

			setFieldValue({
				name: "state",
				value: undefined,
			});
		};

		maybeUnsetState();
	}, [
		setFieldValue,
		state.data.country,
		state.data.state,
		getOptionsStates,
	]);

	/**
	 * Form submit handler.
	 * It adds a new address or edits an existing one and then
	 * closes the Drawer.
	 */
	const onSubmit = handleSubmit(useCallback(async () => {
		onSave({
			address1: state.data.address1,
			address2: state.data.address2,
			address3: state.data.address3,
			city: state.data.city,
			state: state.data.state,
			postalCode: state.data.postalCode,
			country: state.data.country,
			types: state.data.types,
		});

		handleClose(true);
	}, [
		handleClose,
		onSave,
		state.data.address1,
		state.data.address2,
		state.data.address3,
		state.data.city,
		state.data.state,
		state.data.postalCode,
		state.data.country,
		state.data.types,
	]));

	const autocompleteAddress = useCallback(async (addressComponents: google.maps.GeocoderAddressComponent[]) => {
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
	}, [
		getOptionsCountries,
		getOptionsStates,
		setFormValues,
	]);

	/**
	 * When an option selected from the autocomplete options the
	 * function that fills the fields with the address components
	 * will be executed.
	 * @param value
 	*/
	const onSelect = useCallback(async (value) => {
		try {
			const results = await geocodeByAddress(value);
			autocompleteAddress(results[0].address_components);
		} catch (error) {
			console.error(error);
		}
	}, [autocompleteAddress]);

	const closeSnackbar = useCallback((_event?: SyntheticEvent, reason?: string) => {
		if (reason === "clickaway") {
			return;
		}

		setOpenSnackbar(false);
	}, []);

	const Autocomplete = useCallback((props): ReactElement => {
		const { fieldDef } = props;
		const { inputSettings } = fieldDef;

		return (
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
					onSelect={inputSettings.onSelect}
					googleMapsApiKey={googleMapsApiKey}
					disabled={props.disabled}
					id={`${fieldDef.name}-input`}
				/>
			</FieldWrapper>
		);
	}, [googleMapsApiKey]);

	const sections = useMemo<SectionDef[]>(() => [
		{
			fields: [
				[["address1"]],
				[["address2"]],
				[["address3"]],
				[["country"]],
				[["city"], ["state"], ["postalCode"]],
				...(addressTypes ? [[["types"]]] : []),
			],
		},
	], [addressTypes]);

	const typesField = useMemo<FieldDef[]>(() => addressTypes ? [
		{
			name: "types",
			type: "checkbox",
			label: "Type",
			size: "sm",
			required: true,
			inputSettings: {
				options: [
					...addressTypes,
					...(addressToEdit ? addressToEdit.types.filter((editingType) => !addressTypes.find(({ value }) => value === editingType.value)) : []),
				],
			},
		},
	] : [], [addressTypes, addressToEdit]);

	const autoCompleteField = useMemo(
		(): FieldDef[] =>
			[
				{
					name: "address1",
					required: true,
					type: Autocomplete,
					label: "Address",
					inputSettings: {
						address,
						setAddress,
						onSelect,
					},
				},
			],
		[
			Autocomplete,
			address,
			onSelect,
		],
	);

	const baseFields = useMemo(
		(): FieldDef[] =>
			[
				{
					name: "country",
					type: "dropdown",
					label: "Country",
					size: "sm",
					required: true,
					inputSettings: {
						getOptions: getOptionsCountries,
					},
					validates: [{
						name: "postalCode",
						include: [validatePostcode]
					}]
				},
				{
					name: "address2",
					type: "text",
					label: undefined,
					size: "lg",
				},
				{
					name: "address3",
					type: "text",
					label: undefined,
					size: "lg",
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
					type: "dropdown",
					label: "State",
					size: "sm",
					inputSettings: {
						getOptions: async () => {
							if (!state.data.country) {
								return [];
							}

							return getOptionsStates(state.data.country.value);
						},
					},
				},
				{
					name: "postalCode",
					type: "text",
					label: "Postal Code",
					size: "sm",
					required: true,
					inputSettings: {
						type: "string",
					},
					validators: [
						{ fn: "validatePostcode", options: { countryField: "country" } }
					]
				},
				...typesField,
			],
		[
			getOptionsCountries,
			typesField,
			getOptionsStates,
			state.data.country,
		],
	);

	const fields = useMemo(
		(): FieldDef[] =>
			[
				...autoCompleteField,
				...baseFields,
				...typesField,
			],
		[baseFields, typesField, autoCompleteField],
	);

	const getFormValues = useCallback(async () => {
		if (!addressToEdit) {
			return {};
		}

		const values: Omit<IAddress, "types"> & { types?: IAddress["types"] } = {
			address1: addressToEdit.address1,
			address2: addressToEdit.address2,
			address3: addressToEdit.address3,
			city: addressToEdit.city,
			state: addressToEdit.state,
			postalCode: addressToEdit.postalCode,
			country: addressToEdit.country,
		};

		if (addressTypes) {
			values.types = addressToEdit.types;
		}

		return values;
	}, [addressToEdit, addressTypes]);

	const buttons = useMemo<ButtonProps[]>(() => [
		{
			label: "Cancel",
			onClick: () => handleClose(),
			color: "gray",
			variant: "outlined",
		},
		{
			label: "Save",
			onClick: onSubmit,
			color: "yellow",
			variant: "contained",
			type: "submit",
		},
	], [handleClose, onSubmit]);

	return (
		<FormDrawerWrapper className="address">
			<Form
				{...controller}
				onBack={handleClose}
				title="Address Information"
				buttons={buttons}
				data-testid="address-testid"
				sections={sections}
				fields={fields}
				dialogOpen={dialogOpen}
				handleDialogClose={handleDialogClose}
				getFormValues={getFormValues}
			/>
			<Snackbar
				autoHideDuration={4000}
				label={`The following fields could not be autocompleted: ${snackBarLabel}.`}
				open={openSnackBar}
				onClose={closeSnackbar}
			/>
		</FormDrawerWrapper>
	);
};

export default AddressDrawer;
