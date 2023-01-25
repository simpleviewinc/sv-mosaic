import * as React from "react";
import { ReactElement, useMemo } from "react";
import { boolean, withKnobs, object, text, number } from "@storybook/addon-knobs";
import { FieldDef } from "@root/components/Field";
import { onCancel, renderButtons } from "@root/utils/storyUtils";

// Components
import Form, { useForm } from "@root/components/Form";

// Utils
import { address, defaultMapPosition } from "./MapCoordinatesUtils";

export default {
	title: "FormFields/FormFieldMapCoordinates",
	decorators: [withKnobs],
};

export const Playground = (): ReactElement => {
	const { state, dispatch } = useForm();

	const addressKnob = object("Address", address);
	const disabled = boolean("Disabled", false);
	const label = text("Label", "Map Coordinates Example");
	const mapPositionKnob = object("Initial map position", defaultMapPosition);
	const required = boolean("Required", false);
	const withAddress = boolean("With address", false);
	const zoom = number("Zoom", 7, { min: 0, max: 18 });

	const fields: FieldDef[] = useMemo(
		() =>
			[
				{
					name: "map",
					label,
					type: "mapCoordinates",
					required,
					disabled,
					inputSettings: {
						googleMapsApiKey: "AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",
						address: withAddress ? addressKnob : undefined,
						mapPosition: mapPositionKnob,
						zoom: zoom
					},
				},
			],
		[addressKnob, disabled, label, mapPositionKnob, required, withAddress, zoom]
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				buttons={renderButtons(dispatch)}
				title={text("Title", "Form Title")}
				description={text("Description", "This is a description example")}
				state={state}
				fields={fields}
				dispatch={dispatch}
				onCancel={onCancel}
			/>
		</>
	);
};

const kitchenSinkFields: FieldDef[] = [
	{
		name: "mapWithoutAddress",
		label: "Map without an address. Autocoordinates disabled",
		type: "mapCoordinates",
		required: false,
		disabled: false,
		inputSettings: {
			googleMapsApiKey: "AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",
		},
	},
	{
		name: "mapZoom",
		label: "Map with zoom set to 8",
		type: "mapCoordinates",
		required: false,
		disabled: false,
		inputSettings: {
			googleMapsApiKey: "AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",
			zoom: 8,
			mapPosition: { lat: 40.7127753, lng: -74.0059728 }
		},
	},
	{
		name: "mapWithAddress",
		label: "Map with an address. Autocoordinates enabled",
		type: "mapCoordinates",
		required: false,
		disabled: false,
		inputSettings: {
			googleMapsApiKey: "AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",
			address: address,
			mapPosition: { lat: 40.7127753, lng: -74.0059728 }
		},
	},
	{
		name: "mapWithInitalPosition",
		label: "Map with an inital map position set",
		type: "mapCoordinates",
		required: false,
		disabled: false,
		inputSettings: {
			googleMapsApiKey: "AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",
			address: address,
			mapPosition: { lat: 19.3884403, lng: -99.1747252 }
		},
	},
	{
		name: "mapDisabled",
		label: "Map disabled",
		type: "mapCoordinates",
		required: false,
		disabled: true,
		inputSettings: {
			googleMapsApiKey: "AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",
			address: address
		},
	}
];

export const KitchenSink = (): ReactElement => {
	const { state, dispatch } = useForm();

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				buttons={renderButtons(dispatch)}
				title='Form Title'
				description='This is a description example'
				state={state}
				fields={kitchenSinkFields}
				dispatch={dispatch}
				onCancel={onCancel}
			/>
		</>
	);
};
