import * as React from "react";
import { ReactElement, SyntheticEvent, useCallback, useEffect, useMemo, useState } from "react";
import { FieldDef } from "@root/components/Field/FieldTypes";
import { ButtonProps } from "@root/components/Button";

// Components
import Form, { formActions, useForm } from "@root/components/Form";

// Utils
import { IAddress } from "@root/components/Field/FormFieldAddress";
import { AddressDrawerProps } from "../AddressTypes";
import isEqual from "lodash/isEqual";
import { FormDrawerWrapper } from "@root/forms/shared/styledComponents";
import AddressAutocomplete from "../AddressAutocomplete";
import { useLoadScript } from "@react-google-maps/api";
import { libraries } from "@root/components/Field/FormFieldMapCoordinates/MapCoordinatesUtils";
import { geocodeByAddress } from "react-places-autocomplete";
import { components, componentsToAddress, initalAddressComponent } from "../utils/addressUtils";
import { MosaicLabelValue } from "@root/types";
import Snackbar from "@root/components/Snackbar";
import Sizes from "@root/theme/sizes";
import Field from "@root/components/Field";

// Layout of the form elements.
const sections = [
	{
		fields: [
			[["address1"]],
			[["address2"]],
			[["address3"]],
			[["country"]],
			[["city"], ["state"], ["postalCode"]],
			[["types"]],
		],
	},
];

const AddressDrawer = (props: AddressDrawerProps): ReactElement => {
	const {
		value,
		onChange,
		addressToEdit,
		isEditing,
		addressIdx,
		handleClose,
		setIsEditing,
		handleUnsavedChanges,
		dialogOpen,
		handleDialogClose,
		addressTypes,
		getOptionsCountries,
		getOptionsStates,
		googleMapsApiKey
	} = props;

	const { dispatch, state } = useForm();
	const [address, setAddress] = useState("");
	const [snackBarLabel, setSnackBarLabel] = useState("");
	const [openSnackBar, setOpenSnackbar] = useState(false);
	const [initialState, setInitialState] = useState(state.data);
	const [apiState, setApiState] = useState<MosaicLabelValue | undefined>();

	const setFieldValue = async (name: string, value: string | MosaicLabelValue, validate = false) => {
		await dispatch(
			formActions.setFieldValue({
				name,
				value,
			})
		);
		if (validate === true) {
			await dispatch(
				formActions.validateField({name})
			);
		}
	};

	useEffect(() => {
		if (state.data !== undefined && initialState !== undefined)
			handleUnsavedChanges(!isEqual(initialState, state.data));
	}, [state.data, initialState]);

	const getFormValues = useCallback(async () => {
		return addressToEdit;
	}, [addressToEdit]);

	/**
   * Clears the selected state every time
   * the country changes.
   */
	useEffect(() => {
		if (isEditing) {
			if (initialState.country && state.data.country && initialState.country.value !== state.data.country.value) {
				setFieldValue("state", undefined);
			}
		} else {
			if (initialState.country?.value !== state.data.country?.value) {
				setFieldValue("state", undefined);
			}
		}
	}, [state?.data?.country, initialState, isEditing]);

	/**
	 * Executed on the form submit if editing mode is true
	 * @returns the list of addresses with the new updates
	 */
	const editAddress = (): IAddress[] => {
		const listOfAddresses = [...value];

		listOfAddresses[addressIdx].address1 = state?.data?.address1?.trim();
		listOfAddresses[addressIdx].address2 = state?.data?.address2?.trim();
		listOfAddresses[addressIdx].address3 = state?.data?.address3?.trim();
		listOfAddresses[addressIdx].city = state?.data?.city?.trim();
		listOfAddresses[addressIdx].postalCode = state?.data?.postalCode?.trim();
		listOfAddresses[addressIdx].country = state?.data?.country;
		listOfAddresses[addressIdx].state = state?.data?.state;
		listOfAddresses[addressIdx].types = state?.data?.types;

		return listOfAddresses;
	};

	/**
	 * Executed on the form submit if editing mode is false
	 * @returns the lists of addresses with the new ones created
	 */
	const addNewAddress = (): IAddress[] => {
		const listOfAddresses = [...value];
		const id = listOfAddresses?.length + 1;

		listOfAddresses.push({
			id: id,
			address1: state?.data?.address1?.trim(),
			address2: state?.data?.address2?.trim(),
			address3: state?.data?.address3?.trim(),
			city: state?.data?.city?.trim(),
			postalCode: state?.data?.postalCode?.trim(),
			country: state?.data?.country,
			state: state?.data?.state,
			types: state?.data?.types,
		});
		setIsEditing(false);

		return listOfAddresses;
	};

	/**
	 * Form submit handler.
	 * It adds a new address or edits an existing one and then
	 * closes the Drawer.
	 */
	const onSubmit = async () => {
		const { valid } = await dispatch(formActions.submitForm());
		if (!valid) return;

		const listOfAddresses = isEditing ? editAddress() : addNewAddress();

		onChange && (await onChange(listOfAddresses));
		handleClose(true);
	};

	useEffect(() => {
		const handleApiStateChange = async () => {
			if (apiState !== undefined) {
				await setFieldValue("state", { label: apiState.label, value: apiState.value }, true);
				setApiState(undefined);
			}
		}

		handleApiStateChange();
	}, [apiState]);

	const autocompleteAddress = async (addressComponents: google.maps.GeocoderAddressComponent[]) => {
		let componentsNotFound = "";
		const addressComponentsMap = {
			route: initalAddressComponent, // => address
			locality: initalAddressComponent, // => city
			postal_town: initalAddressComponent, // => city
			country: initalAddressComponent, // => country
			administrative_area_level_1: initalAddressComponent, // => state
			postal_code: initalAddressComponent, // postal_code
			street_number: initalAddressComponent // street_number
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
			await setFieldValue("country", selectedCountry, true);

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

		await setFieldValue("address1", `${addressComponentsMap.street_number.label} ${addressComponentsMap.route.label}`.trim(), true);
		await setFieldValue("city", addressComponentsMap.locality.label === "" ? addressComponentsMap.postal_town.label : addressComponentsMap.locality.label, true);
		await setFieldValue("postalCode", addressComponentsMap.postal_code.label, true);

		for (const key in addressComponentsMap) {
			if (!addressComponentsMap[key].label) {
				componentsNotFound += componentsToAddress[key] ? `${componentsToAddress[key]}, ` : ""
			}
		}

		setSnackBarLabel(componentsNotFound)
		setOpenSnackbar(componentsNotFound !== "");
	};

	/**
	 * When an option selected from the autocomplete options the
	 * function that fills the fields with the address components
	 * will be executed.
	 * @param value
 	*/
	const onSelect = async (value) => {
		try {
			const results = await geocodeByAddress(value);
			autocompleteAddress(results[0].address_components);
		} catch (error) {
			console.log(error);
		}
	};

	const closeSnackbar = (_event?: SyntheticEvent, reason?: string) => {
		if (reason === "clickaway") {
			return;
		}
		setOpenSnackbar(false);
	};

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
				}}
			>
				<AddressAutocomplete
					onChange={(address) => props.onChange(address)}
					value={props.value ?? ""}
					fieldSize={Sizes.lg}
					onSelect={inputSettings.onSelect}
				/>
			</Field>
		)
	}, []);

	const fields = useMemo(
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
					name: "address1",
					required: true,
					type: Autocomplete,
					label: "Address",
					inputSettings: {
						address,
						setAddress,
						onSelect,
					}
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
				{
					name: "types",
					type: "checkbox",
					label: "Type",
					size: "sm",
					required: true,
					inputSettings: {
						options: addressTypes,
					},
				},
			],
		[addressTypes, state.data.country, apiState]
	);

	const buttons: ButtonProps[] = [
		{
			label: "Cancel",
			onClick: () => handleClose(),
			color: "gray",
			variant: "outlined"
		},
		{
			label: "Save",
			onClick: onSubmit,
			color: "yellow",
			variant: "contained"
		}
	];

	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey,
		libraries,
	});


	if (loadError) return <span>{"Error loading maps"}</span>;
	if (!isLoaded) return <span>{"Loading Maps"}</span>;

	return (
		<FormDrawerWrapper className="address">
			<Form
				onBack={handleClose}
				title='Address Information'
				buttons={buttons}
				data-testid={"address-testid"}
				state={state}
				dispatch={dispatch}
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
