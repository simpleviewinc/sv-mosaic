import * as React from "react";
import { ReactElement, SyntheticEvent, useCallback, useEffect, useMemo, useState } from "react";
import { FieldDef } from "@root/components/Field/FieldTypes";
import { ButtonProps } from "@root/components/Button";

// Components
import Form, { formActions, useForm } from "@root/components/Form";

// Utils
import { TextFieldDef } from "@root/forms/FormFieldText";
import { IAddress } from "@root/forms/FormFieldAddress";
import { AddressDrawerProps } from "../AddressTypes";
import _ from "lodash";
import { FormDrawerWrapper } from "@root/forms/shared/styledComponents";
import AddressAutocomplete from "../AddressAutocomplete";
import { useLoadScript } from "@react-google-maps/api";
import { libraries } from "@root/forms/FormFieldMapCoordinates/MapCoordinatesUtils";
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
			[["city"], ["states"], ["postalCode"]],
			[["type"]],
		],
	},
];

const AddressDrawer = (props: AddressDrawerProps): ReactElement => {
	const {
		value,
		onChange,
		open,
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

	const setFieldValue = async (name: string, value: string | MosaicLabelValue) => {
		await dispatch(
			formActions.setFieldValue({
				name,
				value,
			})
		);
	};

	useEffect(() => {
		if (state.data !== undefined && initialState !== undefined)
			handleUnsavedChanges(!_.isEqual(initialState, state.data));
	}, [state.data, initialState]);

	useEffect(() => {
		let isMounted = true;

		const fillEditingValues = async () => {
			let editingState = {};

			await setFieldValue("address1", addressToEdit.address1);
			editingState = {
				...editingState,
				"address1": addressToEdit.address1,
			};

			if (addressToEdit.address2) {
				await setFieldValue("address2", addressToEdit.address2);
				editingState = {
					...editingState,
					"address2": addressToEdit.address2,
				};
			}

			if (addressToEdit.address3) {
				await setFieldValue("address3", addressToEdit.address3);
				editingState = {
					...editingState,
					"address3": addressToEdit.address3,
				};
			}

			await setFieldValue("city", addressToEdit.city);
			editingState = {
				...editingState,
				"city": addressToEdit.city,
			};


			await setFieldValue("postalCode", addressToEdit.postalCode);
			editingState = {
				...editingState,
				"postalCode": addressToEdit.postalCode,
			};

			await dispatch(
				formActions.setFieldValue({
					name: "type",
					value: addressToEdit.types,
				})
			);

			editingState = {
				...editingState,
				"type": addressToEdit.types,
			};

			await setFieldValue("country", { label: addressToEdit.country?.label, value: addressToEdit.country?.value });

			editingState = {
				...editingState,
				"country": { label: addressToEdit.country?.label, value: addressToEdit.country?.value },
			};

			if (addressToEdit.state) {
				await setFieldValue("states", { label: addressToEdit.state?.label, value: addressToEdit.state?.value });

				editingState = {
					...editingState,
					"states": { label: addressToEdit.state?.label, value: addressToEdit.state?.value },
				};
			}

			setInitialState(editingState);
		};

		if (isEditing && open && isMounted) {
			fillEditingValues();
		}

		return () => {
			isMounted = false;
		}
	}, [addressToEdit]);

	/**
   * Clears the selected state every time
   * the country changes.
   */
	useEffect(() => {
		if (isEditing) {
			if (initialState.country && state.data.country && initialState.country.value !== state.data.country.value) {
				setFieldValue("states", undefined);
			}
		} else {
			if (initialState.country?.value !== state.data.country?.value) {
				setFieldValue("states", undefined);
			}
		}
	}, [state?.data?.country, initialState, isEditing]);

	/**
	 * Executed on the form submit if editing mode is true
	 * @returns the list of addresses with the new updates
	 */
	const editAddress = (): IAddress[] => {
		const listOfAddresses = [...value];

		listOfAddresses[addressIdx].address1 = state?.data?.address1;
		listOfAddresses[addressIdx].address2 = state?.data?.address2;
		listOfAddresses[addressIdx].address3 = state?.data?.address3;
		listOfAddresses[addressIdx].city = state?.data?.city;
		listOfAddresses[addressIdx].postalCode = state?.data?.postalCode.trim();
		listOfAddresses[addressIdx].country = state?.data?.country;
		listOfAddresses[addressIdx].state = state?.data?.states;
		listOfAddresses[addressIdx].types = state?.data?.type;

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
			address1: state?.data?.address1,
			address2: state?.data?.address2,
			address3: state?.data?.address3,
			city: state?.data?.city,
			postalCode: state?.data?.postalCode.trim(),
			country: state?.data?.country,
			state: state?.data?.states,
			types: state?.data?.type,
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
		if (apiState !== undefined)
			setFieldValue("states", { label: apiState.label, value: apiState.value });

		setApiState(undefined);
	}, [apiState]);

	const autocompleteAddress = async (addressComponents: google.maps.GeocoderAddressComponent[]) => {
		let componentsNotFound = "";
		const addressComponentsMap = {
			route: initalAddressComponent, // => address
			locality: initalAddressComponent, // => city
			postal_town: initalAddressComponent, // => city
			country: initalAddressComponent, // => country
			administrative_area_level_1: initalAddressComponent, // => state
			postal_code: initalAddressComponent // postal_code
		};

		for (const addressComponent of addressComponents) {
			const found = addressComponent.types.find(r => components.includes(r));
			if (found) {
				addressComponentsMap[found] = { label: addressComponent.long_name, value: addressComponent.short_name };
			}
		}

		const country = {
			label: addressComponentsMap.country.label,
			value: addressComponentsMap.country.value,
		};

		setInitialState({
			...initialState,
			country,
		});

		const selectedState = (await getOptionsStates(addressComponentsMap.country.value)).find(state => (
			state.label.includes(addressComponentsMap.administrative_area_level_1.label)
		));

		await setFieldValue("address1", addressComponentsMap.route.label);
		await setFieldValue("country", country);
		setApiState(selectedState);
		await setFieldValue("city", addressComponentsMap.locality.label === "" ?  addressComponentsMap.postal_town.label : addressComponentsMap.locality.label);
		await setFieldValue("postalCode", addressComponentsMap.postal_code.label);

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
		() =>
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
				} as FieldDef<TextFieldDef>,
				{
					name: "address3",
					type: "text",
					label: undefined,
					size: "lg",
				} as FieldDef<TextFieldDef>,
				{
					name: "city",
					type: "text",
					label: "City",
					size: "sm",
					required: true,
				} as FieldDef<TextFieldDef>,
				{
					name: "states",
					type: "dropdown",
					label: "States",
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
				} as FieldDef<TextFieldDef>,
				{
					name: "type",
					type: "checkbox",
					label: "Type",
					size: "sm",
					required: true,
					inputSettings: {
						options: addressTypes,
					},
				},
			] as FieldDef[],
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
				title='Address Information'
				buttons={buttons}
				data-testid={"address-testid"}
				state={state}
				dispatch={dispatch}
				sections={sections}
				fields={fields}
				type='drawer'
				dialogOpen={dialogOpen}
				handleDialogClose={handleDialogClose}
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
