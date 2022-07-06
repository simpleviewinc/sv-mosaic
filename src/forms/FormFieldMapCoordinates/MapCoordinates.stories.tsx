import * as React from "react";
import { ReactElement, useMemo } from "react";
import { boolean, withKnobs, object, text } from "@storybook/addon-knobs";
import { FieldDef } from "@root/components/Field";
import { MapCoordinatesDef } from ".";
import { onCancel, renderButtons } from "@root/utils/storyUtils";

// Components
import Form from "../Form/Form";

// Utils
import { useForm } from "../Form";
import { address, defaultMapPosition } from "./MapCoordinatesUtils";

export default {
	title: "FormFields/FormFieldMapCoordinates",
	decorators: [withKnobs],
};

export const Playground = (): ReactElement => {
	const { state, dispatch, registerFields } = useForm();

	const addressKnob = object("Address", address);
	const disabled = boolean("Disabled", false);
	const label = text("Label", "Map Coordinates Example");
	const mapPositionKnob = object("Initial map position", defaultMapPosition);
	const required = boolean("Required", false);
	const withAddress = boolean("With address", false);

	const fields = useMemo(
		() =>
			[
				{
					name: "map",
					label,
					type: "mapCoordinates",
					required,
					disabled,
					inputSettings: {
						apiKey: "AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",
						address: withAddress ? addressKnob : {},
						mapPosition: mapPositionKnob
					},
				},
			] as FieldDef<MapCoordinatesDef>[],
		[addressKnob, disabled, label, mapPositionKnob, required, withAddress]
	);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

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

const kitchenSinkFields = [
	{
		name: "mapWithoutAddress",
		label: "Map without an address. Autocoordinates disabled",
		type: "mapCoordinates",
		required: false,
		disabled: false,
		inputSettings: {
			apiKey: "AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",
		},
	},
	{
		name: "mapWithAddress",
		label: "Map with an address. Autocoordinates enabled",
		type: "mapCoordinates",
		required: false,
		disabled: false,
		inputSettings: {
			apiKey: "AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",
			address: address
		},
	},
	{
		name: "mapWithInitalPosition",
		label: "Map with an inital map position set",
		type: "mapCoordinates",
		required: false,
		disabled: false,
		inputSettings: {
			apiKey: "AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",
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
			apiKey: "AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",
			address: address
		},
	}
] as FieldDef<MapCoordinatesDef>[];

export const KitchenSink = (): ReactElement => {
	const { state, dispatch, registerFields } = useForm();

	useMemo(() => {
		registerFields(kitchenSinkFields);
	}, [kitchenSinkFields, registerFields]);

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
