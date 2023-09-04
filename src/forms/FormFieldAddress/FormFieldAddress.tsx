import * as React from "react";
import { memo, ReactElement, useState, useEffect } from "react";

// Components
import AddressDrawer from "./AddressDrawer";
import Button from "@root/components/Button";
import Drawer from "@root/components/Drawer";

// Utils
import AddressCard from "./AddressCard";
import { MosaicFieldProps } from "@root/components/Field";
import { AddressFieldInputSettings, AddressData } from ".";
import { AddressItems, Footer } from "./Address.styled";

const FormFieldAddress = (props: MosaicFieldProps<"address", AddressFieldInputSettings, AddressData>): ReactElement => {
	const {
		value,
		onBlur,
		onChange,
		fieldDef,
	} = props;

	// State variables
	const [open, setOpen] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [addressToEdit, setAddressToEdit] = useState(null);

	// States of the form values
	const [addressIdx, setAddressIdx] = useState(null);

	const [hasUnsavedChanges, setUnsavedChanges] = useState(false);
	const [dialogOpen, setIsDialogOpen] = useState(false);
	const [availableAddresses, setAvailableAddresses] = useState({
		amountPerType: -1,
		amountShipping: -1,
		amountBilling: -1,
		amountPhysical: -1,
	});
	const [addressTypes, setAddressTypes] = useState([]);

	const types = [
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

	useEffect(() => {
		if (!open) {
			const amountPerType = fieldDef?.inputSettings?.amountPerType ?? 1

			const amountPerTypeProp = {
				amountPerType: amountPerType,
				amountShipping: fieldDef?.inputSettings?.amountShipping ?? amountPerType,
				amountBilling: fieldDef?.inputSettings?.amountBilling ?? amountPerType,
				amountPhysical: fieldDef?.inputSettings?.amountPhysical ?? amountPerType,
			}
			setAvailableAddresses(amountPerTypeProp);
		}
	}, [fieldDef?.inputSettings, open]);

	useEffect(() => {
		if (!open) {
			validateAmountPerType();
		}
	}, [availableAddresses, open, value]);

	const validateAmountPerType = (editingTypes = []) => {
		const newTypes = new Map();
		if (value)
			value?.forEach(address => {
				address.types.forEach(type => {
					let amount = 1;

					if (newTypes.has(type.value)) {
						amount += newTypes.get(type.value);
					}

					newTypes.set(type.value, amount);
				});
			});

		const addresses = [];

		types.forEach(type => {
			if (editingTypes.includes(type.value) || (newTypes.has(type.value) && newTypes.get(type.value) < availableAddresses[`amount${type.label}`]) || (!newTypes.has(type.value) && availableAddresses[`amount${type.label}`] > 0))
				addresses.push(type);
		});

		setAddressTypes(addresses);
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

		if (listOfAddresses?.length > 0) {
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

		validateAmountPerType(types.map(type => type.value));
		setAddressIdx(addressIndex);
		setIsEditing(true);
		setOpen(true);
	};

	return (
		<>
			{addressTypes?.length > 0 && (
				<Footer>
					<Button
						disabled={fieldDef?.disabled}
						color="gray"
						variant="outlined"
						label="ADD ADDRESS"
						onClick={addAddressHandler}
					/>
				</Footer>
			)}
			{!!value && (
				<AddressItems>
					{value.map((address, idx) => (
						<AddressCard
							key={`${idx}`}
							address={address}
							addressIndex={idx}
							onEdit={showEditModal}
							disabled={fieldDef?.disabled}
							onRemoveAddress={removeAddressHandler}
						/>
					))}
				</AddressItems>
			)}
			<Drawer open={open} onClose={handleClose}>
				<AddressDrawer
					googleMapsApiKey={fieldDef.inputSettings.googleMapsApiKey}
					open={open}
					value={value ?? []}
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
					getOptionsCountries={fieldDef.inputSettings?.getOptionsCountries}
					getOptionsStates={fieldDef.inputSettings?.getOptionsStates}
				/>
			</Drawer>
		</>
	);
};

export default memo(FormFieldAddress);
