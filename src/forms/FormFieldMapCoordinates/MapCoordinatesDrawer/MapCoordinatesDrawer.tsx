import * as React from "react";
import { ReactElement, useCallback, useEffect, useMemo } from "react";
import { MapCoordinatesDrawerProps } from "..";
import { FieldDef } from "@root/components/Field/FieldTypes";
import { MapPosition } from "../MapCoordinatesTypes";
import { ButtonProps } from "@root/components/Button";

// Components
import Map from "@root/forms/FormFieldMapCoordinates/Map";
import { StyledSpan } from "../MapCoordinates.styled";
import ResetButton from "@root/forms/FormFieldMapCoordinates/MapCoordinatesDrawer/ResetButton";

// Utils
import { defaultMapPosition } from "../MapCoordinatesUtils";
import Form, { formActions, useForm } from "@root/components/Form";
import _ from "lodash";

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
		handleUnsavedChanges,
		dialogOpen,
		handleDialogClose,
	} = props;

	const modalReducer = useForm();

	const initialState = { lat: value?.lat ? value.lat : undefined, lng: value?.lng ? value.lng : undefined };

	useEffect(() => {
		const { lat, lng } = modalReducer.state.data;

		if (lat !== undefined || lng !== undefined)
			handleUnsavedChanges(!_.isEqual(initialState, { lat, lng }));
	}, [modalReducer.state.data.lat, modalReducer.state.data.lng]);

	/**
	 * When the map is clicked the lat and lng fields and
	 * the coordinates that center the map are updated.
	 */
	const onMapClick = useCallback((event) => {
		const lat = event.latLng.lat();
		const lng = event.latLng.lng();

		modalReducer.dispatch(
			formActions.setFieldValue({
				name: "placesList",
				value: { lat: Number(lat), lng: Number(lng) },
			})
		);

		modalReducer.dispatch(
			formActions.setFieldValue({
				name: "lat",
				value: lat,
			})
		);

		modalReducer.dispatch(
			formActions.setFieldValue({
				name: "lng",
				value: lng,
			})
		);
	}, []);

	/**
	 * Clear the input fields of latitude and longitude
	 */
	const resetLocation = async () => {
		await modalReducer.dispatch(
			formActions.setFieldValue({ name: "lat", value: undefined })
		);

		await modalReducer.dispatch(
			formActions.setFieldValue({ name: "lng", value: undefined })
		);
	};

	/**
	 * Callback function that is executed by the LocationSearchInput
	 * when the user selects one of the suggested options by the autocomplete
	 * google component.
	 */
	const handleCoordinates = (coordinates: MapPosition) => {
		modalReducer.dispatch(
			formActions.setFieldValue({
				name: "placesList",
				value: coordinates,
			})
		);

		modalReducer.dispatch(
			formActions.setFieldValue({
				name: "lat",
				value: coordinates.lat,
			})
		);

		modalReducer.dispatch(
			formActions.setFieldValue({
				name: "lng",
				value: coordinates.lng,
			})
		);
	};

	/**
	 * Executed when the onSubmit event of
	 * the form that is contained inside the modal
	 * happends.
	 */
	const onSubmit = async () => {
		const { valid } = await modalReducer.dispatch(formActions.submitForm());
		if (!valid) return;

		const latLngValue = {
			...value,
			lat: modalReducer.state.data.lat,
			lng: modalReducer.state.data.lng,
		}

		await onChange(latLngValue);
		handleClose(true);
	};

	const renderMap = (props) => (
		<>
			<Map
				address={fieldDef?.inputSettings?.address}
				handleCoordinates={handleCoordinates}
				mapPosition={
					props.value
						? props.value
						: fieldDef?.inputSettings?.mapPosition
							? fieldDef?.inputSettings?.mapPosition
							: defaultMapPosition
				}
				onClick={onMapClick}
			/>
			<StyledSpan>
				Click on the map to update the lattitude and longitude coordinates
			</StyledSpan>
		</>
	);

	const fields = useMemo(
		() =>
			[
				{
					name: "placesList",
					type: renderMap,
				},
				{
					name: "lat",
					label: "Latitude",
					type: "text",
					inputSettings: {
						type: "number",
					},
				},
				{
					name: "lng",
					label: "Longitude",
					type: "text",
					inputSettings: {
						type: "number",
					},
				},
				{
					name: "resetButton",
					label: "Reset",
					type: ResetButton,
					inputSettings: {
						resetLocation,
					}
				},
			] as FieldDef[],
		[]
	);

	useEffect(() => {
		let isMounted = true;
		if (isMounted) {
			const { lat, lng } = modalReducer.state.data;

			if (lat?.toString().length > 0 && lng?.toString().length > 0) {
				modalReducer.dispatch(
					formActions.setFieldValue({ name: "resetButton", value: true })
				);

				modalReducer.dispatch(
					formActions.setFieldValue({
						name: "placesList",
						value: { lat: Number(lat), lng: Number(lng) }
					})
				);
			} else {
				modalReducer.dispatch(
					formActions.setFieldValue({ name: "resetButton", value: undefined })
				);
			}
		}

		return () => {
			isMounted = false;
		}

	}, [modalReducer.state.data.lat, modalReducer.state.data.lng]);

	useEffect(() => {
		let isMounted = true;

		if (isMounted) {
			modalReducer.dispatch(
				formActions.setFieldValue({
					name: "lat",
					value: value?.lat
				})
			);

			modalReducer.dispatch(
				formActions.setFieldValue({
					name: "lng",
					value: value?.lng
				})
			);
		}

		return () => {
			isMounted = false;
		}
	}, [modalReducer.dispatch, value])

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
			disabled: !modalReducer.state.data.lat || !modalReducer.state.data.lng
		}
	];

	return (
		<Form
			title='Map Coordinates'
			buttons={buttons}
			type='drawer'
			state={modalReducer?.state}
			dispatch={modalReducer?.dispatch}
			sections={sections}
			fields={fields}
			onCancel={handleClose}
			dialogOpen={dialogOpen}
			handleDialogClose={handleDialogClose}
		/>
	);
};

export default MapCoordinatesDrawer;
