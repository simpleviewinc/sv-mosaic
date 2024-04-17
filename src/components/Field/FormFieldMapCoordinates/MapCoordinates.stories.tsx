import * as React from "react";
import { ReactElement, useMemo } from "react";
import { boolean, withKnobs, object, text, number } from "@storybook/addon-knobs";
import { FieldDef } from "@root/components/Field";
import { renderButtons } from "@root/utils/storyUtils";

// Components
import Form, { useForm } from "@root/components/Form";

export default {
	title: "FormFields/FormFieldMapCoordinates",
	decorators: [withKnobs],
};

const getFormValues = async () => ({
	map: {
		"lat": 32.369247319672866,
		"lng": -110.96678114089914,
	},
});

// Liverpool Office: 53.37997840196994, -2.9729752639886544
// Tucson Office: 32.369247319672866, -110.96678114089914
// Eiffel Tower: 48.858321470423576, 2.2945004162050564
// Niagra Falls: 43.08280759102605, -79.07415774620223

export const Playground = (): ReactElement => {
	const controller = useForm();
	const { state, handleSubmit } = controller;

	const disabled = boolean("Disabled", false);
	const label = text("Label", "Map Coordinates Example");
	const initialCenterKnob = object("Initial map position", { lat: 48.858321470423576, lng: 2.2945004162050564 });
	const required = boolean("Required", false);
	const skeleton = boolean("Skeleton", false);
	const zoom = number("Zoom", 7, { min: 0, max: 18, range: true });
	const focusZoom = number("Focus Zoom", 11, { min: 0, max: 18, range: true });
	const prepopulate = boolean("Prepopulate", false);

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
				title={text("Title", "Form Title")}
				description={text("Description", "This is a description example")}
				fields={fields}
				getFormValues={prepopulate ? getFormValues : undefined}
				skeleton={skeleton}
			/>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
		</>
	);
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
