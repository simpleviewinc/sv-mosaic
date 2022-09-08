import * as React from "react";
import { ReactElement } from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { Meta } from "@storybook/addon-docs/blocks";

// Components
import Content, { ContentFieldDef } from ".";
import {
	transform_chips,
	transform_colorPicker,
	transform_dateFormat,
	transform_thumbnail,
	transform_boolean
} from "@root/transforms/column_transforms";
import { MosaicObject } from "@root/types";

export default {
	title: "Components/Content",
	decorators: [withKnobs],
} as Meta;

const values = {
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
	thumbnail: "https://res.cloudinary.com/simpleview/image/upload/v1542821844/clients/grandrapids/_OD_0354_c78fbb66-c75a-4804-9430-9af38ed8e9d5.jpg"
};

const twoColumns = [
	[["tags"], ["colorPicker"]],
	[["toggle"], ["date"]],
	[["thumbnail"]],
];

const oneColumn = [
	[["tags"]],
	[["toggle"]],
	[["thumbnail"]],
	[["date"]],
	[["colorPicker"]],
];

const onAdd = () => alert("Add button clicked");
const onEdit = () => alert("Edit button clicked");

export const Playground = (): ReactElement => {
	const title = text("Title", "Main Section Title");
	const showEdit = boolean("Show edit button", true);
	const showAdd = boolean("Show add button", true);
	const singleColumn = boolean("Single column", false);
	const showChips = boolean("Show chips", true);

	const fieldDef: ContentFieldDef[] = [
		{
			name: "chips",
			label: "Chips using transform_chips()",
			transforms: [transform_chips()],
			column: "tags",
			show: [showChips, () => showChips]
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
			column: "colorPicker"
		},
		{
			name: "thumbnail",
			label: "Thumbnail using transform_thumbnail()",
			transforms: [transform_thumbnail({ width: 150, height: 150 })],
		},
	];

	/**
	 * Simulates a DB calls that fetch the values for
	 * each field.
	 * @returns the resolved values
	 */
	const getValues = async (): Promise<MosaicObject> => {
		return new Promise((resolve) => {
			setTimeout(() => {
				if (showAdd) {
					resolve(values);
				} else {
					resolve(undefined)
				}
			}, 500);
		});
	};

	return (
		<Content
			title={title}
			getValues={getValues}
			fieldDef={fieldDef}
			sections={singleColumn ? oneColumn : twoColumns}
			onEdit={showEdit && onEdit}
			onAdd={onAdd}
		/>
	);
};
