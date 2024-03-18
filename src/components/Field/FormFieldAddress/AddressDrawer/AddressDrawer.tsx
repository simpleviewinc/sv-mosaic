import * as React from "react";
import { ReactElement, SyntheticEvent, useCallback, useEffect, useMemo, useState, useRef } from "react";
import { FieldDef } from "@root/components/Field/FieldTypes";
import { ButtonProps } from "@root/components/Button";

// Components
import Form, { SectionDef, useForm } from "@root/components/Form";

// Utils
import { AddressDrawerProps, IAddress } from "../AddressTypes";
import { FormDrawerWrapper } from "@root/forms/shared/styledComponents";
import AddressAutocomplete from "../AddressAutocomplete";
import { geocodeByAddress } from "react-places-autocomplete";
import { components, componentsToAddress, initalAddressComponent } from "../utils/addressUtils";
import { MosaicLabelValue } from "@root/types";
import Snackbar from "@root/components/Snackbar";
import Sizes from "@root/theme/sizes";
import Field from "@root/components/Field";
import addressesAreEqual from "../utils/addressesAreEqual";

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

	const { state, methods, handleSubmit } = controller;
	const [address, setAddress] = useState("");
	const [snackBarLabel, setSnackBarLabel] = useState("");
	const [openSnackBar, setOpenSnackbar] = useState(false);
	const [initialState, setInitialState] = useState(state.data);
	const [apiState, setApiState] = useState<MosaicLabelValue | undefined>();

	const { setFieldValue } = methods;

	useEffect(() => {
		handleUnsavedChanges(!addressesAreEqual(addressToEdit, state.data as any));
	}, [addressToEdit, state.data]);

	// This smells bad, and it would be much better if there
	// was a way to intercept the form onchange handlers
	const lastCountry = useRef(state.data.country);
	useEffect(() => {
		if (state.data.country !== lastCountry.current) {
			if (lastCountry.current) {
				setFieldValue({
					name: "state",
					value: undefined,
				});
			}

			lastCountry.current = state.data.country;
		}
	}, [
		setFieldValue,
		state.data.country,
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

	useEffect(() => {
		const handleApiStateChange = async () => {
			if (apiState !== undefined) {
				setFieldValue({
					name: "state",
					value: { label: apiState.label, value: apiState.value },
					validate: true,
				});
				setApiState(undefined);
			}
		};

		handleApiStateChange();
	}, [apiState, setFieldValue]);

	const autocompleteAddress = useCallback(async (addressComponents: google.maps.GeocoderAddressComponent[]) => {
		let componentsNotFound = "";
		const addressComponentsMap = {
			route: initalAddressComponent, // => address
			locality: initalAddressComponent, // => city
			postal_town: initalAddressComponent, // => city
			country: initalAddressComponent, // => country
			administrative_area_level_1: initalAddressComponent, // => state
			postal_code: initalAddressComponent, // postal_code
			street_number: initalAddressComponent, // street_number
		};

		for (const addressComponent of addressComponents) {
			const found = addressComponent.types.find(r => components.includes(r));
			if (found) {
				addressComponentsMap[found] = { label: addressComponent.long_name, value: addressComponent.short_name };
			}
		}

		const selectedCountry = (await getOptionsCountries()).find(country => (
			country.label.toLowerCase().includes(addressComponentsMap.country.label.toLowerCase())
		));

		if (selectedCountry) {
			setInitialState({
				...initialState,
				country: selectedCountry,
			});
			setFieldValue({
				name: "country",
				value: selectedCountry,
				validate: true,
			});

			const selectedState = (await getOptionsStates(selectedCountry.value)).find(state => (
				state.label.toLowerCase().includes(addressComponentsMap.administrative_area_level_1.label.toLowerCase())
			));
			if (selectedState) {
				setApiState(selectedState);
			} else {
				console.warn('State response from google "' + addressComponentsMap.administrative_area_level_1.label + '" could not be found in the list of states provided in getOptionsStates');
				componentsNotFound += `${componentsToAddress.administrative_area_level_1}, `;
			}
		} else {
			console.warn('Country response from google "' + addressComponentsMap.country.label + '" could not be found in the list of countries provided in getOptionsCountries.');
			componentsNotFound += `${componentsToAddress.country}, ${componentsToAddress.administrative_area_level_1}, `;
		}

		setFieldValue({
			name: "address1",
			value: `${addressComponentsMap.street_number.label} ${addressComponentsMap.route.label}`.trim(),
			validate: true,
		});
		setFieldValue({
			name: "city",
			value: addressComponentsMap.locality.label === "" ? addressComponentsMap.postal_town.label : addressComponentsMap.locality.label,
			validate: true,
		});
		setFieldValue({
			name: "postalCode",
			value: addressComponentsMap.postal_code.label,
			validate: true,
		});

		for (const key in addressComponentsMap) {
			if (!addressComponentsMap[key].label) {
				componentsNotFound += componentsToAddress[key] ? `${componentsToAddress[key]}, ` : "";
			}
		}

		setSnackBarLabel(componentsNotFound);
		setOpenSnackbar(componentsNotFound !== "");
	}, [
		getOptionsCountries,
		getOptionsStates,
		initialState,
		setFieldValue,
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
			<Field
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
			>
				<AddressAutocomplete
					onChange={(address) => props.onChange(address)}
					onBlur={props.onBlur}
					value={props.value ?? ""}
					onSelect={inputSettings.onSelect}
					googleMapsApiKey={googleMapsApiKey}
					disabled={props.disabled}
				/>
			</Field>
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
					...(addressToEdit ? addressToEdit.types : []),
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
						getOptions: () => getOptionsStates(state.data.country?.value),
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
				},
				...typesField,
			],
		[
			getOptionsCountries,
			typesField,
			getOptionsStates,
			state.data.country?.value,
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
				label={`The following fields could not be autocompleted: ${snackBarLabel} please fill them.`}
				open={openSnackBar}
				onClose={closeSnackbar}
			/>
		</FormDrawerWrapper>
	);
};

export default AddressDrawer;
