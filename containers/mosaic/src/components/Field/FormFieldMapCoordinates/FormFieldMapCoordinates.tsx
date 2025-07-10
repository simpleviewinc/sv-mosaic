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
import { ButtonsWrapper, Column, Details, CoordinatesCard, CoordinatesValues, LatitudeValue, LatLngLabel, MapImageColumn } from "./MapCoordinates.styled";
import { isValidLatLng } from "./MapCoordinatesUtils";

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
			color: "gray",
			variant: "outlined",
		},
		{
			label: "Yes, remove it",
			onClick: () => {
				removeLocation();
				setRemoveDialog(false);
			},
			color: "yellow",
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
				<div>
					<CoordinatesCard>
						<Details>
							<MapImageColumn>
								<img
									src={`https://maps.googleapis.com/maps/api/staticmap?zoom=${fieldDef?.inputSettings?.focusZoom ?? 11}&size=232x153&maptype=roadmap&markers=color:red%7C${latLng?.lat},${latLng?.lng}&key=${fieldDef.inputSettings.googleMapsApiKey}`}
									alt="location"
								/>
							</MapImageColumn>
							<Column>
								<LatLngLabel>Latitude</LatLngLabel>
								{latLng ? (
									<LatitudeValue>{latLng?.lat}</LatitudeValue>
								) : (
									<Blank />
								)}
								<LatLngLabel>Longitude</LatLngLabel>
								{latLng ? (
									<CoordinatesValues>{latLng?.lng}</CoordinatesValues>
								) : (
									<Blank />
								)}
							</Column>
						</Details>
						<ButtonsWrapper>
							<Button
								intent="info"
								variant="text"
								size="small"
								label="Edit"
								disabled={disabled}
								onClick={handleAddCoordinates}
							/>
							<Button
								intent="danger"
								disabled={disabled}
								variant="text"
								size="small"
								label="Remove"
								onClick={() => setRemoveDialog(true)}
							/>
						</ButtonsWrapper>
					</CoordinatesCard>
				</div>
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
