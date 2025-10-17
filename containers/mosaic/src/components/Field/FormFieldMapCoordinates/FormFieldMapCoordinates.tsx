import type { ReactElement } from "react";

import React, { memo, useState, useMemo } from "react";

import type { MapCoordinatesData, MapCoordinatesInputSettings } from "./MapCoordinatesTypes";
import type { MosaicFieldProps } from "@root/components/Field";
import type { ButtonProps } from "@root/components/Button";

import Button from "@root/components/Button";
import Drawer from "@root/components/Drawer";
import Blank from "@root/components/Blank/Blank";
import Dialog from "@root/components/Dialog/Dialog";
import Skeleton from "@mui/material/Skeleton";
import MapCoordinatesDrawer from "./MapCoordinatesDrawer/MapCoordinatesDrawer";
import { MapPreview, StyledCardWrapper } from "./MapCoordinates.styled";
import { isValidLatLng } from "./MapCoordinatesUtils";
import { CardBottom, CardContent } from "@root/components/Card/Card.styled";
import ButtonRow from "@root/components/ButtonRow";
import { Column } from "@root/components/common";

const FormFieldMapCoordinates = (props: MosaicFieldProps<"mapCoordinates", MapCoordinatesInputSettings, MapCoordinatesData>): ReactElement => {
	const {
		value,
		onBlur,
		onChange,
		disabled,
		fieldDef,
		skeleton,
	} = props;

	const latLng = useMemo(() => isValidLatLng(value) ? value : undefined, [value]);

	// Supports legacy mapPosition
	const initialCenter = fieldDef?.inputSettings?.initialCenter;

	// State variables
	const [isModalOpen, setIsModalOpen] = useState(false);

	const [hasUnsavedChanges, setUnsavedChanges] = useState(false);
	const [dialogOpen, setIsDialogOpen] = useState(false);
	const [removeDialog, setRemoveDialog] = useState<boolean>(false);

	/**
	 * Opens the modal that displays the map.
	 */
	const handleAddCoordinates = () => {
		setIsModalOpen(true);
	};

	/**
	 * Closes the modal.
	 */
	const handleClose = async (save = false) => {
		if (typeof save === "boolean" && save) {
			setUnsavedChanges(false);
			setIsModalOpen(false);
			if (onBlur) await onBlur();
		} else if (hasUnsavedChanges)
			setIsDialogOpen(true);
		else {
			setUnsavedChanges(false);
			setIsModalOpen(false);
			if (onBlur) await onBlur();
		}
	};

	const handleDialogClose = async (close: boolean) => {
		if (close) {
			await handleClose(true);
		}
		setIsDialogOpen(false);
	};

	/**
	 * Clear values for the entered location.
	 */
	const removeLocation = async () => {
		if (onChange) {
			await onChange(undefined);
		}

		await onBlur();
	};

	const dialogButtons: ButtonProps[] = useMemo(() => [
		{
			label: "No, keep it",
			onClick: () => setRemoveDialog(false),
			intent: "secondary",
			variant: "contained",
		},
		{
			label: "Yes, remove it",
			onClick: () => {
				removeLocation();
				setRemoveDialog(false);
			},
			intent: "primary",
			variant: "contained",
		},
	], [removeDialog]);

	if (skeleton) {
		return (
			<Skeleton
				variant="rectangular"
				width={280}
				height={357}
			/>
		);
	}

	return (
		<>
			{latLng ? (
				<StyledCardWrapper>
					<CardContent $paddingBottom $compact>
						<MapPreview>
							<img
								src={`https://maps.googleapis.com/maps/api/staticmap?zoom=${fieldDef?.inputSettings?.focusZoom ?? 11}&size=280x168&maptype=roadmap&markers=color:red%7C${latLng?.lat},${latLng?.lng}&key=${fieldDef.inputSettings.googleMapsApiKey}`}
								alt="location"
							/>
						</MapPreview>
						<Column $gap={[1]}>
							<div><strong>Latitude</strong></div>
							<div>{latLng.lat || <Blank />}</div>
							<div><strong>Longitude</strong></div>
							<div>{latLng.lng || <Blank />}</div>
						</Column>
					</CardContent>
					<CardBottom $compact>
						<ButtonRow
							buttons={[
								{
									intent: "info",
									variant: "text",
									size: "small",
									label: "Edit",
									disabled: disabled,
									onClick: handleAddCoordinates,
								},
								{
									intent: "danger",
									disabled: disabled,
									variant: "text",
									size: "small",
									label: "Remove",
									onClick: () => setRemoveDialog(true),
								},
							]}
						/>
					</CardBottom>
				</StyledCardWrapper>
			) : (
				<Button
					disabled={disabled}
					onClick={handleAddCoordinates}
					intent="secondary"
					variant="contained"
					label="Add Coordinates"
				/>
			)}
			<Drawer open={isModalOpen} onClose={handleClose}>
				<MapCoordinatesDrawer
					value={value}
					fieldDef={fieldDef}
					onChange={onChange}
					handleClose={handleClose}
					handleUnsavedChanges={(e) => setUnsavedChanges(e)}
					dialogOpen={dialogOpen}
					handleDialogClose={handleDialogClose}
					initialCenter={initialCenter}
					googleMapsApiKey={fieldDef?.inputSettings?.googleMapsApiKey}
				/>
			</Drawer>
			<Dialog
				buttons={dialogButtons}
				dialogTitle="Are you sure you want to remove these coordinates?"
				open={removeDialog}
			>
				All data for these coordinates will be lost. This action is irreversible.
			</Dialog>
		</>
	);
};

export default memo(FormFieldMapCoordinates);
