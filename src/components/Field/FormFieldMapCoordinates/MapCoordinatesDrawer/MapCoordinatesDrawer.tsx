import * as React from "react";
import { ReactElement, useCallback, useEffect, useMemo } from "react";
import { MapCoordinatesDrawerProps } from "..";
import { FieldDef } from "@root/components/Field/FieldTypes";
import { MapPosition } from "../MapCoordinatesTypes";
import { ButtonProps } from "@root/components/Button";

// Components
import { FormDrawerWrapper } from "@root/forms/shared/styledComponents";

// Utils
import { defaultMapPosition, isSameCoords, isValidCoords, isValidLatLng } from "../MapCoordinatesUtils";
import Form, { useForm } from "@root/components/Form";
import { validateLatitude, validateLongitude } from "@root/components/Form/validators";
import MapWithMarker from "../Map/MapWithMarker";
import ResetButton from "../Map/ResetButton";

// Layout of the form elements.
const sections = [
	{
		fields: [
			[["placesList"]],
			[["lat"], ["lng"], ["resetButton"]],
		],
	},
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
		initialCenter = defaultMapPosition,
		googleMapsApiKey,
	} = props;

	const getFormValues = useCallback(async () => {
		const lat = value ? value.lat : undefined;
		const lng = value ? value.lng : undefined;

		return { lat, lng, placesList: { lat, lng } };
	}, [value]);

	const controller = useForm();
	const { state, methods: { setFieldValue, setFormValues }, handleSubmit } = controller;

	const parentLatLng = useMemo(() => isValidLatLng(value) ? value : undefined, [value]);

	const latLng = useMemo(() => {
		const unsanitized = { lat: Number(state.data.lat), lng: Number(state.data.lng) };
		return isValidLatLng(unsanitized) ? unsanitized : undefined;
	}, [
		state.data.lat,
		state.data.lng,
	]);

	// If it looks like the user is trying to paste full coordinates
	// into the latitude field, split it into two
	useEffect(() => {
		if (!state.data.lat) {
			return;
		}

		const lat = String(state.data.lat);
		const parts = lat.split(",");
		if (parts.length !== 2 || !isValidCoords(lat)) {
			return;
		}

		setFormValues({
			values: {
				lat: parts[0].trim(),
				lng: parts[1].trim(),
			},
		});
	}, [
		state.data.lat,
		state.data.lng,
		setFormValues,
	]);

	// Sync up the lat and lng form values with the reset button
	useEffect(() => {
		const shouldShowReset = state.data.lat !== undefined || state.data.lng !== undefined;

		if (shouldShowReset === state.data.resetButton) {
			return;
		}

		setFieldValue({
			name: "resetButton",
			value: shouldShowReset,
		});
	}, [setFieldValue, state.data.lat, state.data.lng, state.data.reset, state.data.resetButton]);

	// Sync up the lat and lng form values with placesList,
	// TODO Why can't these be the same state?
	useEffect(() => {
		if (!latLng) {
			setFieldValue({
				name: "placesList",
				value: undefined,
			});

			return;
		}

		const isEqual = isSameCoords(state.data.placesList, latLng);

		if (isEqual) {
			return;
		}

		setFieldValue({
			name: "placesList",
			value: { lat: latLng.lat, lng: latLng.lng },
		});
	}, [
		state.data.placesList,
		latLng,
	]);

	// If the local lat/lng is different to the parent form,
	// show the unsaved changes prompt
	useEffect(() => {
		const isEqual = isSameCoords(parentLatLng, latLng);
		handleUnsavedChanges(!isEqual);
	}, [parentLatLng, latLng, handleUnsavedChanges]);

	/**
	 * Executed when the onSubmit event of
	 * the form that is contained inside the modal
	 * happends.
	 */
	const onSubmit = handleSubmit(() => {
		const latLngValue = {
			...value,
			...latLng,
		};

		onChange(latLngValue);
		handleClose(true);
	});

	const onCoordinatesChange = useCallback((coords: MapPosition | undefined) => {
		const lat = coords ? coords.lat : undefined;
		const lng = coords ? coords.lng : undefined;

		setFormValues({
			values: {
				placesList: { lat, lng },
				lat: String(lat),
				lng: String(lng),
			},
		});
	}, [setFormValues]);

	const zoom = fieldDef?.inputSettings?.zoom;
	const focusZoom = fieldDef?.inputSettings?.focusZoom;

	const fields = useMemo(
		(): FieldDef[] =>
			[
				{
					name: "placesList",
					type: ({ value, onBlur }) => (
						<MapWithMarker
							zoom={zoom}
							focusZoom={focusZoom}
							initialCenter={initialCenter}
							onCoordinatesChange={onCoordinatesChange}
							value={value}
							onBlur={onBlur}
							googleMapsApiKey={googleMapsApiKey}
						/>
					),
				},
				{
					name: "lat",
					label: "Latitude",
					type: "text",
					validators: [validateLatitude],
				},
				{
					name: "lng",
					label: "Longitude",
					type: "text",
					validators: [validateLongitude],
				},
				{
					name: "resetButton",
					label: "Reset",
					type: ({ value }) => (
						<ResetButton
							show={value}
							onClick={() => setFormValues({
								values: {
									lat: undefined,
									lng: undefined,
									placesList: undefined,
								},
							})}
						/>
					),
				},
			],
		[zoom, focusZoom, initialCenter, onCoordinatesChange, googleMapsApiKey, setFormValues],
	);

	const buttons: ButtonProps[] = [
		{
			label: "Cancel",
			onClick: () => handleClose(),
			color: "gray",
			variant: "outlined",
		},
		{
			label: "Save Coordinates",
			onClick: onSubmit,
			color: "yellow",
			variant: "contained",
			disabled: !latLng,
		},
	];

	return (
		<FormDrawerWrapper className="mapCoordinates">
			<Form
				{...controller}
				onBack={handleClose}
				title="Map Coordinates"
				buttons={buttons}
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
