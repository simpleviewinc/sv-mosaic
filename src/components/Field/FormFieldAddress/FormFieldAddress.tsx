import * as React from "react";
import { memo, ReactElement, useCallback, useMemo, useState } from "react";

// Components
import AddressDrawer from "./AddressDrawer";
import Button, { ButtonProps } from "@root/components/Button";
import Drawer from "@root/components/Drawer";

// Utils
import AddressCard from "./AddressCard";
import { MosaicFieldProps } from "@root/components/Field";
import { AddressFieldInputSettings, AddressData, IAddress } from ".";
import { AddressItems, Footer } from "./Address.styled";
import Dialog from "@root/components/Dialog/Dialog";

const types = [
	{
		label: "Physical",
		value: "physical",
		inputSettingsKey: "amountPhysical"
	},
	{
		label: "Billing",
		value: "billing",
		inputSettingsKey: "amountBilling"
	},
	{
		label: "Shipping",
		value: "shipping",
		inputSettingsKey: "amountShipping"
	},
];

const FormFieldAddress = (props: MosaicFieldProps<"address", AddressFieldInputSettings, AddressData>): ReactElement => {
	const {
		disabled,
		value,
		onBlur,
		onChange,
		fieldDef,
	} = props;

	// State variables
	const [open, setOpen] = useState<IAddress | true | false>(false);

	const [hasUnsavedChanges, setUnsavedChanges] = useState(false);
	const [dialogOpen, setIsDialogOpen] = useState(false);
	const [removeDialog, setRemoveDialog] = useState<IAddress | null>(null);

	const { isSingleTypeLimit, limits } = useMemo(() => {
		const defaultLimits = types.map(type => ({
			...type,
			limit: fieldDef?.inputSettings?.[type.inputSettingsKey]
		}))

		const definedTypeLimits = defaultLimits.filter(type => type.limit !== undefined);
		const isSingleTypeLimit = definedTypeLimits.length === 1;

		// The amount per type provided by the consumer if it's defined,
		// 0 if there has been a specific type limit set, 1 if neither.
		const limitPerType = fieldDef?.inputSettings?.amountPerType ?? Number(!definedTypeLimits.length);

		const limits = types.reduce((acc, curr) => ({
			...acc,
			[curr.value]: fieldDef?.inputSettings?.[curr.inputSettingsKey] ?? limitPerType
		}), {});

		return { limits, isSingleTypeLimit };
	}, [fieldDef?.inputSettings]);

	const availableTypes = useMemo(() => {
		const availableTypes = types.filter(type => {
			if (typeof open === "object" && open.types.map(({value}) => value).includes(type.value)) {
				return true;
			}

			const valuesOfType = (value || []).filter(address => {
				return address.types.map(({value}) => value).includes(type.value);
			});

			if (valuesOfType.length >= limits[type.value]) {
				return false;
			}

			return true;
		});

		return availableTypes;
	}, [
		limits,
		open,
		value
	]);

	/**
	 * Opens the modal to create an address card
	 * and sets editing mode to false.
	 */
	const addAddressHandler = () => {
		setOpen(true);
	};

	/**
	 * Removes the clicked address card from the list.
	 * @param addressToRemove
	 */
	const removeAddressHandler = useCallback(async (address) => {
		onChange((value || []).filter(item => item !== address));
		await onBlur();
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
	}

	const onDrawerSave = (address: IAddress) => {
		const newValue = [...(value || [])];
		const newAddress = {...address, types: isSingleTypeLimit ? [availableTypes[0]] : address.types};

		if (typeof open === "object") {
			const index = value.findIndex(item => item === open);
			newValue.splice(index, 1, newAddress);
		} else {
			newValue.push(newAddress);
		}

		onChange(newValue);
	}

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

	return (
		<>
			{availableTypes.length > 0 && (
				<Footer>
					<Button
						disabled={disabled}
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
							onEdit={setOpen}
							disabled={disabled}
							onRemoveAddress={setRemoveDialog}
						/>
					))}
				</AddressItems>
			)}
			<Drawer open={Boolean(open)} onClose={handleClose}>
				<AddressDrawer
					googleMapsApiKey={fieldDef?.inputSettings?.googleMapsApiKey}
					handleClose={handleClose}
					addressToEdit={typeof open == "object" ? open : undefined}
					handleUnsavedChanges={(e) => setUnsavedChanges(e)}
					dialogOpen={dialogOpen}
					handleDialogClose={handleDialogClose}
					addressTypes={isSingleTypeLimit ? undefined : availableTypes}
					getOptionsCountries={fieldDef?.inputSettings?.getOptionsCountries}
					getOptionsStates={fieldDef?.inputSettings?.getOptionsStates}
					onSave={onDrawerSave}
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
