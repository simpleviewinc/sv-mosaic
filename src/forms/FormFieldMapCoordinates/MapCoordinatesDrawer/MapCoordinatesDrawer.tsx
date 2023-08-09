import * as React from "react";
import { ReactElement, useCallback, useEffect, useMemo, useState } from "react";
import { MapCoordinatesDrawerProps } from "..";
import { FieldDef } from "@root/components/Field/FieldTypes";
import { MapPosition } from "../MapCoordinatesTypes";
import { ButtonProps } from "@root/components/Button";

// Components
import Map from "@root/forms/FormFieldMapCoordinates/Map";
import { StyledSpan } from "../MapCoordinates.styled";
import ResetButton from "@root/forms/FormFieldMapCoordinates/MapCoordinatesDrawer/ResetButton";
import { FormDrawerWrapper } from "@root/forms/shared/styledComponents";

// Utils
import { defaultMapPosition } from "../MapCoordinatesUtils";
import Form, { formActions, useForm } from "@root/components/Form";
import _ from "lodash";
import { isLatitude, isLongitude } from "@root/components/Form/validators";

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
		mapPosition
	} = props;
	const defaultCenter = mapPosition || defaultMapPosition;

	const [isDragging, setIsDragging] = useState(false);
	const [center, setCenter] = useState(defaultCenter);
	// const [shouldCenter, setShouldCenter] = useState<{field: string, value: number}>(undefined);

	const { state, dispatch } = useForm();

	const initialState = { lat: value?.lat ? value.lat : undefined, lng: value?.lng ? value.lng : undefined };

	useEffect(() => {
		const { lat, lng } = state.data;

		if (lat !== undefined || lng !== undefined)
			handleUnsavedChanges(!_.isEqual(initialState, { lat, lng }));
	}, [state.data.lat, state.data.lng]);

	/**
	 * When the map is clicked the lat and lng fields and
	 * the coordinates that center the map are updated.
	 */
	const onMapClick = useCallback(async (event: google.maps.MapMouseEvent) => {
		const lat = event.latLng.lat();
		const lng = event.latLng.lng();

		await dispatch(
			formActions.setFieldValue({
				name: "placesList",
				value: { lat: Number(lat), lng: Number(lng) },
			})
		);

		await dispatch(
			formActions.validateField({name: "placesList"})
		);

		await dispatch(
			formActions.setFieldValue({
				name: "lat",
				value: lat,
			})
		);

		await dispatch(
			formActions.validateField({name: "lat"})
		);

		await dispatch(
			formActions.setFieldValue({
				name: "lng",
				value: lng,
			})
		);

		await dispatch(
			formActions.validateField({name: "lng"})
		);
	}, []);

	/**
	 * Clear the input fields of latitude and longitude
	 */
	const resetLocation = async () => {
		await dispatch(
			formActions.setFieldValue({ name: "lat", value: undefined })
		);

		await dispatch(
			formActions.setFieldValue({ name: "lng", value: undefined })
		);

		setCenter(defaultCenter);
	};

	/**
	 * Callback function that is executed by the LocationSearchInput
	 * when the user selects one of the suggested options by the autocomplete
	 * google component.
	 */
	const handleCoordinates = useCallback(async (coordinates: MapPosition) => {
		setCenter(coordinates);
		await dispatch(
			formActions.setFieldValue({
				name: "placesList",
				value: coordinates,
			})
		);

		await dispatch(
			formActions.setFieldValue({
				name: "lat",
				value: coordinates.lat,
			})
		);

		await dispatch(
			formActions.validateField({name: "lat"})
		);

		await dispatch(
			formActions.setFieldValue({
				name: "lng",
				value: coordinates.lng,
			})
		);

		await dispatch(
			formActions.validateField({name: "lng"})
		);
	}, [dispatch]);

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
			lat: Number(state.data.lat),
			lng: Number(state.data.lng),
		}

		await onChange(latLngValue);
		handleClose(true);
	};

	const onDragMarkerEnd = useCallback((event: google.maps.MapMouseEvent) => {
		const lat = event.latLng.lat();
		const lng = event.latLng.lng();

		dispatch(
			formActions.setFieldValue({
				name: "lat",
				value: lat,
			})
		);

		dispatch(
			formActions.setFieldValue({
				name: "lng",
				value: lng,
			})
		);

		// setIsDragging(false)
	}, [dispatch]);

	const onDragStart = useCallback(() => {
		setIsDragging(true)
	}, []);


	const renderMap = useCallback((props) => {
		const value = useMemo(() => props.value, [props.value]);

		return (
			<>
				<Map
					address={fieldDef?.inputSettings?.address}
					handleCoordinates={handleCoordinates}
					mapPosition={center}
					value={value}
					onClick={onMapClick}
					zoom={fieldDef.inputSettings.zoom}
					onDragMarkerEnd={onDragMarkerEnd}
					onDragStart={onDragStart}
					isDragging={isDragging}
				/>
				<StyledSpan>
					Click on the map to update the latitude and longitude coordinates
				</StyledSpan>
			</>
		)
	}, [
		fieldDef?.inputSettings?.address,
		handleCoordinates,
		center,
		onMapClick,
		fieldDef.inputSettings.zoom,
		onDragMarkerEnd,
		onDragStart,
		isDragging
	]);

	// useEffect(() => {
	// 	if (shouldCenter?.field && shouldCenter.field === "lng") {
	// 		setCenter({ lat: Number(state.data.lat) || 0, lng: shouldCenter.value });
	// 		setShouldCenter({field: null, value: null})
	// 	} else if (shouldCenter?.field && shouldCenter.field === "lat") {
	// 		setCenter({ lat: shouldCenter.value, lng: Number(state.data.lng) || 0});
	// 		setShouldCenter({field: null, value: null})
	// 	}
	// }, [state.data.lat, state.data.lng, shouldCenter]);

	const onBlurLatitude = useCallback((latValue: string) => {
		if (latValue === "" || latValue === undefined || state.data.lng === "" || state.data.lng === undefined) {
			return;
		}

		const lat = Number(latValue);
		console.log(latValue, state.data.lng)
		setCenter((center) => center.lat === lat ? center : {lat, lng: Number(state.data.lng)});
	}, [state.data.lng]);

	const onBlurLongitude = useCallback((lngValue: string) => {
		if (lngValue === "" || lngValue === undefined || state.data.lat === "" || state.data.lat === undefined) {
			return;
		}

		const lng = Number(lngValue);
		console.log(lngValue, state.data.lat)
		setCenter((center) => center.lng === lng ? center : {lng, lat: Number(state.data.lat)});
	}, [state.data.lat]);

	const fields = useMemo(
		(): FieldDef[] =>
			[
				{
					name: "placesList",
					type: renderMap
				},
				{
					name: "lat",
					label: "Latitude",
					type: "text",
					onBlurCb: onBlurLatitude,
					validators: [isLatitude]
				},
				{
					name: "lng",
					label: "Longitude",
					type: "text",
					onBlurCb: onBlurLongitude,
					validators: [isLongitude]
				},
				{
					name: "resetButton",
					label: "Reset",
					type: ResetButton,
					inputSettings: {
						resetLocation
					}
				},
			],
		[center, onBlurLatitude, onBlurLongitude]
	);

	useEffect(() => {
		let isMounted = true;
		if (isMounted) {
			const { lat, lng } = state.data;

			if (lat?.toString().length > 0 && lng?.toString().length > 0) {
				const showResetButton = lat === 0 && lng === 0;
				dispatch(
					formActions.setFieldValue({ name: "resetButton", value: !showResetButton })
				);

				dispatch(
					formActions.setFieldValue({
						name: "placesList",
						value: { lat: Number(lat), lng: Number(lng) }
					})
				);
			} else {
				dispatch(
					formActions.setFieldValue({ name: "resetButton", value: undefined })
				);
			}
		}

		return () => {
			isMounted = false;
		}

	}, [state.data.lat, state.data.lng]);

	/**
	 * Sets the previously saved values to be
	 * displayed in the Drawer when editing.
	 */
	useEffect(() => {
		let isMounted = true;

		if (isMounted) {
			dispatch(
				formActions.setFieldValue({
					name: "lat",
					value: value?.lat
				})
			);

			dispatch(
				formActions.setFieldValue({
					name: "lng",
					value: value?.lng
				})
			);
		}

		return () => {
			isMounted = false;
		}
	}, [dispatch, value])

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
			disabled: (!state.data.lat || !state.data.lng || state.errors.lng || state.errors.lat) as boolean
		}
	];

	return (
		<FormDrawerWrapper className="mapCoordinates">
			{/* <Map
				address={fieldDef?.inputSettings?.address}
				handleCoordinates={handleCoordinates}
				mapPosition={center}
				value={props.value}
				onClick={onMapClick}
				zoom={fieldDef.inputSettings.zoom}
				onDragMarkerEnd={onDragMarkerEnd}
				onDragStart={onDragStart}
				isDragging={isDragging}
			/>
			<StyledSpan>
				Click on the map to update the latitude and longitude coordinates
			</StyledSpan> */}
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
			/>
		</FormDrawerWrapper>
	);
};

export default MapCoordinatesDrawer;
