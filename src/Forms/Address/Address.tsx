import * as React from 'react';
import { memo, ReactElement, useState, useMemo } from 'react';

// Components
import Button from '@root/forms/Button';
import FormFieldCheckbox from '@root/forms/FormFieldCheckbox';
import FormFieldDropdownSingleSelection from '@root/forms/FormFieldDropdownSingleSelection';
import Modal from '@root/components/Modal';
import TextField from '@root/forms/FormFieldText';

// Types
import { AddressProps } from './AddressTypes';

// Styles
import { AddAddressWrapper, FlexContainer, StyledLabel } from './Address.styled';
import { Sizes } from '@root/theme/sizes';

// Utils
import * as countriesWithStates from './countriesStates.json';
import AddressCard from './AddressCard';

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

const data = [
	{
		address: 'Test 1',
		city: 'Guadalajara',
		country: {title: 'Mexico', value: {}},
		postalCode: '1',
		state: {title: 'Jalisco', value: {}},
		type: 'physical',
		id: 1
	},
	{
		address: 'Test 2',
		city: 'Guadalajara',
		country: {title: 'Mexico', value: {}},
		postalCode: '1',
		state: {title: 'Jalisco', value: {}},
		type: 'physical',
		id: 2
	},
];

const Address = (props: AddressProps): ReactElement => {
	const { label } = props;

	// State variables
	const [addresses, setAddresses] = useState(data);
	const [open, setOpen] = useState(false);
	const [countries, setCountries] = useState([]);
	const [isEditing, setIsEditting] = useState(false);

	// Form states
	const [id, setId] = useState(null);
	const [addressTypesChecked, setAddressTypesChecked] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState({
		title: '',
		value: {},
	});
	const [selectedState, setSelectedState] = useState({
		title: '',
		value: {}
	});
	const [textFields, setTextFields] = useState({
		address: '',
		city: '',
		postalCode: '',
	});

	const handleCountryChange = (_event, option) => {
		setSelectedCountry(option);
	};

	const listOfStates = useMemo(() => {
		if (selectedCountry?.title) {
			return countriesWithStates
				.find((country) => country.name === selectedCountry.title)
				.states.map((state) => ({
					title: state.name,
					value: state,
				}));
		}
		return [];
	}, [selectedCountry?.title]);

	const handleStateChange = (_event, option) => {
		setSelectedState(option);
	};

	const handleAddressTypeChange = (billingTypesChecked) => {
		setAddressTypesChecked(billingTypesChecked);
	};

	let submitDisabled = true;

	if (addressTypesChecked.length > 0) {
		submitDisabled = false;
	}

	const addAddressHandler = () => {
		setIsEditting(false);
		setOpen(true);
	};

	const handleClose = () => {
		setTextFields({
			address: '',
			city: '',
			postalCode: '',
		});
		setAddressTypesChecked([]);
		setSelectedCountry({
			title: '',
			value: {}
		});
		setSelectedState({
			title: '',
			value: {}
		});
		setOpen(false);
	};

	const handleTextFieldsChange = (e) => {
		setTextFields({
			...textFields,
			[e.target.name]: e.target.value
		});
	};

	const removeAddressHandler = (addressToRemove) => {
		let index = 0;
		const listOfAddresses = [...addresses];
		listOfAddresses.map((address) => {
			if (addressToRemove.id === address.id) {
				listOfAddresses.splice(index, 1);
			}
			index++;
		});
		setAddresses(listOfAddresses);    
	};

	const showEditModal = (addressToEdit) => {
		setTextFields({
			address: addressToEdit.address,
			city: addressToEdit.city,
			postalCode: addressToEdit.postalCode,
		});
		setAddressTypesChecked([addressToEdit.type]);
		setSelectedCountry(addressToEdit.country);
		setSelectedState(addressToEdit.state);
		setId(addressToEdit.id);
		setIsEditting(true);
		setOpen(true);
	};

	const editAddress = () => {
		let index = 0;
		const listOfAddresses = [...addresses];

		listOfAddresses.map((address) => {
			if (id === address.id) {
				listOfAddresses[index].address = textFields.address;
				listOfAddresses[index].city = textFields.city;
				listOfAddresses[index].postalCode = textFields.postalCode;
				listOfAddresses[index].country = selectedCountry;
				listOfAddresses[index].state = selectedState;
				addressTypesChecked.forEach(addressType => {
					listOfAddresses[index].type = addressType;
				});
			}
			index++;
		});

		return listOfAddresses;
	};

	const addNewAddress = () => {
		const listOfAddresses = [...addresses];
		addressTypesChecked.forEach(addressType => {
			const id = listOfAddresses.length + 1;
			listOfAddresses.push({
				id: id,
				...textFields,
				country: selectedCountry,
				state: selectedState,
				type: addressType,
			});
		})
		setIsEditting(false);

		return listOfAddresses;
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		const listOfAddresses = isEditing ? editAddress() : addNewAddress();
		setAddresses(listOfAddresses);
		handleClose();
	};

	useMemo(() => {
		setCountries(
			countriesWithStates.map((country) => ({
				title: country.name,
				value: country,
			}))
		);
	}, []);

	return (
		<div>
			<StyledLabel>{label}</StyledLabel>
			<FlexContainer>
				<AddAddressWrapper>
					<Button buttonType='secondary' onClick={addAddressHandler}>
            ADD ADDRESS
					</Button>
				</AddAddressWrapper>
				{addresses.map((address, idx) => (
					<AddressCard key={`${address.type}-${idx}`} address={address} onEdit={showEditModal} onRemoveAddress={removeAddressHandler}/>
				))}
			</FlexContainer>
			<Modal
				dialogTitle='Address Information'
				form='address_form'
				open={open}
				onClose={handleClose}
				primaryBtnLabel='Save'
				secondaryAction={handleClose}
				secondaryBtnLabel='Cancel'
				submitDisabled={submitDisabled}
			>
				<form id='address_form' onSubmit={handleFormSubmit}>
					<FormFieldDropdownSingleSelection
						options={countries}
						label='Country'
						size={Sizes.sm}
						onChange={handleCountryChange}
						required
						value={selectedCountry}
					/>
					<TextField
						label='Address'
						name='address'
						size={Sizes.lg}
						onChange={handleTextFieldsChange}
						required
						value={textFields.address}
					/>
					<FlexContainer>
						<TextField
							label='City'
							name='city'
							size={Sizes.sm}
							onChange={handleTextFieldsChange}
							required
							value={textFields.city}
						/>
						<FormFieldDropdownSingleSelection
							options={listOfStates}
							label='States'
							onChange={handleStateChange}
							required
							size={Sizes.sm}
							value={selectedState}
						/>
						<TextField
							label='Postal Code'
							name='postalCode'
							size={Sizes.sm}
							onChange={handleTextFieldsChange}
							required
							value={textFields.postalCode}
						/>
					</FlexContainer>
					<FormFieldCheckbox
						label='Type'
						checked={addressTypesChecked}
						options={addressTypes}
						onChange={handleAddressTypeChange}
						required
					/>
				</form>
			</Modal>
		</div>
	);
};

export default memo(Address);
