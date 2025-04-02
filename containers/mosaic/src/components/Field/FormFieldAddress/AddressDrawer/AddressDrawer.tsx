import type { ReactElement } from "react";

import React, { useCallback, useEffect, useMemo } from "react";

import type { AddressDrawerProps } from "../AddressTypes";
import type { FieldDef } from "@root/components/Field/FieldTypes";
import type { ButtonProps } from "@root/components/Button";
import type { SectionDef } from "@root/components/Form";

import Form from "@root/components/Form/Form";
import { useForm } from "@root/components/Form/useForm/useForm";
import { FormDrawerWrapper } from "@root/components/common";
import addressesAreEqual from "../utils/addressesAreEqual";
import getAddressFields from "../utils/getAddressFields";

const AddressDrawer = (props: AddressDrawerProps): ReactElement => {
	const {
		onSave,
		addressToEdit,
		handleClose,
		handleUnsavedChanges,
		dialogOpen,
		handleDialogClose,
		addressTypes,
		getOptionsCountries,
		getOptionsStates,
		googleMapsApiKey,
	} = props;

	const controller = useForm({
		data: addressToEdit ? {
			address1: addressToEdit.address1,
			address2: addressToEdit.address2,
			address3: addressToEdit.address3,
			city: addressToEdit.city,
			state: addressToEdit.state,
			postalCode: addressToEdit.postalCode,
			country: addressToEdit.country,
			...(addressTypes ? {
				types: addressToEdit.types,
			} : {}),
		} : {},
	});
	const { state, handleSubmit } = controller;

	useEffect(() => {
		if (!handleUnsavedChanges) {
			return;
		}

		handleUnsavedChanges(!addressesAreEqual(addressToEdit, state.data as any));
	}, [addressToEdit, state.data]);

	/**
	 * Form submit handler.
	 * It adds a new address or edits an existing one and then
	 * closes the Drawer.
	 */
	const onSubmit = handleSubmit(useCallback(async () => {
		onSave({
			...(addressToEdit || {}),
			address1: state.data.address1,
			address2: state.data.address2,
			address3: state.data.address3,
			city: state.data.city,
			state: state.data.state,
			postalCode: state.data.postalCode,
			country: state.data.country,
			types: state.data.types,
		});

		handleClose(true);
	}, [
		handleClose,
		onSave,
		addressToEdit,
		state.data.address1,
		state.data.address2,
		state.data.address3,
		state.data.city,
		state.data.state,
		state.data.postalCode,
		state.data.country,
		state.data.types,
	]));

	const sections = useMemo<SectionDef[]>(() => [
		{
			fields: [
				[["address1"]],
				[["address2"]],
				[["address3"]],
				[["country"]],
				[["city"], ["state"], ["postalCode"]],
				...(addressTypes ? [[["types"]]] : []),
			],
		},
	], [addressTypes]);

	const typesField = useMemo<FieldDef[]>(() => addressTypes ? [
		{
			name: "types",
			type: "checkbox",
			label: "Type",
			size: "sm",
			required: true,
			inputSettings: {
				options: [
					...addressTypes,
					...(addressToEdit ? addressToEdit.types.filter((editingType) => !addressTypes.find(({ value }) => value === editingType.value)) : []),
				],
			},
		},
	] : [], [addressTypes, addressToEdit]);

	const fields = useMemo(
		(): FieldDef[] =>
			[
				...getAddressFields({
					getOptionsCountries,
					getOptionsStates,
					googleMapsApiKey,
					required: true,
				}),
				...typesField,
			],
		[getOptionsCountries, getOptionsStates, googleMapsApiKey, typesField],
	);

	const buttons = useMemo<ButtonProps[]>(() => [
		{
			label: "Cancel",
			onClick: () => handleClose(),
			color: "gray",
			variant: "outlined",
		},
		{
			label: "Save",
			onClick: onSubmit,
			color: "yellow",
			variant: "contained",
			type: "submit",
		},
	], [handleClose, onSubmit]);

	return (
		<FormDrawerWrapper className="address">
			<Form
				{...controller}
				onBack={handleClose}
				backLabel="Cancel address entry"
				title="Address Information"
				buttons={buttons}
				data-testid="address-testid"
				sections={sections}
				fields={fields}
				dialogOpen={dialogOpen}
				handleDialogClose={handleDialogClose}
			/>
		</FormDrawerWrapper>
	);
};

export default AddressDrawer;
