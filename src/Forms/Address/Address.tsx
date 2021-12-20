import * as React from 'react';
import { memo, ReactElement, useState, useMemo, useCallback, HTMLAttributes } from 'react';

// Components
import Button from '@root/forms/Button';
import Modal from '@root/components/Modal';

// Types
import { AddressProps } from './AddressTypes';

// Styles
import { AddAddressWrapper, FlexContainer, StyledLabel } from './Address.styled';
import { Sizes } from '@root/theme/sizes';

// Utils
import * as countriesWithStates from './countriesStates.json';
import AddressCard from './AddressCard';
import { actions, useForm } from '../Form/formUtils';
import { FieldDefProps } from '@root/components/Field';

const Address = (props: AddressProps & HTMLAttributes<HTMLInputElement>): ReactElement => {
	const {
		label,
		onChange
	} = props;

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

	const modalReducer = useForm();

	// State variables
	const [addresses, setAddresses] = useState([]);
	const [open, setOpen] = useState(false);
	const [countries, setCountries] = useState([]);
	const [isEditing, setIsEditting] = useState(false);

	// States of the form values
	const [addressIdx, setAddressIdx] = useState(null);

	/**
	 * Gets the lists of states options for the 
	 * selected country
	 */
	const listOfStates = useMemo(() => {
		let selectedCountryTest = modalReducer?.state?.data?.country;
		if (selectedCountryTest) {
			return selectedCountryTest.value.states.map(state => ({
				title: state.name,
				value: state,
			}));
		}
		return [];
	}, [modalReducer?.state?.data?.country]);

	const fields = useMemo(() => [
		{
			name: "country",
			type: 'dropdown',
			label: "Country",
			size: Sizes.sm,
			required: true,
			inputSettings: {
				options: countries,
				size: Sizes.sm,
			}
		},
		{
			name: "address",
			type: 'text',
			label: "Address",
			size: Sizes.lg,
			required: true,
			inputSettings: {
				size: Sizes.lg,
			}
		},
		{
			name: "city",
			type: 'text',
			label: "City",
			size: Sizes.sm,
			required: true,
			inputSettings: {
				size: Sizes.sm,
			}
		},
		{
			name: "states",
			type: 'dropdown',
			label: "States",
			size: Sizes.sm,
			required: true,
			inputSettings: {
				options: listOfStates,
				size: Sizes.sm,
			}
		},
		{
			name: "postalCode",
			type: 'text',
			label: "Postal Code",
			size: Sizes.sm,
			required: true,
			inputSettings: {
				size: Sizes.sm,
			}
		},
		{
			name: "type",
			type: 'checkbox',
			label: "Type",
			size: Sizes.sm,
			required: true,
			inputSettings: {
				options: addressTypes,
				size: Sizes.sm,
			}
		},
	] as FieldDefProps[], [countries, listOfStates]);

	const sections = useMemo(() => [
		{
			fields: [
				[['country']],
				[['address']],
				[['city'], ['states'], ['postalCode']],
				[['type']]
			]
		},
	], []);

	useMemo(() => {
		modalReducer?.registerFields(fields);
	}, [fields, modalReducer?.registerFields]);

	/**
	 * Opens the modal to create an address card 
	 * and sets editing mode to false.
	 */
	const addAddressHandler = () => {
		setIsEditting(false);
		setOpen(true);
	};

	/**
	 * Closes the modal and resets the values for
	 * form field.
	 */
	const handleClose = () => {
		modalReducer?.dispatch(
			actions.resetForm()
		);
		setOpen(false);
	};

	/**
	 * Removes the clicked address card from the list. 
	 * @param addressToRemove 
	 */
	const removeAddressHandler = (addressIndex) => {
		const listOfAddresses = [...addresses];
		listOfAddresses.splice(addressIndex, 1);
		setAddresses(listOfAddresses);
		onChange(listOfAddresses);
	};

	/**
	 * Opens the modal in editing mode and sets the
	 * form fields values with the data of the address 
	 * to be edited.
	 * @param addressToEdit 
	 */
	const showEditModal = (addressToEdit, addressIndex) => {
		const {
			address,
			city,
			postalCode,
			types,
			country,
			state,
		} = addressToEdit;

		modalReducer?.dispatch(
			actions.setFieldValue({
				name: 'address',
				value: address,
			})
		);

		modalReducer?.dispatch(
			actions.setFieldValue({
				name: 'city',
				value: city,
			})
		);

		modalReducer?.dispatch(
			actions.setFieldValue({
				name: 'postalCode',
				value: postalCode,
			})
		);

		modalReducer?.dispatch(
			actions.setFieldValue({
				name: 'type',
				value: types,
			})
		);

		modalReducer?.dispatch(
			actions.setFieldValue({
				name: 'country',
				value: country,
			})
		);

		modalReducer?.dispatch(
			actions.setFieldValue({
				name: 'states',
				value: state,
			})
		);
		setAddressIdx(addressIndex);
		setIsEditting(true);
		setOpen(true);
	};

	/**
	 * Executed on the form submit if editing mode is true
	 * @returns the list of addresses with the new updates
	 */
	const editAddress = () => {
		const listOfAddresses = [...addresses];

		listOfAddresses[addressIdx].address = modalReducer?.state?.data?.address;
		listOfAddresses[addressIdx].city = modalReducer?.state?.data?.city;
		listOfAddresses[addressIdx].postalCode = modalReducer?.state?.data?.postalCode;
		listOfAddresses[addressIdx].country = modalReducer?.state?.data?.country;
		listOfAddresses[addressIdx].state = modalReducer?.state?.data?.states;
		listOfAddresses[addressIdx].types = modalReducer?.state?.data?.type;

		return listOfAddresses;
	};

	/**
	 * Executed on the form submit if editing mode is false
	 * @returns the lists of addresses with the new ones created
	 */
	const addNewAddress = () => {
		const listOfAddresses = [...addresses];
		const id = listOfAddresses.length + 1;
		listOfAddresses.push({
			id: id,
			address: modalReducer?.state?.data?.address,
			city: modalReducer?.state?.data?.city,
			postalCode: modalReducer?.state?.data?.postalCode,
			country: modalReducer?.state?.data?.country,
			state: modalReducer?.state?.data?.states,
			types: modalReducer?.state?.data?.type,
		});
		setIsEditting(false);

		return listOfAddresses;
	};

	/**
	 * Form submit handler. It adds or edits an address and closes the modal.
	 * @param e 
	 */
	const handleFormSubmit = useCallback(() => {
		const listOfAddresses = isEditing ? editAddress() : addNewAddress();
		onChange && onChange(listOfAddresses);
		setAddresses(listOfAddresses);
		handleClose();
	}, [modalReducer?.state.validForm]);

	useMemo(() => {
		modalReducer?.registerOnSubmit(handleFormSubmit);
	}, [handleFormSubmit, modalReducer?.registerOnSubmit]);

	useMemo(() => {
		setCountries(
			countriesWithStates.map((country) => ({
				title: country.name,
				value: country,
			}))
		);
	}, []);

	return (
		<div style={{ paddingLeft: '20px' }}>
			<StyledLabel>{label}</StyledLabel>
			<FlexContainer>
				<AddAddressWrapper>
					<Button buttonType='secondary' onClick={addAddressHandler}>
						ADD ADDRESS
					</Button>
				</AddAddressWrapper>
				{addresses.map((address, idx) => (
					<AddressCard key={`${address.address}-${idx}`} addressIndex={idx} address={address} onEdit={showEditModal} onRemoveAddress={removeAddressHandler} />
				))}
			</FlexContainer>
			<Modal
				title='Address Information'
				state={modalReducer?.state}
				dispatch={modalReducer?.dispatch}
				fields={fields}
				sections={sections}
				open={open}
				onCancel={handleClose}
				cancelButtonAttrs={{ children: 'Cancel' }}
				onSubmit={handleFormSubmit}
				submitButtonAttrs={{ children: 'Save' }}
			/>
		</div>
	);
};

export default memo(Address);
