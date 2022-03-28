import * as React from "react";
import { ReactElement, useEffect, useMemo, useState } from "react";
import { FieldDef } from "@root/components/Field/FieldTypes";

// Components
import Form from "@root/forms/Form/Form";

// Utils
import countriesWithStates from "@root/forms/FormFieldAddress/countriesStates.json";
import { actions, useForm } from "@root/forms/Form/formUtils";
import { TextFieldDef } from "@root/forms/FormFieldText";
import { Sizes } from "@root/theme/sizes";
import { IAddress } from "@root/forms/FormFieldAddress";
import { AddressDrawerProps } from "../AddressTypes";
import _ from "lodash";

// Layout of the form elements.
const sections = [
	{
		fields: [
			[["country"]],
			[["address1"]],
			[["address2"]],
			[["address3"]],
			[["city"], ["states"], ["postalCode"]],
			[["type"]],
		],
	},
];

const countries = countriesWithStates?.map((country) => ({
	title: country.name,
	value: country.iso2,
}));

const addressTypes = [
	{
		label: "Physical",
		value: "physical",
	},
	{
		label: "Billing",
		value: "billing",
	},
	{
		label: "Shipping",
		value: "shipping",
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
	} = props;

	const { dispatch, state, registerFields, registerOnSubmit } = useForm();
	const [initialState, setInitialState] = useState(state.data);

	useEffect(() => {
		if (state.data !== undefined && initialState !== undefined)
			handleUnsavedChanges(!_.isEqual(initialState, state.data));
	}, [state.data, initialState]);

	useEffect(() => {
		if (isEditing && open) {
			let editingState = {};

			const fullCountryData = countriesWithStates?.find(
				(c) => c.iso2 === addressToEdit?.country
			);

			const fullStateData = fullCountryData.states.find(
				(s) => s.state_code === addressToEdit?.state
			);

			dispatch(
				actions.setFieldValue({
					name: "address1",
					value: addressToEdit.address1,
				})
			);

			editingState = {
				...editingState,
				"address1": addressToEdit.address1,
			};

			if (addressToEdit.address2) {
				dispatch(
					actions.setFieldValue({
						name: "address2",
						value: addressToEdit.address2,
					})
				);

				editingState = {
					...editingState,
					"address2": addressToEdit.address2,
				};
			}
			if (addressToEdit.address3) {
				dispatch(
					actions.setFieldValue({
						name: "address3",
						value: addressToEdit.address3,
					})
				);

				editingState = {
					...editingState,
					"address3": addressToEdit.address3,
				};
			}
			dispatch(
				actions.setFieldValue({
					name: "city",
					value: addressToEdit.city,
				})
			);

			editingState = {
				...editingState,
				"city": addressToEdit.city,
			};

			dispatch(
				actions.setFieldValue({
					name: "postalCode",
					value: addressToEdit.postalCode,
				})
			);

			editingState = {
				...editingState,
				"postalCode": addressToEdit.postalCode,
			};

			dispatch(
				actions.setFieldValue({
					name: "type",
					value: addressToEdit.types,
				})
			);

			editingState = {
				...editingState,
				"type": addressToEdit.types,
			};

			dispatch(
				actions.setFieldValue({
					name: "country",
					value: fullCountryData?.iso2,
				})
			);

			editingState = {
				...editingState,
				"country": { title: fullCountryData?.name, value: fullCountryData?.iso2 },
			};

			dispatch(
				actions.setFieldValue({
					name: "states",
					value: fullStateData?.state_code,
				})
			);

			editingState = {
				...editingState,
				"states": {
					title: fullStateData?.name,
					value: fullStateData?.state_code,
				},
			};

			setInitialState(editingState);
		}
	}, []);

	/**
   * Gets the list of states for the
   * selected country
   */
	const listOfStates = useMemo(() => {
		const selectedCountry = countriesWithStates?.find(
			(c) => c.iso2 === state?.data?.country
		);

		if (selectedCountry) {
			return selectedCountry.states.map((state) => ({ title: state.name, value: state.state_code }));
		}

		return [];
	}, [state?.data?.country]);

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
		listOfAddresses[addressIdx].postalCode = state?.data?.postalCode;
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
			postalCode: state?.data?.postalCode,
			country: state?.data?.country,
			state: state?.data?.states,
			types: state?.data?.type,
		});
		setIsEditing(false);

		return listOfAddresses;
	};

	/**
   * Form submit handler. It adds or edits an address and closes the modal.
   * @param e
   */
	const onSubmit = async () => {
		const listOfAddresses = isEditing ? editAddress() : addNewAddress();

		onChange && await onChange(listOfAddresses);
		handleClose(true);
	};

	const fields = useMemo(
		() =>
			[
				{
					name: "country",
					type: "dropdown",
					label: "Country",
					size: Sizes.sm,
					required: true,
					inputSettings: {
						options: countries,
						size: Sizes.sm,
					},
				},
				{
					name: "address1",
					type: "text",
					label: "Address",
					size: Sizes.lg,
					required: true,
					inputSettings: {
						size: Sizes.lg,
					},
				} as FieldDef<TextFieldDef>,
				{
					name: "address2",
					type: "text",
					label: undefined,
					size: Sizes.lg,
					inputSettings: {
						size: Sizes.lg,
					},
				} as FieldDef<TextFieldDef>,
				{
					name: "address3",
					type: "text",
					label: undefined,
					size: Sizes.lg,
					inputSettings: {
						size: Sizes.lg,
					},
				} as FieldDef<TextFieldDef>,
				{
					name: "city",
					type: "text",
					label: "City",
					size: Sizes.sm,
					required: true,
					inputSettings: {
						size: Sizes.sm,
					},
				} as FieldDef<TextFieldDef>,
				{
					name: "states",
					type: "dropdown",
					label: "States",
					size: Sizes.sm,
					inputSettings: {
						options: listOfStates,
						size: Sizes.sm,
					},
				},
				{
					name: "postalCode",
					type: "text",
					label: "Postal Code",
					size: Sizes.sm,
					required: true,
					inputSettings: {
						type: "number",
						size: Sizes.sm,
					},
				} as FieldDef<TextFieldDef>,
				{
					name: "type",
					type: "checkbox",
					label: "Type",
					size: Sizes.sm,
					required: true,
					inputSettings: {
						options: addressTypes,
						size: Sizes.sm,
					},
				},
			] as FieldDef[],
		[countries, listOfStates, addressTypes]
	);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

	return (
		<Form
			title='Address Information'
			data-testid={"address-testid"}
			state={state}
			dispatch={dispatch}
			sections={sections}
			fields={fields}
			type='drawer'
			onCancel={handleClose}
			onSubmit={async () => await onSubmit()}
			submitButtonAttrs={{ label: "Save" }}
			cancelButtonAttrs={{ label: "Cancel" }}
			dialogOpen={dialogOpen}
			handleDialogClose={handleDialogClose}
		/>
	);
};

export default AddressDrawer;
