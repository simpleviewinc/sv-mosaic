import * as React from "react";
import type { ReactElement } from "react";

import { memo, useCallback, useMemo, useState } from "react";

import type { ButtonProps } from "@root/components/Button";
import type { MosaicFieldProps } from "@root/components/Field";
import type { AddressFieldInputSettings, AddressData, AddressType, AddressItem } from ".";

import { EMPTY_ARRAY } from "@root/constants/stable";
import AddressDrawer from "./AddressDrawer/AddressDrawer";
import Button from "@root/components/Button";
import Drawer from "@root/components/Drawer";
import AddressCard from "./AddressCard";
import { AddressItems, Footer } from "./Address.styled";
import Dialog from "@root/components/Dialog/Dialog";
import { FormFieldAddressSkeleton } from "./FormFieldAddressSkeleton";
import { nanoid } from "nanoid";

const types: AddressType[] = [
	{
		label: "Physical",
		value: "physical",
		inputSettingsKey: "amountPhysical",
	},
	{
		label: "Billing",
		value: "billing",
		inputSettingsKey: "amountBilling",
	},
	{
		label: "Shipping",
		value: "shipping",
		inputSettingsKey: "amountShipping",
	},
];

function isNewAddress(address: AddressItem | { __newAddress: true }): address is { __newAddress: true } {
	return "__newAddress" in address;
}

const FormFieldAddress = (props: MosaicFieldProps<"address", AddressFieldInputSettings, AddressData>): ReactElement => {
	const {
		disabled,
		value: providedValue = EMPTY_ARRAY,
		onBlur,
		onChange,
		fieldDef,
		skeleton,
	} = props;

	// State variables
	const [open, setOpen] = useState<({ address: AddressItem | { __newAddress: true }; key: string }) | false>(false);
	const value = useMemo(() => !providedValue || Array.isArray(providedValue) ? providedValue : [providedValue], [providedValue]);

	const [hasUnsavedChanges, setUnsavedChanges] = useState(false);
	const [dialogOpen, setIsDialogOpen] = useState(false);
	const [removeDialog, setRemoveDialog] = useState<AddressItem | null>(null);

	const { singleType, limits } = useMemo<{ singleType: AddressType | false; limits: Record<string, number> }>(() => {
		const defaultLimits = types.map(type => ({
			...type,
			limit: fieldDef?.inputSettings?.[type.inputSettingsKey],
		}));

		const definedTypeLimits = defaultLimits.filter(type => type.limit !== undefined);
		const singleType = definedTypeLimits.length === 1 && fieldDef?.inputSettings?.amountPerType === undefined ?
			definedTypeLimits[0] : false;

		// The amount per type provided by the consumer if it's defined,
		// 0 if there has been a specific type limit set, 1 if neither.
		const limitPerType = fieldDef?.inputSettings?.amountPerType ?? Number(!definedTypeLimits.length);

		const limits = types.reduce((acc, curr) => ({
			...acc,
			[curr.value]: fieldDef?.inputSettings?.[curr.inputSettingsKey] ?? limitPerType,
		}), {});

		return { limits, singleType };
	}, [fieldDef?.inputSettings]);

	const availableTypes = useMemo(() => {
		const availableTypes = types.filter(type => {
			const valuesOfType = value.filter(address => {
				return address?.types?.map(({ value }) => value).includes(type.value);
			});

			if (limits[type.value] > -1 && valuesOfType.length >= limits[type.value]) {
				return false;
			}

			return true;
		});

		return availableTypes;
	}, [
		limits,
		value,
	]);

	/**
	 * Opens the modal to create an address card
	 * and sets editing mode to false.
	 */
	const addAddressHandler = () => {
		setOpen({ address: { __newAddress: true }, key: nanoid() });
	};

	/**
	 * Removes the clicked address card from the list.
	 * @param addressToRemove
	 */
	const removeAddressHandler = useCallback(async (address) => {
		onChange(value.filter(item => item !== address));
		onBlur && onBlur();
	}, [onBlur, onChange, value]);

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
	};

	const onDrawerSave = (address: AddressItem) => {
		if (!open) {
			return;
		}

		const newValue = [...value];
		const newAddress = { ...address, types: singleType ? [{ value: singleType.value, label: singleType.label }] : address.types };

		if (!isNewAddress(open.address)) {
			const index = value.findIndex(item => item === open.address);
			newValue.splice(index, 1, newAddress);
		} else {
			newValue.push(newAddress);
		}

		onChange(newValue);
	};

	const dialogButtons: ButtonProps[] = useMemo(() => [
		{
			label: "No, keep it",
			onClick: () => setRemoveDialog(undefined),
			color: "gray",
			variant: "outlined",
		},
		{
			label: "Yes, remove it",
			onClick: () => {
				removeAddressHandler(removeDialog);
				setRemoveDialog(undefined);
			},
			color: "yellow",
			variant: "contained",
		},
	], [removeAddressHandler, removeDialog]);

	if (skeleton) {
		return (
			<FormFieldAddressSkeleton />
		);
	}

	return (
		<>
			{availableTypes.length > 0 && (
				<Footer>
					<Button
						disabled={disabled}
						intent="secondary"
						variant="contained"
						label="Add Address"
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
							onEdit={(address) => setOpen({ address, key: nanoid() })}
							disabled={disabled}
							onRemoveAddress={setRemoveDialog}
						/>
					))}
				</AddressItems>
			)}
			<Drawer open={Boolean(open)} onClose={handleClose} key={open && open.key}>
				<AddressDrawer
					googleMapsApiKey={fieldDef?.inputSettings?.googleMapsApiKey}
					handleClose={handleClose}
					addressToEdit={open && !isNewAddress(open.address) ? open.address : undefined}
					handleUnsavedChanges={(e) => setUnsavedChanges(e)}
					dialogOpen={dialogOpen}
					handleDialogClose={handleDialogClose}
					addressTypes={singleType ? undefined : availableTypes}
					getOptionsCountries={fieldDef?.inputSettings?.getOptionsCountries}
					getOptionsStates={fieldDef?.inputSettings?.getOptionsStates}
					onSave={onDrawerSave}
					key={open && open.key}
				/>
			</Drawer>
			<Dialog
				buttons={dialogButtons}
				dialogTitle="Are you sure you want to remove this address?"
				open={Boolean(removeDialog)}
			>
				All data for this address will be lost. This action is irreversible.
			</Dialog>
		</>
	);
};

export default memo(FormFieldAddress);
