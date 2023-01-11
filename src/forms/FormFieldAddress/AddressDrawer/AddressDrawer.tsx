import * as React from "react";
import { ReactElement, useEffect, useMemo, useState } from "react";
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
	} = props;

	const { dispatch, state } = useForm();
	const [initialState, setInitialState] = useState(state.data);

	useEffect(() => {
		if (state.data !== undefined && initialState !== undefined)
			handleUnsavedChanges(!_.isEqual(initialState, state.data));
	}, [state.data, initialState]);

	useEffect(() => {
		let isMounted = true;

		const fillEditingValues = async () => {
			let editingState = {};

			await dispatch(
				formActions.setFieldValue({
					name: "address1",
					value: addressToEdit.address1,
				})
			);

			editingState = {
				...editingState,
				"address1": addressToEdit.address1,
			};

			if (addressToEdit.address2) {
				await dispatch(
					formActions.setFieldValue({
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
				await dispatch(
					formActions.setFieldValue({
						name: "address3",
						value: addressToEdit.address3,
					})
				);

				editingState = {
					...editingState,
					"address3": addressToEdit.address3,
				};
			}

			await dispatch(
				formActions.setFieldValue({
					name: "city",
					value: addressToEdit.city,
				})
			);

			editingState = {
				...editingState,
				"city": addressToEdit.city,
			};

			await dispatch(
				formActions.setFieldValue({
					name: "postalCode",
					value: addressToEdit.postalCode,
				})
			);

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

			await dispatch(
				formActions.setFieldValue({
					name: "country",
					value: { label: addressToEdit.country?.label, value: addressToEdit.country?.value },
				})
			);

			editingState = {
				...editingState,
				"country": { label: addressToEdit.country?.label, value: addressToEdit.country?.value },
			};

			if (addressToEdit.state) {
				await dispatch(
					formActions.setFieldValue({
						name: "states",
						value: { label: addressToEdit.state?.label, value: addressToEdit.state?.value },
					})
				);

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
				dispatch(
					formActions.setFieldValue({name: "states", value: undefined})
				);
			}
		} else {
			if (initialState.country?.value !== state.data.country?.value) {
				dispatch(
					formActions.setFieldValue({name: "states", value: undefined})
				);
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
					type: "text",
					label: "Address",
					size: "lg",
					required: true,
				} as FieldDef<TextFieldDef>,
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
		[addressTypes, state.data.country]
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
		</FormDrawerWrapper>
	);
};

export default AddressDrawer;
