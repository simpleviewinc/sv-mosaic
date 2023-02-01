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
	const [isDragging, setIsDragging] = useState(false);
	const [center, setCenter] = useState(mapPosition || defaultMapPosition);
	const [shouldCenter, setShouldCenter] = useState<{field: string, value: number}>(undefined);

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
	const onMapClick = useCallback((event: google.maps.MapMouseEvent) => {
		const lat = event.latLng.lat();
		const lng = event.latLng.lng();

		dispatch(
			formActions.setFieldValue({
				name: "placesList",
				value: { lat: Number(lat), lng: Number(lng) },
				validate: true
			})
		);

		dispatch(
			formActions.setFieldValue({
				name: "lat",
				value: lat,
				validate: true
			})
		);

		dispatch(
			formActions.setFieldValue({
				name: "lng",
				value: lng,
				validate: true
			})
		);
	}, []);

	/**
	 * Clear the input fields of latitude and longitude
	 */
	const resetLocation = async () => {
		await dispatch(
			formActions.setFieldValue({ name: "lat", value: 0 })
		);

		await dispatch(
			formActions.setFieldValue({ name: "lng", value: 0 })
		);
	};

	/**
	 * Callback function that is executed by the LocationSearchInput
	 * when the user selects one of the suggested options by the autocomplete
	 * google component.
	 */
	const handleCoordinates = (coordinates: MapPosition) => {
		setCenter(coordinates);
		dispatch(
			formActions.setFieldValue({
				name: "placesList",
				value: coordinates,
			})
		);

		dispatch(
			formActions.setFieldValue({
				name: "lat",
				value: coordinates.lat,
				validate: true
			})
		);

		dispatch(
			formActions.setFieldValue({
				name: "lng",
				value: coordinates.lng,
				validate: true
			})
		);
	};

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

	const onDragMarkerEnd = (event: google.maps.MapMouseEvent) => {
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

		setIsDragging(false)
	};

	const onDragStart = () => {
		setIsDragging(true)
	};

	const renderMap = (props) => (
		<>
			<Map
				address={fieldDef?.inputSettings?.address}
				handleCoordinates={handleCoordinates}
				mapPosition={center}
				value={props.value || mapPosition}
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
	);

	useEffect(() => {
		if (shouldCenter?.field && shouldCenter.field === "lng") {
			setCenter({ lat: Number(state.data.lat) || 0, lng: shouldCenter.value });
			setShouldCenter({field: null, value: null})
		} else if (shouldCenter?.field && shouldCenter.field === "lat") {
			setCenter({ lat: shouldCenter.value, lng: Number(state.data.lng) || 0});
			setShouldCenter({field: null, value: null})
		}
	}, [state.data.lat, state.data.lng, shouldCenter]);

	const onBlurLatitude = (latValue: number) => {
		setShouldCenter({ field: "lat", value: Number(latValue) });
	};

	const onBlurLongitude = (lngValue: number) => {
		setShouldCenter({ field: "lng", value: Number(lngValue) });
	};

	const fields = useMemo(
		() =>
			[
				{
					name: "placesList",
					type: "custom",
					inputSettings: {
						customComponent: renderMap
					}
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
					type: "custom",
					inputSettings: {
						customComponent: ResetButton,
						customProps: {
							resetLocation
						}
					}
				},
			] as FieldDef[],
		[center]
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
			disabled: !state.data.lat || !state.data.lng || state.errors.lng || state.errors.lat
		}
	];

	return (
		<FormDrawerWrapper className="mapCoordinates">
			<Form
				title='Map Coordinates'
				buttons={buttons}
				type='drawer'
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
