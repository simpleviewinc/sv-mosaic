import * as React from "react";
import { useMemo } from "react";
import { FieldDef } from "@root/components/Field";
import FormFieldMapCoordinates, { MapCoordinatesDef } from ".";
import { excludedFormFieldsControls, onCancel, renderButtons } from "@root/utils/storyUtils";
import { ComponentMeta } from "@storybook/react";

// Components
import Form, { useForm } from "@root/components/Form";

// Utils
import { address, defaultMapPosition } from "./MapCoordinatesUtils";

export default {
	title: "FormFields/FormFieldMapCoordinates",
	component: FormFieldMapCoordinates,
	argTypes: {
		zoom: { control: { type: "number", min: 0, max: 18 } }
	}
} as ComponentMeta<typeof FormFieldMapCoordinates>;

const Template = (args) => {
	const { state, dispatch } = useForm();
	const {
		address,
		disabled,
		label,
		initialMapPosition,
		required,
		withAddress,
		zoom,
		fields
	} = args;

	const playgroundFields = useMemo(
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
						address: withAddress ? address : {},
						mapPosition: initialMapPosition,
						zoom: zoom,
					},
				},
			] as FieldDef<MapCoordinatesDef>[],
		[address, disabled, label, initialMapPosition, required, withAddress, zoom]
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				buttons={renderButtons(dispatch)}
				title="Form Title"
				description="This is a description example"
				state={state}
				fields={fields ? fields : playgroundFields}
				dispatch={dispatch}
				onCancel={onCancel}
			/>
		</>
	);
};

export const Playground = Template.bind({});
Playground.parameters = { controls: { exclude: excludedFormFieldsControls } };
Playground.args = {
	label: "Label",
	required: false,
	disabled: false,
	instructionText: "Instruction text",
	helperText: "Helper text",
	address,
	initialMapPosition: defaultMapPosition,
	withAddress: false,
	zoom: 7
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
		name: "mapZoom",
		label: "Map with zoom set to 8",
		type: "mapCoordinates",
		required: false,
		disabled: false,
		inputSettings: {
			apiKey: "AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",
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
			apiKey: "AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",
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

export const KitchenSink = Template.bind({});
KitchenSink.parameters = { controls: { exclude: [...excludedFormFieldsControls ,"zoom"] } };
KitchenSink.args = {
	fields: kitchenSinkFields,
};
