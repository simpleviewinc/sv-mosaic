import * as React from "react";
import { memo, ReactElement, useState, useEffect } from "react";

// Components
import AddressDrawer from "./AddressDrawer";
import Button from "@root/components/Button";
import Drawer from "@root/components/Drawer.jsx";

// Styles
import { AddAddressWrapper, FlexContainer } from "./Address.styled";

// Utils
import AddressCard from "./AddressCard";
import { MosaicFieldProps } from "@root/components/Field";
import { IAddress } from ".";

const FormFieldAddress = (props: MosaicFieldProps<unknown, IAddress[]>): ReactElement => {
	const {
		value,
		onBlur,
		onChange,
		fieldDef,
		fieldDef : { inputSettings }
	} = props;

	// State variables
	const [open, setOpen] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [addressToEdit, setAddressToEdit] = useState(null)

	// States of the form values
	const [addressIdx, setAddressIdx] = useState(null);

	const [hasUnsavedChanges, setUnsavedChanges] = useState(false);
	const [dialogOpen, setIsDialogOpen] = useState(false);
	const [addressTypes, setAddressTypes] = useState([]);

	const initialAddressTypes = [
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
	]
	
	useEffect(() => {
		if (!open) {
			setAddressTypes(getAvailableAddressTypes())
		}
	}, [value, inputSettings, open])
	
	/**
	 * Gets the number of times each of the 
	 * address types has been selected
	 */
	const getUsedAddressTypes = () => {
		const amountTypesUsed = {
			physical: 0,
			billing: 0,
			shipping: 0,
		}
		
		if (value) {
			value.forEach(address => {
				address.types.forEach(type => {
					amountTypesUsed[type] >= 0 && amountTypesUsed[type] ++
				})
			})
		}

		return amountTypesUsed
	}
	
	/**
	 * Returns an array with the available 
	 * address types for the AddressDrawer form
	 */
	const getAvailableAddressTypes = () => {
		const addressTypesUsed = getUsedAddressTypes()

		return initialAddressTypes
			.filter(addressType => addressTypesUsed[addressType.value] < (inputSettings[addressType.value] > 0 
				? inputSettings[addressType.value] 
				: inputSettings.amountPerType)
			)
	}

	/**
	 * Opens the modal to create an address card 
	 * and sets editing mode to false.
	 */
	const addAddressHandler = () => {
		setIsEditing(false);
		setOpen(true);
	};

	/**
	 * Removes the clicked address card from the list. 
	 * @param addressToRemove 
	 */
	const removeAddressHandler = async (addressIndex: number) => {
		const listOfAddresses = [...value];
		listOfAddresses.splice(addressIndex, 1);

		if (listOfAddresses.length > 0) {
			await onChange(listOfAddresses);
		} else {
			await onChange(undefined);
		}
	};

	/**
	 * Closes the modal and resets the values for
	 * form field.
	 */
	const handleClose = async (save = false) => {
		if (typeof save === "boolean" && save) {
			setOpen(false);
			if (onBlur) await onBlur();
		} else if (hasUnsavedChanges)
			setIsDialogOpen(true);
		else {
			setOpen(false);
			if (onBlur) await onBlur();
		}
	};

	const handleDialogClose = async (close: boolean) => {
		if (close) {
			setOpen(false);
			//await onBlur();
		}
		setIsDialogOpen(false);
	}

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

		setAddressToEdit({
			address1,
			address2,
			address3,
			city,
			postalCode,
			types,
			country,
			state,
		});

		const typesSelected = initialAddressTypes.filter(addressType => types.find(type => addressType.value === type) !== undefined);
		const joinTypes = [...typesSelected, ...addressTypes]
		const uniqueElements = joinTypes.reduce((acc, element) => {
			const i = acc.findIndex(e => element.value === e.value)
			if (i >= 0) {
				Object.assign(acc[i],element)
			} else {
				element.value = element.value || 0
				element.value = element.value || 0
				acc.push(element)
			}
			return acc
		}, [])

		setAddressTypes(uniqueElements)
		setAddressIdx(addressIndex);
		setIsEditing(true);
		setOpen(true);
	};

	return (
		<div>
			<FlexContainer>
				<AddAddressWrapper>
					<Button
						disabled={addressTypes?.length === 0 ? true : fieldDef.disabled}
						color="gray"
						variant="outlined"
						label="ADD ADDRESS"
						onClick={addAddressHandler}
						muiAttrs={{ disableRipple: true }}
					></Button>
				</AddAddressWrapper>
				{value &&
					value.map((address, idx) => (
						<AddressCard
							key={`${idx}`}
							address={address}
							addressIndex={idx}
							onEdit={showEditModal}
							disabled={fieldDef.disabled}
							onRemoveAddress={removeAddressHandler}
						/>
					))}
			</FlexContainer>
			<Drawer open={open} onClose={handleClose}>
				<AddressDrawer
					open={open}
					value={value}
					onChange={onChange}
					isEditing={isEditing}
					addressIdx={addressIdx}
					handleClose={handleClose}
					setIsEditing={setIsEditing}
					addressToEdit={addressToEdit}
					hasUnsavedChanges={hasUnsavedChanges}
					handleUnsavedChanges={(e) => setUnsavedChanges(e)}
					dialogOpen={dialogOpen}
					handleDialogClose={handleDialogClose}
					addressTypes={addressTypes}
				/>
			</Drawer>
		</div>
	);
};

export default memo(FormFieldAddress);
