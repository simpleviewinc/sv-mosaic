import * as React from "react";
import type { ReactElement } from "react";

// Components
import type { ContentFieldDef } from "#mosaic/components/Content";
import Content from "#mosaic/components/Content";
import ChipList from "#mosaic/components/ChipList";
import {
	transform_chips,
	transform_colorPicker,
	transform_dateFormat,
	transform_thumbnail,
	transform_boolean,
	transform_dataview,
} from "#mosaic/transforms";
import EditIcon from "@mui/icons-material/Edit";
import type { ButtonProps } from "#mosaic/components/Button";
import Link from "@mui/material/Link";

export default {
	title: "Components/Content",
	parameters: {
		layout: "centered",
	},
};

const chips = [
	{
		label: "Chip as value 1",
		value: "chip_value1",
	},
	{
		label: "Chip as value 2",
		value: "chip_value2",
	},
	{
		label: "Chip as value 3",
		value: "chip_value3",
	},
];

const data = {
	tags: [
		{
			label: "Chip 1",
			value: "chip-1",
		},
		{
			label: "Chip 2",
			value: "chip-2",
		},
		{
			label: "Chip 3",
			value: "chip-3",
		},
		{
			label: "Chip 4",
			value: "chip-4",
		},
	],
	date: new Date("December 17, 1995 03:24:00"),
	toggle: false,
	colorPicker: "#a8001791",
	thumbnail:
		"https://res.cloudinary.com/simpleview/image/upload/v1542821844/clients/grandrapids/_OD_0354_c78fbb66-c75a-4804-9430-9af38ed8e9d5.jpg",
	chipsAsValue: (
		<ChipList options={chips} />
	),
	undefinedValue: undefined,
	emptyStringValue: "",
	emptyArrayValue: [],
	animals: [{ id: 1, species: "Dog", color: "Brown" }, { id: 2, species: "Cat", color: "White" }],
	fieldWithLongWord: "Pneumonoultramicroscopicsilicovolcanoconiosis",
	fieldWithLongURL: "https://simpleviewinc.github.io/sv-mosaic/master/?path=/story/components-content--kitchen-sink",
	fieldWithLongSentence: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis diam non imperdiet luctus. Morbi in augue leo. Vestibulum non tellus in elit molestie pretium sollicitudin eget purus. Mauris varius, est sed placerat ornare, nulla libero consequat nisi, id tempor nibh felis non velit.",
	multipleTransforms: "This is some text",
	arrayOfNodes: [<div key={1}>Foo</div>, <div key={2}>Bar</div>],
};

export const Playground = ({
	title,
	sections,
	showButtons,
	columns,
	columnBreakpoints,
}: typeof Playground.args): ReactElement => {
	const buttons: ButtonProps[] = [
		{
			name: "edit",
			tooltip: "Edit",
			mIcon: EditIcon,
			intent: "secondary",
			variant: "text",
			show: [showButtons !== "undefined", Number(showButtons) >= 1],
			onClick: function () {
				alert("Edit button clicked");
			},
		},
		{
			name: "showDetails",
			intent: "info",
			variant: "text",
			label: "Create Card",
			onClick: () => alert("Create Card clicked"),
			show: [showButtons !== "undefined", Number(showButtons) >= 2],
		},
	];

	const fields: ContentFieldDef[] = [
		{
			name: "chips",
			label: "Chips using transform_chips()",
			tooltip: "This is a list of chips",
			transforms: [transform_chips()],
			column: "tags",
		},
		{
			name: "date",
			label: "Date using transform_dateFormat()",
			transforms: [transform_dateFormat()],
		},
		{
			name: "toggle",
			label: "Toggle using transform_boolean()",
			tooltip: (
				<>
					This came in as a boolean, but
					<br />
					will displayed as yes or no
				</>
			),
			transforms: [transform_boolean()],
		},
		{
			name: "color",
			label: "Color using transform_colorPicker()",
			transforms: [transform_colorPicker()],
			column: "colorPicker",
		},
		{
			name: "thumbnail",
			label: "Thumbnail using transform_thumbnail()",
			transforms: [transform_thumbnail({ width: 150, height: 150 })],
		},
		{
			name: "chipsAsValue",
			label: "Chips with no transform only value",
		},
		{
			name: "undefinedValue",
			label: "Undefined Value",
		},
		{
			name: "emptyStringValue",
			label: "Empty String",
		},
		{
			name: "emptyArrayValue",
			label: "Empty Array",
		},
		{
			name: "animals",
			label: "Animals",
			transforms: [transform_dataview({ columns: [{ name: "species", label: "Species" }, { name: "color", label: "Color" }] })],
		},
		{
			name: "fieldWithLongWord",
			label: "Long Word",
		},
		{
			name: "fieldWithLongURL",
			label: "Long URL",
		},
		{
			name: "fieldWithLongSentence",
			label: "Long Sentence",
		},
		{
			name: "multipleTransforms",
			label: "Multiple Transforms",
			transforms: [
				({ data }) => <div style={{ color: "red" }}>{data as string}</div>,
				({ data }) => <div style={{ fontSize: "2rem" }}>{data as React.ReactNode}</div>,
			],
		},
		{
			name: "arrayOfNodes",
			label: "Array of Nodes",
		},
	];

	return (
		<div style={{ maxWidth: "100%", width: 1200 }}>
			<Content
				title={title}
				data={data}
				fields={fields}
				sections={sections}
				buttons={buttons}
				columns={columns !== "custom" ? columns : columnBreakpoints}
			/>
		</div>
	);
};

Playground.args = {
	title: "Main Content Title",
	showButtons: "2",
	provideColumns: false,
	columns: "md",
	columnBreakpoints: {
		md: 2,
	},
	sections: Object.keys(data).map(key => [key]),
};

Playground.argTypes = {
	title: {
		name: "Title",
	},
	showButtons: {
		name: "Buttons",
		options: ["1", "2", "0", "undefined"],
		control: { type: "select" },
	},
	provideColumns: {
		name: "Provide Columns",
	},
	columns: {
		name: "Columns",
		options: ["sm", "md", "lg", "xl", "2xl", "custom"],
		control: { type: "select" },
		if: { arg: "provideColumns" },
	},
	columnBreakpoints: {
		name: "Column Breakpoints",
		if: { arg: "columns", eq: "custom" },
	},
	sections: {
		name: "Sections",
	},
};

export const KitchenSink = (): ReactElement => {

	const buttons: ButtonProps[] = [
		{
			name: "edit",
			tooltip: "Edit",
			mIcon: EditIcon,
			intent: "secondary",
			variant: "text",
			onClick: function () {
				alert("Edit button clicked");
			},
		},
		{
			name: "showDetails",
			intent: "info",
			variant: "text",
			label: "More Details",
			onClick: () => alert("More details"),
		},
	];

	const fields: ContentFieldDef[] = [
		{
			name: "chips",
			label: "Chips using transform_chips()",
			transforms: [transform_chips()],
			column: "tags",
		},
		{
			name: "toggle",
			label: <Link href="#">Toggle using transform_boolean()</Link>,
			transforms: [transform_boolean()],
		},
		{
			name: "date",
			label: "Date using transform_dateFormat()",
			transforms: [transform_dateFormat()],
		},
		{
			name: "color",
			label: "Color using transform_colorPicker()",
			transforms: [transform_colorPicker()],
			column: "colorPicker",
		},
		{
			name: "thumbnail",
			label: "Thumbnail using transform_thumbnail()",
			transforms: [transform_thumbnail({ width: 150, height: 150 })],
		},
		{
			name: "chipsAsValue",
			label: "Chips with no transform only value",
		},
		{
			name: "undefinedValue",
			label: "Field with undefined value",
		},
		{
			name: "emptyStringValue",
			label: "Field with empty string value",
		},
		{
			name: "emptyArrayValue",
			label: "Field with empty array value",
		},
		{
			name: "fieldWithLongWord",
			label: "Long Word",
		},
		{
			name: "fieldWithLongURL",
			label: "Long URL",
			transforms: [
				({ data }) => <Link href={data as string}>{data as string}</Link>,
			],
		},
		{
			name: "fieldWithLongSentence",
			label: "Long Sentence",
		},
	];

	const columns = [
		["tags", "colorPicker", undefined],
		["toggle", "date", "colorPicker"],
		["thumbnail", "chipsAsValue", undefined],
		["undefinedValue", "emptyStringValue", "emptyArrayValue"],
		["fieldWithLongWord", "fieldWithLongURL", "fieldWithLongSentence"],
	];

	return (
		<>
			<Content
				title="Standard content"
				data={data}
				fields={fields}
				sections={columns}
				buttons={buttons}
			/>
			<br />
			<Content
				title="Card content"
				data={data}
				fields={fields}
				sections={columns}
				buttons={buttons}
				variant="card"
			/>
		</>
	);
};
