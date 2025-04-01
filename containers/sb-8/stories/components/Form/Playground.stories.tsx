import * as React from "react";
import type { ReactElement } from "react";
import { useEffect, useMemo } from "react";
import { nanoid } from "nanoid";

// Utils
import { mockOptions } from "@root/mock";
import { useForm } from "@root/components/Form";
import { renderButtons } from "../../../utils";

// Components
import Form from "@root/components/Form";

// Types
import type { FieldDef } from "@root/components/Field";
import { getOptionsCountries, getOptionsStates } from "@root/mock/options";
import { columns, rows, mockNumberTableData } from "@root/mock/numberTable";

import { ORIGINAL_BODY_MARGIN } from "@root/components/Form/stories/utils";
import type { ButtonProps } from "@root/components/Button";
import testIds from "@root/utils/testIds";

export default {
	title: "Components/Form",
};

const createNewOption = async (newOptionLabel) => {
	const value = `${newOptionLabel}_${mockOptions.length}`;
	const newOption = {
		label: newOptionLabel,
		value,
	};

	//Insert to db
	mockOptions.push(newOption);

	return newOption;
};

const prepopData = {
	textField: "Text field from getFormValues",
	check: [
		{
			label: "Label 1",
			value: "label_1",
		},
		{
			label: "Label 2",
			value: "label_2",
		},
	],
	chipSelect: {
		label: "Label 1",
		value: "label_1",
	},
	dropdownSingle: {
		label: "The Dark Knight",
		value: "2008",
	},
	phoneSelect: "+15205751152",
	radio: {
		label: "Label 2",
		value: "label_2",
	},
	toggle: true,
	color: "#a8001791",
	date: new Date(),
	time: "16:30",
	address: [
		{
			id: 1,
			address1: "8950 N. Oracle Road",
			city: "Tuczon",
			postalCode: "85704",
			country: { label: "United States", value: "US" },
			state: { label: "Arizona", value: "AZ" },
			types: [
				{ label: "Physical", value: "physical" },
			],
		},
	],
	advancedSelection: [
		{
			label: "getFormValues 1",
			value: "getFormValues option 1",
		},
		{
			label: "getFormValues 2",
			value: "getFormValues option 2",
		},
		{
			label: "getFormValues 3",
			value: "getFormValues option 3",
		},
		{
			label: "getFormValues 4",
			value: "getFormValues option 4",
		},
	],
	mapCoordinates: {
		lat: 48.858384,
		lng: 2.294567,
	},
	upload: [
		{
			id: "_OD_0354_c78fbb66-c75a-4804-9430-9af38ed8e9d5.jpg",
			name: "_OD_0354_c78fbb66-c75a-4804-9430-9af38ed8e9d5.jpg",
			size: 499318,
			thumbnailUrl: "",
			fileUrl: "",
		},
	],
	textEditor: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet augue augue.",
	numberTable: mockNumberTableData,
};

export const Playground = ({
	showState,
	onBack,
	prepop,
	showSave,
	showCancel,
	required,
	disabled,
	showSections,
	collapsed,
	containerHeight,
}: typeof Playground.args): ReactElement => {
	const controller = useForm({ data: prepop ? prepopData : {} });
	const { state, methods, handleSubmit } = controller;

	const { reset } = methods;

	useEffect(() => {
		document.body.style.margin = "0px";

		return () => {
			document.body.style.margin = ORIGINAL_BODY_MARGIN;
		};
	}, []);

	const onFileAdd = async ({ file, onChunkComplete, onUploadComplete }) => {
		for (let i = 0; i < 10; i++) {
			await new Promise(resolve => setTimeout(() =>
				resolve(
					onChunkComplete({ percent: (i + 1) * 0.1 }),
				), 300),
			);
		}

		await onUploadComplete({
			id: nanoid(),
			name: file.name,
			size: file.size,
			thumbnailUrl: ["image/gif", "image/jpeg", "image/png"].includes(file.type) ? URL.createObjectURL(file) : "",
			fileUrl: URL.createObjectURL(file),
		});
	};

	const onFileDelete = async ({ id }) => {
		alert("DELETED FILE: " + id);
	};

	const fields = useMemo(
		() : FieldDef[] =>
			[
				{
					name: "textField",
					label: "Simple Text",
					type: "text",
					disabled,
					required,
				},
				{
					name: "check",
					label: "Checkbox",
					type: "checkbox",
					disabled,
					required,
					inputSettings: {
						options: mockOptions,
					},
				},
				{
					name: "chipSelect",
					label: "Chip single select",
					type: "chip",
					inputSettings: {
						options: [
							{
								label: "Label 1",
								value: "label_1",
							},
							{
								label: "Label 2",
								value: "label_2",
							},
							{
								label:
									"Very long label that should fit: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
								value: "label_3",
							},
						],
					},
					disabled,
					required,
				},
				{
					name: "dropdownSingle",
					label: "Dropdown single select",
					type: "dropdown",
					disabled,
					required,
					inputSettings: {
						options: [
							{ label: "The Shawshank Redemption", value: "1994" },
							{ label: "The Godfather", value: "1972" },
							{ label: "The Godfather: Part II", value: "1974" },
							{ label: "The Dark Knight", value: "2008" },
							{ label: "12 Angry Men", value: "1957" },
							{ label: "Schindler's List", value: "1993" },
							{ label: "Pulp Fiction", value: "1994" },
							{ label: "The Lord of the Rings: The Return of the King", value: "2003" },
							{ label: "The Good, the Bad and the Ugly", value: "1966" },
							{ label: "Fight Club", value: "1999" },
							{ label: "The Lord of the Rings: The Fellowship of the Ring", value: "2001" },
							{ label: "Star Wars: Episode V - The Empire Strikes Back", value: "1980" },
							{ label: "Forrest Gump", value: "1994" },
							{ label: "Inception", value: "2010" },
							{ label: "The Lord of the Rings: The Two Towers", value: "2002" },
							{ label: "One Flew Over the Cuckoo's Nest", value: "1975" },
							{ label: "Goodfellas", value: "1990" },
							{ label: "The Matrix", value: "1999" },
							{ label: "Seven Samurai", value: "1954" },
							{ label: "Star Wars: Episode IV - A New Hope", value: "1977" },
							{ label: "City of God", value: "2002" },
							{ label: "Se7en", value: "1995" },
						],
					},
				},
				{
					name: "phoneSelect",
					label: "Phone selection",
					type: "phone",
					disabled,
					required,
				},
				{
					name: "radio",
					label: "Radio selection",
					type: "radio",
					disabled,
					required,
					inputSettings: {
						options: [
							{
								label: "Label 1",
								value: "label_1",
							},
							{
								label: "Label 2",
								value: "label_2",
							},
							{
								label: "Label 3",
								value: "label_3",
							},
						],
					},
				},
				{
					name: "toggle",
					label: "Toggle field",
					disabled,
					required,
					type: "toggle",
					inputSettings: {
						toggleLabel: "To the side",
					},
				},
				{
					name: "color",
					label: "Color selector example",
					disabled,
					required,
					type: "color",
				},
				{
					name: "date",
					label: "Single Date Picker",
					type: "date",
					disabled,
					required,
				},
				{
					name: "time",
					label: "Single Time Picker",
					type: "time",
					disabled,
					required,
				},
				{
					name: "address",
					label: "Address field",
					type: "address",
					inputSettings: {
						getOptionsCountries,
						getOptionsStates,
						googleMapsApiKey: "AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",
					},
					disabled,
					required,
				},
				{
					name: "advancedSelection",
					label: "Advanced Selection field",
					type: "advancedSelection",
					disabled,
					required,
					inputSettings: {
						options: mockOptions,
						createNewOption,
					},
				},
				{
					name: "textEditor",
					label: "Text Editor field",
					type: "textEditor",
					disabled,
					required,
				},
				{
					name: "mapCoordinates",
					label: "Map Coordinates example",
					type: "mapCoordinates",
					disabled,
					required,
					inputSettings: {
						googleMapsApiKey: "AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",
					},
				},
				{
					name: "upload",
					label: "Upload example",
					type: "upload",
					disabled,
					required,
					inputSettings: {
						onFileAdd,
						onFileDelete,
						limit: undefined,
					},
				},
				{
					name: "numberTable",
					label: "Number Table",
					type: "numberTable",
					required,
					disabled,
					inputSettings: {
						rowTotalLabel: "TOTAL",
						columnTotalLabel: "No. Rooms",
						topLeftLabel: "Day",
						rows: rows,
						columns: columns,
					},
				},
			],
		[disabled, required],
	);

	const sections = useMemo(() => {
		return [
			{
				title: "Section 1",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et magna elit.",
				collapsed,
				fields: [
					// row 1
					[["textField"], ["check"]],
					// row 2
					[["chipSelect"], ["dropdownSingle"]],
					[["address"], []],
					// row 3
					[["phoneSelect"], ["radio"]],
				],
			},
			{
				title: "Section 2",
				description: "Vivamus facilisis dui id nunc ornare, eu pulvinar libero mattis. Fusce volutpat efficitur dui vitae egestas.",
				collapsed,
				fields: [
					// row 1
					[[], [], []],
					// row 2
					[["toggle"], [], ["mapCoordinates"]],
					[[]],
					// row 3
					[[], ["advancedSelection"]],
				],
			},
			{
				title: "Section 3",
				description: "Phasellus egestas urna et ligula venenatis, at laoreet eros volutpat.",
				collapsed,
				fields: [
					// row 1
					[["color"], ["date"], ["time"]],
					// row 2
					[["textEditor"], []],
				],
			},
		];
	}, [collapsed]);

	const sectionsAmount = useMemo(() => sections.slice(0, showSections), [sections, showSections]);

	const buttons = useMemo<ButtonProps[]>(() => [
		{
			name: "reset",
			label: "Reset",
			onClick: () => reset(),
			color: "gray",
			variant: "outlined",
		},
		...renderButtons(handleSubmit, { showCancel, showSave }),
	], [handleSubmit, reset, showCancel, showSave]);

	return (
		<div style={{ boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)", height: containerHeight }}>
			{
				showState && <pre data-testId={testIds.FORM_STATE}>{JSON.stringify(state, null, "  ")}</pre>
			}
			<Form
				{...controller}
				title="Form Title"
				onBack={onBack ? () => alert("Cancelling, going back to previous site") : undefined}
				description="Suspendisse condimentum iaculis velit id vestibulum."
				fields={fields}
				sections={showSections > 0 ? sectionsAmount : undefined}
				buttons={buttons}
			/>
		</div>
	);
};

Playground.args = {
	showState: false,
	onBack: false,
	prepop: false,
	showSave: true,
	showCancel: true,
	required: true,
	disabled: false,
	showSections: 0,
	collapsed: false,
	containerHeight: "100vh",
	skeleton: false,
};

Playground.argTypes = {
	showState: {
		name: "Show state",
	},
	onBack: {
		name: "Show Back Button",
	},
	prepop: {
		name: "Prepopulate",
	},
	showSave: {
		name: "Show Save Button",
	},
	showCancel: {
		name: "Show Cancel Button",
	},
	required: {
		name: "Required",
	},
	disabled: {
		name: "Disabled",
		description: "This disabled propery is passed down to the individual fields and does not represent the disabled property on the form state.",
	},
	showSections: {
		name: "Show Sections",
	},
	collapsed: {
		name: "Collapsed",
	},
	containerHeight: {
		name: "Container Height",
	},
	skeleton: {
		name: "Skeleton",
	},
};
