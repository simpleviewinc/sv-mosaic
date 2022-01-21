import * as React from 'react';
import { memo, ReactElement, useState, useMemo, useCallback, HTMLAttributes } from 'react';

// Components
import Button from '@root/forms/Button';
import Modal from '@root/components/Modal';

// Styles
import { AddAddressWrapper, FlexContainer, StyledLabel } from './Address.styled';
import { Sizes } from '@root/theme/sizes';

// Utils
import * as countriesWithStates from './countriesStates.json';
import AddressCard from './AddressCard';
import { actions, useForm } from '../Form/formUtils';
import { FieldDef, MosaicFieldProps } from '@root/components/Field';
import { TextFieldDef } from '../FormFieldText';
import { IAddress } from '.';

const countries = countriesWithStates.map((country) => ({
	title: country.name,
	value: country.iso2,
}));

const Address = (props: MosaicFieldProps<any, IAddress[]>): ReactElement => {
	const {
		fieldDef,
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
	const [isEditing, setIsEditing] = useState(false);

	// States of the form values
	const [addressIdx, setAddressIdx] = useState(null);

	/**
	 * Gets the lists of states options for the 
	 * selected country
	 */
	const listOfStates = useMemo(() => {
		let selectedCountryTest = countriesWithStates.filter(c => c.name === modalReducer?.state?.data?.country?.title)[0];
		if (selectedCountryTest) {
			return selectedCountryTest.states.map(state => ({
				title: state.name,
				value: state.state_code,
			}));
		}
		return [];
	}, [modalReducer?.state?.data?.country]);

	const fields = useMemo(
		() =>
			[
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
					name: "address1",
					type: 'text',
					label: "Address",
					size: Sizes.lg,
					required: true,
					inputSettings: {
						size: Sizes.lg,
					}
				} as FieldDef<TextFieldDef>,
				{
					name: "address2",
					type: 'text',
					label: undefined,
					size: Sizes.lg,
					inputSettings: {
						size: Sizes.lg,
					}
				} as FieldDef<TextFieldDef>,
				{
					name: "address3",
					type: 'text',
					label: undefined,
					size: Sizes.lg,
					inputSettings: {
						size: Sizes.lg,
					}
				} as FieldDef<TextFieldDef>,
				{
					name: "city",
					type: 'text',
					label: "City",
					size: Sizes.sm,
					required: true,
					inputSettings: {
						size: Sizes.sm,
					}
				} as FieldDef<TextFieldDef>,
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
						type: 'number',
						size: Sizes.sm,
					}
				} as FieldDef<TextFieldDef>,
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
			] as FieldDef[],
		[countries, listOfStates, addressTypes]
	);

	const sections = useMemo(() => [
		{
			fields: [
				[['country']],
				[['address1']],
				[['address2']],
				[['address3']],
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
		setIsEditing(false);
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

		if (listOfAddresses.length > 0) {
			onChange(listOfAddresses);
		} else {
			onChange(undefined);
		}
	};

	/**
	 * Opens the modal in editing mode and sets the
	 * form fields values with the data of the address 
	 * to be edited.
	 * @param addressToEdit 
	 */
	const showEditModal = (addressToEdit, addressIndex) => {
		const {
			address1,
			address2,
			address3,
			city,
			postalCode,
			types,
			country,
			state,
		} = addressToEdit;

		const fullCountryData = countriesWithStates.filter(c => c.iso2 === country)[0];
		const fullStateData = fullCountryData.states.filter(s => s.state_code === state)[0];


		modalReducer?.dispatch(
			actions.setFieldValue({
				name: 'address1',
				value: address1,
			})
		);

		if (address2)
			modalReducer?.dispatch(
				actions.setFieldValue({
					name: 'address2',
					value: address2,
				})
			);

		if (address3)
			modalReducer?.dispatch(
				actions.setFieldValue({
					name: 'address3',
					value: address3,
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
				value: { title: fullCountryData.name, value: fullCountryData.iso2 },
			})
		);

		modalReducer?.dispatch(
			actions.setFieldValue({
				name: 'states',
				value: { title: fullStateData.name, value: fullStateData.state_code },
			})
		);
		setAddressIdx(addressIndex);
		setIsEditing(true);
		setOpen(true);
	};

	/**
	 * Executed on the form submit if editing mode is true
	 * @returns the list of addresses with the new updates
	 */
	const editAddress = () => {
		const listOfAddresses = [...addresses];

		listOfAddresses[addressIdx].address1 = modalReducer?.state?.data?.address1;
		listOfAddresses[addressIdx].address2 = modalReducer?.state?.data?.address2;
		listOfAddresses[addressIdx].address3 = modalReducer?.state?.data?.address3;
		listOfAddresses[addressIdx].city = modalReducer?.state?.data?.city;
		listOfAddresses[addressIdx].postalCode = modalReducer?.state?.data?.postalCode;
		listOfAddresses[addressIdx].country = modalReducer?.state?.data?.country.value;
		listOfAddresses[addressIdx].state = modalReducer?.state?.data?.states?.value;
		listOfAddresses[addressIdx].types = modalReducer?.state?.data?.type;

		return listOfAddresses;
	};

	/**
	 * Executed on the form submit if editing mode is false
	 * @returns the lists of addresses with the new ones created
	 */
	const addNewAddress = () => {
		const listOfAddresses = [...addresses];
		const id = listOfAddresses?.length + 1;
		listOfAddresses.push({
			id: id,
			address1: modalReducer?.state?.data?.address1,
			address2: modalReducer?.state?.data?.address2,
			address3: modalReducer?.state?.data?.address3,
			city: modalReducer?.state?.data?.city,
			postalCode: modalReducer?.state?.data?.postalCode,
			country: modalReducer?.state?.data?.country.value,
			state: modalReducer?.state?.data?.states?.value,
			types: modalReducer?.state?.data?.type,
		});
		setIsEditing(false);

		return listOfAddresses;
	};

	/**
	 * Form submit handler. It adds or edits an address and closes the modal.
	 * @param e 
	 */
	const handleFormSubmit = useCallback(() => {
		const listOfAddresses = isEditing ? editAddress() : addNewAddress();

		const addressesFullName = listOfAddresses.map(address => {
			const fullCountryData = countriesWithStates.filter(c => c.iso2 === address.country)[0];
			const fullStateData = fullCountryData.states.filter(s => s.state_code === address.state)[0];

			return {
				...address,
				countryName: fullCountryData.name,
				stateName: fullStateData.name,
			};
		});

		onChange && onChange(listOfAddresses);
		setAddresses(addressesFullName);
		handleClose();
	}, [modalReducer?.state.validForm]);

	useMemo(() => {
		modalReducer?.registerOnSubmit(handleFormSubmit);
	}, [handleFormSubmit, modalReducer?.registerOnSubmit]);

	return (
		<div style={{ paddingLeft: '20px' }}>
			<StyledLabel>{fieldDef?.label}</StyledLabel>
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
