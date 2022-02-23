import * as React from 'react';
import { ReactElement, useCallback, useEffect, useMemo } from 'react';
import { FieldDef } from '@root/components/Field/FieldTypes';

// Components
import Modal from '@root/components/Modal';

// Utils
import * as countriesWithStates from '@root/forms/Address/countriesStates.json';
import { actions, useForm } from '@root/forms/Form/formUtils';
import { TextFieldDef } from '@root/forms/FormFieldText';
import { Sizes } from '@root/theme/sizes';
import { IAddress } from '@root/forms/Address';
import { AddressModalProps } from '../AddressTypes';

// Layout of the form elements.
const sections = [
	{
		fields: [
			[['country']],
			[['address1']],
			[['address2']],
			[['address3']],
			[['city'], ['states'], ['postalCode']],
			[['type']],
		],
	},
];

const countries = countriesWithStates.map((country) => ({
	title: country.name,
	value: country.iso2,
}));

const addressTypes = [
	{
		label: 'Physical',
		value: 'physical',
	},
	{
		label: 'Billing',
		value: 'billing',
	},
	{
		label: 'Shipping',
		value: 'shipping',
	},
];

const AddressModal = (props: AddressModalProps): ReactElement => {
	const {
		addressToEdit,
		isEditing,
		addressIdx,
		open,
		setOpen,
		onChange,
		setIsEditing,
		value,
	} = props;

	const { dispatch, state, registerFields, registerOnSubmit } = useForm();

	useEffect(() => {
		if (isEditing && open) {
			const fullCountryData = countriesWithStates.find(
				(c) => c.iso2 === addressToEdit?.country?.value
			);
			const fullStateData = fullCountryData.states.find(
				(s) => s.state_code === addressToEdit?.state?.value
			);
			dispatch(
				actions.setFieldValue({
					name: 'address1',
					value: addressToEdit.address1,
				})
			);

			if (addressToEdit.address2)
				dispatch(
					actions.setFieldValue({
						name: 'address2',
						value: addressToEdit.address2,
					})
				);

			if (addressToEdit.address3)
				dispatch(
					actions.setFieldValue({
						name: 'address3',
						value: addressToEdit.address3,
					})
				);

			dispatch(
				actions.setFieldValue({
					name: 'city',
					value: addressToEdit.city,
				})
			);

			dispatch(
				actions.setFieldValue({
					name: 'postalCode',
					value: addressToEdit.postalCode,
				})
			);

			dispatch(
				actions.setFieldValue({
					name: 'type',
					value: addressToEdit.types,
				})
			);

			dispatch(
				actions.setFieldValue({
					name: 'country',
					value: { title: fullCountryData?.name, value: fullCountryData?.iso2 },
				})
			);

			dispatch(
				actions.setFieldValue({
					name: 'states',
					value: {
						title: fullStateData?.name,
						value: fullStateData?.state_code,
					},
				})
			);
		}
	}, []);

	/**
   * Gets the list of states for the
   * selected country
   */
	const listOfStates = useMemo(() => {
		const selectedCountryTest = countriesWithStates.find(
			(c) => c.name === state?.data?.country?.title
		);

		if (selectedCountryTest) {
			return selectedCountryTest.states.map((state) => ({
				title: state.name,
				value: state.state_code,
			}));
		}

		return [];
	}, [state?.data?.country]);

	/**
   * Executed on the form submit if editing mode is true
   * @returns the list of addresses with the new updates
   */
	const editAddress = (): IAddress[]  => {
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
	const onSubmit = useCallback(() => {
		const listOfAddresses = isEditing ? editAddress() : addNewAddress();

		onChange && onChange(listOfAddresses);
		handleClose();
	}, [state.validForm]);

	/**
   * Closes the modal and resets the values for
   * form field.
   */
	const handleClose = () => {
		dispatch(actions.resetForm());
		setOpen(false);
	};

	const fields = useMemo(
		() =>
			[
				{
					name: 'country',
					type: 'dropdown',
					label: 'Country',
					size: Sizes.sm,
					required: true,
					inputSettings: {
						options: countries,
						size: Sizes.sm,
					},
				},
				{
					name: 'address1',
					type: 'text',
					label: 'Address',
					size: Sizes.lg,
					required: true,
					inputSettings: {
						size: Sizes.lg,
					},
				} as FieldDef<TextFieldDef>,
				{
					name: 'address2',
					type: 'text',
					label: undefined,
					size: Sizes.lg,
					inputSettings: {
						size: Sizes.lg,
					},
				} as FieldDef<TextFieldDef>,
				{
					name: 'address3',
					type: 'text',
					label: undefined,
					size: Sizes.lg,
					inputSettings: {
						size: Sizes.lg,
					},
				} as FieldDef<TextFieldDef>,
				{
					name: 'city',
					type: 'text',
					label: 'City',
					size: Sizes.sm,
					required: true,
					inputSettings: {
						size: Sizes.sm,
					},
				} as FieldDef<TextFieldDef>,
				{
					name: 'states',
					type: 'dropdown',
					label: 'States',
					size: Sizes.sm,
					inputSettings: {
						options: listOfStates,
						size: Sizes.sm,
					},
				},
				{
					name: 'postalCode',
					type: 'text',
					label: 'Postal Code',
					size: Sizes.sm,
					required: true,
					inputSettings: {
						type: 'number',
						size: Sizes.sm,
					},
				} as FieldDef<TextFieldDef>,
				{
					name: 'type',
					type: 'checkbox',
					label: 'Type',
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
		<Modal
			title='Address Information'
			state={state}
			dispatch={dispatch}
			sections={sections}
			fields={fields}
			open={open}
			onCancel={handleClose}
			onSubmit={onSubmit}
			submitButtonAttrs={{ children: 'Save' }}
			cancelButtonAttrs={{ children: 'Cancel' }}
		/>
	);
};

export default AddressModal;
