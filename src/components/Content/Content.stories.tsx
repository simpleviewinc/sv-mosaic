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
};

const twoColumns = [
	[["tags"], ["colorPicker"]],
	[["toggle"], ["date"]],
	[["thumbnail"], ["chipsAsValue"]],
];

const oneColumn = [
	[["tags"]],
	[["toggle"]],
	[["thumbnail"]],
	[["date"]],
	[["colorPicker"]],
	[["chipsAsValue"]]
];

export const Playground = (): ReactElement => {
	const title = text("Title", "Main Section Title");
	const variant = select("Varian", ["standard", "card"], "standard")
	const singleColumn = boolean("Single column", false);
	const showChips = boolean("Show chips", true);
	const useSections = boolean("Use sections", true);
	const useButtons = boolean("Use buttons", true);
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
			label: "Color using transfomr_colorPicker()",
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

	const buttonsToDisplay = useMemo(() => useSections ? buttons :  buttons.slice(0, 1) ,[buttons]);

	const sectionsToDisplay = useMemo(() => {
		if (!useSections) {
			return;
		}

		if (singleColumn) {
			return showMore ? oneColumn : oneColumn.slice(0, 3);
		}

		if (!singleColumn) {
			return showMore ? twoColumns : twoColumns.slice(0, 2);
		}
	}, [useSections, showMore, oneColumn, twoColumns, singleColumn]);

	return (
		<Content
			title={title}
			data={data}
			fields={fields}
			sections={sectionsToDisplay}
			buttons={useButtons && buttonsToDisplay}
			variant={variant}
		/>
	);
};
