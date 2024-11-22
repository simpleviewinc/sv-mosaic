import * as React from "react";
import type { ReactElement } from "react";
import { useMemo } from "react";
import type { FieldDef } from "@root/components/Field";
import { renderButtons } from "../../../../utils";

// Components
import Form, { useForm } from "@root/components/Form";

export default {
	title: "FormFields/FormFieldMapCoordinates",
};

const getFormValues = async () => ({
	map: {
		lat: 32.369247319672866,
		lng: -110.96678114089914,
	},
});

// Liverpool Office: 53.37997840196994, -2.9729752639886544
// Tucson Office: 32.369247319672866, -110.96678114089914
// Eiffel Tower: 48.858321470423576, 2.2945004162050564
// Niagra Falls: 43.08280759102605, -79.07415774620223

export const Playground = ({
	label,
	required,
	skeleton,
	disabled,
	initialCenterKnob,
	zoom,
	focusZoom,
	prepopulate,
}: typeof Playground.args): ReactElement => {
	const controller = useForm();
	const { state, handleSubmit } = controller;

	const fields = useMemo(
		(): FieldDef[] =>
			[
				{
					name: "map",
					label,
					type: "mapCoordinates",
					required,
					disabled,
					inputSettings: {
						googleMapsApiKey: "AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",
						initialCenter: initialCenterKnob,
						zoom,
						focusZoom,
					},
				},
			],
		[disabled, label, initialCenterKnob, required, zoom, focusZoom],
	);

	return (
		<>
			<Form
				{...controller}
				buttons={renderButtons(handleSubmit)}
				title="Map Coordinates Field"
				fields={fields}
				getFormValues={prepopulate ? getFormValues : undefined}
				skeleton={skeleton}
			/>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
		</>
	);
};

Playground.args = {
	label: "Label",
	disabled: false,
	required: false,
	skeleton: false,
	initialCenterKnob: { lat: 48.858321470423576, lng: 2.2945004162050564 },
	zoom: 7,
	focusZoom: 11,
	prepopulate: false,
};

Playground.argTypes = {
	label: {
		name: "Label",
	},
	disabled: {
		name: "Disabled",
	},
	required: {
		name: "Required",
	},
	skeleton: {
		name: "Skeleton",
	},
	initialCenterKnob: {
		name: "Initial Center",
	},
	zoom: {
		name: "Zoom",
		control: { type: "range", min: 0, max: 18 },
	},
	focusZoom: {
		name: "Focus Zoom",
		control: { type: "range", min: 0, max: 18 },
	},
	prepopulate: {
		name: "Prepopulate",
	},
};

const kitchenSinkFields: FieldDef[] = [
	{
		name: "mapStandard",
		label: "Standard map",
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
			initialCenter: { lat: 40.7127753, lng: -74.0059728 },
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
			initialCenter: { lat: 19.3884403, lng: -99.1747252 },
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
		},
	},
];

export const KitchenSink = (): ReactElement => {
	const controller = useForm();
	const { state, handleSubmit } = controller;

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				{...controller}
				buttons={renderButtons(handleSubmit)}
				title="Form Title"
				description="This is a description example"
				fields={kitchenSinkFields}
			/>
		</>
	);
};
