import * as React from "react";
import { ReactElement, useMemo, useState } from "react";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { Meta } from "@storybook/addon-docs/blocks";

// Components
import Content, { ContentField } from ".";
import {
	transform_chips,
	transform_colorPicker,
	transform_dateFormat,
	transform_thumbnail,
	transform_boolean,
} from "@root/transforms/column_transforms";
import { ChipsWrapper } from "./Content.styled";
import Chip from "../Chip";
import EditIcon from "@mui/icons-material/Edit";
import { ButtonProps } from "@root/components/Button";
import { Link } from "@mui/material";

export default {
	title: "Components/Content",
	decorators: [withKnobs],
} as Meta;

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
	emptyArrayValue: []
};

const multipleColumns = [
	[["tags"], ["colorPicker"]],
	[["toggle"], ["date"]],
	[["thumbnail"], ["chipsAsValue"]],
];

const oneColumn = [
	[["tags"]],
	[["toggle"]],
	[["thumbnail"]],
	[["date"]],
	[[]],
	[["colorPicker"]],
	[["chipsAsValue"]]
];

const oneColumnSecondContent = [
	[["tags"]],
	[["date"]],
	[["thumbnail"]],
];

const multipleColumnSecondContent = [
	[["tags"], ["date"]],
	[["thumbnail"]],
];

export const Playground = (): ReactElement => {
	const title = text("Title", "Main Content Title");
	const variant = select("Variant", ["standard", "card"], "standard")
	const singleColumn = boolean("Single column", false);
	const showChips = boolean("Show chips", true);
	const showButtons = select("Buttons", ["1", "2", "0", "undefined"], "2");
	const useSections = boolean("Use sections", true);
	const amountContent = select(
		"Amount of contents",
		[1, 2],
		1
	);
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
			}
		},
		{
			name: "showDetails",
			color: "teal",
			variant: "text",
			label: showMore ? "Less Details" : "More Details",
			onClick: showDetails,
			show: [useSections, showButtons !== "undefined", Number(showButtons) >= 2],
		},
	]

	const fields: ContentField[] = [
		{
			name: "chips",
			label: "Chips using transform_chips()",
			transforms: [transform_chips()],
			column: "tags",
			show: [showChips, () => showChips],
		},
		{
			name: "toggle",
			label: "Toggle using transform_boolean()",
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
			label: "Chips with no transform only value"
		},
	];

	const sectionsToDisplay = useMemo(() => {
		if (!useSections) {
			return;
		}

		if (singleColumn) {
			return showMore ? oneColumn : oneColumn.slice(0, 3);
		}

		if (!singleColumn) {
			return showMore ? multipleColumns : multipleColumns.slice(0, 2);
		}
	}, [useSections, showMore, oneColumn, multipleColumns, singleColumn]);

	return (
		<>
			<Content
				title={title}
				data={data}
				fields={fields}
				sections={sectionsToDisplay}
				buttons={buttons}
				variant={variant}
			/>
			{amountContent === 2 &&
				<Content
					title={"Second content"}
					data={data}
					fields={fields}
					sections={singleColumn ? oneColumnSecondContent : multipleColumnSecondContent}
					buttons={buttons}
					variant={variant}
				/>
			}
		</>
	);
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
			}
		},
		{
			name: "showDetails",
			color: "teal",
			variant: "text",
			label: "More Details",
			onClick: () => alert("More details") ,
		},
	]

	const fields: ContentField[] = [
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
			label: "Chips with no transform only value"
		},
		{
			name: "undefinedValue",
			label: "Field with undefined value"
		},
		{
			name: "emptyStringValue",
			label: "Field with empty string value"
		},
		{
			name: "emptyArrayValue",
			label: "Field with empty array value"
		},
	];

	const columns = [
		[["tags"], ["colorPicker"], []],
		[["toggle"], ["date"], ["colorPicker"],],
		[["thumbnail"], ["chipsAsValue"], ["thumbnail"]],
		[["undefinedValue"], ["emptyStringValue"], ["emptyArrayValue"]]
	];

	return (
		<>
			<Content
				title={"Standard content"}
				data={data}
				fields={fields}
				sections={columns}
				buttons={buttons}
			/>
			<br/>
			<Content
				title={"Card content"}
				data={data}
				fields={fields}
				sections={columns}
				buttons={buttons}
				variant={"card"}
			/>
		</>
	);
};
