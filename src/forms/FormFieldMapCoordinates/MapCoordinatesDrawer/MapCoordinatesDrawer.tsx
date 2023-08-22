import * as React from "react";
import { ReactElement, useCallback, useEffect, useMemo } from "react";
import { MapCoordinatesDrawerProps } from "..";
import { FieldDef } from "@root/components/Field/FieldTypes";
import { MapPosition } from "../MapCoordinatesTypes";
import { ButtonProps } from "@root/components/Button";

// Components
import Map from "@root/forms/FormFieldMapCoordinates/Map";
import { ResetButtonContainer, StyledSpan } from "../MapCoordinates.styled";
import { FormDrawerWrapper } from "@root/forms/shared/styledComponents";

// Utils
import { defaultMapPosition, isValidLatLng } from "../MapCoordinatesUtils";
import Form, { formActions, useForm } from "@root/components/Form";
import { isLatitude, isLongitude } from "@root/components/Form/validators";
import Button from "@root/components/Button/Button";

// Layout of the form elements.
const sections = [
	{
		fields: [
			[["placesList"]],
			[["lat"], ["lng"], ["resetButton"]]
		]
	}
];

const MapCoordinatesDrawer = (props: MapCoordinatesDrawerProps): ReactElement => {
	const {
		value,
		fieldDef,
		onChange,
		handleClose,
		dialogOpen,
		handleDialogClose,
		handleUnsavedChanges,
		initialCenter = defaultMapPosition
	} = props;

	const getFormValues = useCallback(async () => {
		const lat = value ? value.lat : undefined;
		const lng = value ? value.lng : undefined;

		return { lat, lng, placesList: { lat, lng } };
	}, [value]);

	const { state, dispatch } = useForm();

	const parentLatLng = useMemo(() => isValidLatLng(value) ? value : undefined, [value]);

	const latLng = useMemo(() => {
		const unsanitized = { lat: Number(state.data.lat), lng: Number(state.data.lng) };
		return isValidLatLng(unsanitized) ? unsanitized : undefined
	}, [
		state.data.lat,
		state.data.lng
	]);

	// If the local lat/lng is different to the parent form,
	// show the unsaved changes prompt
	useEffect(() => {
		const isEqual =
			// Both the parent value and the local value are the same (undefined)
			(parentLatLng === latLng) ||
			// Both the parent value and the local value have the same lat and lng values
			(parentLatLng && latLng && parentLatLng.lat === latLng.lat && parentLatLng.lng === latLng.lng);

		handleUnsavedChanges(!isEqual);
	}, [parentLatLng, latLng]);

	/**
	 * Executed when the onSubmit event of
	 * the form that is contained inside the modal
	 * happends.
	 */
	const onSubmit = async () => {
		const { valid } = await dispatch(formActions.submitForm());
		if (!valid) return;

		const latLngValue = {
			...value,
			...latLng
		}

		await onChange(latLngValue);
		handleClose(true);
	};

	const onCoordinatesChange = useCallback((coords: MapPosition | undefined) => {
		const lat = coords ? coords.lat : undefined;
		const lng = coords ? coords.lng : undefined;

		dispatch(
			formActions._setFieldValues({
				values: {
					placesList: { lat, lng },
					lat,
					lng
				}
			})
		);
	}, [dispatch]);

	const MapWithMarkerField = useMemo(() => {
		function MapWithMarker(props: any) {
			const value = useMemo(() => props.value, [props.value]);

			return (
				<>
					<Map
						address={fieldDef?.inputSettings?.address}
						initialCenter={initialCenter}
						value={value}
						zoom={fieldDef.inputSettings.zoom}
						onCoordinatesChange={onCoordinatesChange}
					/>
					<StyledSpan>
						Click on the map to update the latitude and longitude coordinates
					</StyledSpan>
				</>
			)
		}

		return MapWithMarker;
	}, [
		fieldDef?.inputSettings?.address,
		fieldDef.inputSettings.zoom,
		onCoordinatesChange,
		initialCenter
	]);

	const ResetButtonField = useMemo(() => {
		const onClick = () => dispatch(formActions._setFieldValues({
			values: {
				lat: undefined,
				lng: undefined,
				placesList: undefined
			}
		}));

		return function ResetButton() {
			return (
				<ResetButtonContainer>
					<Button
						className="reset-button"
						color="teal"
						variant="text"
						label="Reset"
						onClick={onClick}
					/>
				</ResetButtonContainer>
			);
		}
	}, [dispatch]);

	const fields = useMemo(
		(): FieldDef[] =>
			[
				{
					name: "placesList",
					type: MapWithMarkerField
				},
				{
					name: "lat",
					label: "Latitude",
					type: "text",
					validators: [isLatitude]
				},
				{
					name: "lng",
					label: "Longitude",
					type: "text",
					validators: [isLongitude]
				},
				{
					name: "resetButton",
					label: "Reset",
					type: ResetButtonField
				},
			],
		[]
	);

	const buttons: ButtonProps[] = [
		{
			label: "Cancel",
			onClick: () => handleClose(),
			color: "gray",
			variant: "outlined"
		},
		{
			label: "Save Coordinates",
			onClick: onSubmit,
			color: "yellow",
			variant: "contained",
			disabled: latLng === undefined
		}
	];

	return (
		<FormDrawerWrapper className="mapCoordinates">
			<Form
				onBack={handleClose}
				title='Map Coordinates'
				buttons={buttons}
				state={state}
				dispatch={dispatch}
				sections={sections}
				fields={fields}
				dialogOpen={dialogOpen}
				handleDialogClose={handleDialogClose}
				getFormValues={getFormValues}
			/>
		</FormDrawerWrapper>
	);
};

export default MapCoordinatesDrawer;
