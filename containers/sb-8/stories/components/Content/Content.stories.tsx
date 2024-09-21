import * as React from "react";
import { ReactElement, useState } from "react";

// Components
import Content, { ContentFieldDef } from "@root/components/Content";
import Chip from "@root/components/Chip";
import { ChipsWrapper } from "@root/components/Content/Content.styled";
import {
	transform_chips,
	transform_colorPicker,
	transform_dateFormat,
	transform_thumbnail,
	transform_boolean,
	transform_dataview,
} from "@root/transforms/column_transforms";
import EditIcon from "@mui/icons-material/Edit";
import { ButtonProps } from "@root/components/Button";
import Link from "@mui/material/Link";

export default {
	title: "Components/Content",
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
		<ChipsWrapper>
			{chips?.map((chip) => (
				<Chip key={`${chip?.label}-${chip?.value}`} label={chip?.label} />
			))}
		</ChipsWrapper>
	),
	undefinedValue: undefined,
	emptyStringValue: "",
	emptyArrayValue: [],
	animals: [{ id: 1, species: "Dog", color: "Brown" }, { id: 2, species: "Cat", color: "White" }],
	cars: [{ id: 1, make: "BMW", model: "M3" }, { id: 2, make: "Volkswagen", model: "Golf" }],
	multipleTransforms: "This is some text",
	fieldWithLongWord: "Pneumonoultramicroscopicsilicovolcanoconiosis",
	fieldWithLongURL: "https://simpleviewinc.github.io/sv-mosaic/master/?path=/story/components-content--kitchen-sink",
	fieldWithLongSentence: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis diam non imperdiet luctus. Morbi in augue leo. Vestibulum non tellus in elit molestie pretium sollicitudin eget purus. Mauris varius, est sed placerat ornare, nulla libero consequat nisi, id tempor nibh felis non velit.",
};

const sectionConfigs = {
	"Single Column": [
		[["tags"]],
		[["colorPicker"]],
		[["toggle"]],
		[["date"]],
		[["thumbnail"]],
		[["chipsAsValue"]],
		[["animals"]],
		[["cars"]],
		[["multipleTransforms"]],
	],
	"Two Columns": [
		[["tags"], ["colorPicker"]],
		[["toggle"], ["date"]],
		[["thumbnail"], ["chipsAsValue"]],
		[["animals"], ["cars"]],
		[["multipleTransforms"]],
	],
	"Three Columns": [
		[["tags"], ["colorPicker"], []],
		[["toggle"], ["date"], ["thumbnail"]],
		[["animals"], ["cars"], ["chipsAsValue"]],
		[["multipleTransforms"]],
	],
};

export const Playground = ({
	title,
	variant,
	sectionConfigKey,
	showButtons,
	showFirstRowItems,
	amountContent,
}: typeof Playground.args): ReactElement => {
	const [showMore, setShowMore] = useState(false);

	/**
	 * Toggles the state use to show or hide the content.
	 */
	const showDetails = () => {
		setShowMore(!showMore);
	};

	const buttons: ButtonProps[] = [
		{
			name: "edit",
			label: "Edit",
			mIcon: EditIcon,
			color: "gray",
			variant: "icon",
			show: [showButtons !== "undefined", Number(showButtons) >= 1],
			onClick: function () {
				alert("Edit button clicked");
			},
		},
		{
			name: "showDetails",
			color: "teal",
			variant: "text",
			label: showMore ? "Less Details" : "More Details",
			onClick: showDetails,
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
			show: showFirstRowItems,
		},
		{
			name: "toggle",
			label: "Toggle using transform_boolean()",
			tooltip: <>This came in as a boolean, but<br />will displayed as yes or no</>,
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
			show: showFirstRowItems,
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
			name: "animals",
			label: "Animals",
			transforms: [transform_dataview({ columns: [{ name: "species", label: "Species" }, { name: "color", label: "Color" }] })],
		},
		{
			name: "cars",
			label: "Cars",
			transforms: [transform_dataview({ columns: [{ name: "make", label: "Make" }, { name: "model", label: "Model" }] })],
		},
		{
			name: "multipleTransforms",
			label: "Multiple Transforms",
			transforms: [
				({ data }) => <div style={{ color: "red" }}>{data as string}</div>,
				({ data }) => <div style={{ fontSize: "2rem" }}>{data as React.ReactNode}</div>,
			],
		},
	];

	const sections = sectionConfigs[sectionConfigKey];

	return (
		<>
			<Content
				title={title}
				data={data}
				fields={fields}
				sections={sections.slice(0, showMore ? undefined : 2)}
				buttons={buttons}
				variant={variant}
			/>
			{amountContent === 2 && (
				<Content
					title="Second content"
					data={data}
					fields={fields}
					sections={sections}
					variant={variant}
				/>
			)}
		</>
	);
};

Playground.args = {
	title: "Main Content Title",
	variant: "standard",
	sectionConfigKey: "Single Column",
	showButtons: "2",
	showFirstRowItems: true,
	amountContent: 1,
};

Playground.argTypes = {
	title: {
		name: "Title",
	},
	variant: {
		name: "Variant",
		options: ["standard", "card"],
		control: { type: "select" },
	},
	sectionConfigKey: {
		name: "Sections",
		options: ["Single Column", "Two Columns", "Three Columns"],
		control: { type: "select" },
	},
	showButtons: {
		name: "Buttons",
		options: ["1", "2", "0", "undefined"],
		control: { type: "select" },
	},
	showFirstRowItems: {
		name: "Show first row",
	},
	amountContent: {
		name: "Amount of contents",
		options: [1, 2],
		control: { type: "select" },
	},
};

export const KitchenSink = (): ReactElement => {

	const buttons: ButtonProps[] = [
		{
			name: "edit",
			label: "Edit",
			mIcon: EditIcon,
			color: "gray",
			variant: "icon",
			onClick: function () {
				alert("Edit button clicked");
			},
		},
		{
			name: "showDetails",
			color: "teal",
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
		[["tags"], ["colorPicker"], []],
		[["toggle"], ["date"], ["colorPicker"]],
		[["thumbnail"], ["chipsAsValue"], []],
		[["undefinedValue"], ["emptyStringValue"], ["emptyArrayValue"]],
		[["fieldWithLongWord"], ["fieldWithLongURL"], ["fieldWithLongSentence"]],
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
