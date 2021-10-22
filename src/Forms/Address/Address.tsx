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
import { AddAddressWrapper, Row, StyledLabel } from './Address.styled';
import { Sizes } from '@root/theme/sizes';

// Utils
import * as countriesWithStates from './countriesStates.json';

const billingTypes = [
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

const Address = (props: AddressProps): ReactElement => {
	const { label } = props;

	// State variables
	const [streetAddress, setStreetAddress] = useState('');
	const [city, setCity] = useState('');
	const [postalCode, setPostalCode] = useState('');
	const [open, setOpen] = useState(false);
	const [countries, setCountries] = useState([]);
	const [billingTypesChecked, setBillingTypesChecked] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState('');
	const [selectedState, setSelectedState] = useState('');

	const handleCountryChange = (_event, option) => {
		setSelectedCountry(option?.title);
	};

	let listOfStates = [];

	const handleStateChange = (_event, option) => {
		setSelectedState(option?.title)
	};
  
	if (selectedCountry) {
		listOfStates = countriesWithStates
			.find((country) => country.name === selectedCountry)
			.states.map((state) => ({
				title: state.name,
				value: state,
			}));
	}

	const handleAddressChange = (event) => {
		setStreetAddress(event.target.value);
	};

	const handleCityChange = (event) => {
		setCity(event.target.value);
	};

	const handlePostalCodeChange = (event) => {
		setPostalCode(event.target.value);
	};

	const handleBillingTypeChange = (billingTypesChecked) => {
		setBillingTypesChecked(billingTypesChecked);
	};

	const addAddressHandler = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const saveAddress = () => {
		setOpen(false);
	};

	const handleFormSubmit = (e) => {
		alert('Submit form')
		e.preventDefault();
	}

	useMemo(() => {
		setCountries(
			countriesWithStates.map((country) => ({
				title: country.name,
				value: country,
			}))
		);
	}, []);

	console.log("Selected state: ", selectedState)

	return (
		<div>
			<StyledLabel>{label}</StyledLabel>
			<AddAddressWrapper>
				<Button buttonType='secondary' onClick={addAddressHandler}>
          ADD ADDRESS
				</Button>
			</AddAddressWrapper>
			<Modal
				dialogTitle='Address Information'
				form='address_form'
				open={open}
				onClose={handleClose}
				primaryAction={saveAddress}
				primaryBtnLabel='Save'
				secondaryAction={handleClose}
				secondaryBtnLabel='Cancel'
			>
				<form id='address_form' onSubmit={handleFormSubmit}>
					<FormFieldDropdownSingleSelection
						options={countries}
						label='Country'
						size={Sizes.sm}
						onChange={handleCountryChange}
					/>
					<TextField
						label='Address'
						htmlFor='text-input'
						size={Sizes.lg}
						onChange={handleAddressChange}
						value={streetAddress}
					/>
					<Row>
						<TextField
							label='City'
							htmlFor='text-input'
							size={Sizes.sm}
							onChange={handleCityChange}
							value={city}
						/>
						<FormFieldDropdownSingleSelection
							options={listOfStates}
							label='States'
							onChange={handleStateChange}
							size={Sizes.sm}
						/>
						<TextField
							label='Postal Code'
							htmlFor='text-input'
							size={Sizes.sm}
							onChange={handlePostalCodeChange}
							value={postalCode}
						/>
					</Row>
					<FormFieldCheckbox
						label='Type'
						checked={billingTypesChecked}
						options={billingTypes}
						onChange={handleBillingTypeChange}
					/>
				</form>
			</Modal>
		</div>
	);
};

export default memo(Address);
