import * as React from "react";
import type { ReactElement } from "react";
import theme from "#mosaic/theme";
import type { ButtonProps } from "#mosaic/components/Button";

// Components
import Card, { CardNoItems } from "#mosaic/components/Card";
import AddIcon from "@mui/icons-material/Add";
import ContactsIcon from "@mui/icons-material/Contacts";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { Text } from "@simpleview/sv-mosaic/components/Typography";
import { Column } from "@simpleview/sv-mosaic/components/common";
import Button from "@simpleview/sv-mosaic/components/Button";

export default {
	title: "Components/Card",
	parameters: {
		layout: "centered",
	},
};

const content = [
	<Column>
		<Text weight="semi" line="normal">Slide Title</Text>
		<Text size="sm" line="loose" color={theme.color.gray[800]}>Feb 13, 2025</Text>
	</Column>,
	<Column>
		<Text weight="semi" line="normal">Slide Title</Text>
		<Text size="sm" line="loose" color={theme.color.gray[800]}>Feb 13, 2025</Text>
	</Column>,
	<Column>
		<Text weight="semi" line="normal">Slide Title</Text>
		<Text size="sm" line="loose" color={theme.color.gray[800]}>Feb 13, 2025</Text>
	</Column>,
];

export const Playground = ({
	showTitleIcon,
	quantityOfTopActions,
	quantityOfBottomActions,
	count,
	showCount,
	collapsed,
	noItemDisplay,
	noItemDisplayCustom,
}: typeof Playground.args): ReactElement => {
	const topActions: ButtonProps[] = [
		{
			intent: "secondary",
			variant: "text",
			onClick: () => alert("+ icon clicked"),
			mIcon: AddIcon,
		},
		{
			label: "Save",
			onClick: () => alert("Save button clicked"),
			intent: "primary",
			variant: "contained",
		},
		{
			label: "Remove",
			onClick: () => alert("Remove button clicked"),
			intent: "secondary",
			variant: "contained",
			mIcon: DeleteIcon,
		},
	];

	const bottomActions: ButtonProps[] = [
		{
			intent: "info",
			label: "Add a new task",
			variant: "text",
			onClick: () => alert("Add new task clicked"),
			mIcon: AddIcon,
		},
		{
			intent: "info",
			label: "Edit task",
			variant: "text",
			onClick: () => alert("Add new task clicked"),
			mIcon: CreateIcon,
		},
		{
			label: "Go to tasks",
			onClick: () => alert("Go to tasks clicked"),
			intent: "primary",
			variant: "contained",
		},
	];

	return (
		<div style={{ maxWidth: "100%", width: 400 }}>
			<Card
				content={content.slice(0, count)}
				title="Section Title"
				titleIcon={showTitleIcon && ContactsIcon}
				topActions={topActions.slice(0, quantityOfTopActions)}
				bottomActions={bottomActions.slice(0, quantityOfBottomActions)}
				count={showCount !== "No" ? count : undefined}
				showZeroCount={showCount !== "Yes, if greater than 0"}
				collapsed={collapsed}
				noItems={noItemDisplay === "Default" ? (
					undefined
				) : noItemDisplay === "Custom Text" ? (
					noItemDisplayCustom
				) : (
					<CardNoItems>
						You have no items.
						{" "}
						<Button
							label="Where are my items?"
							size="inherit"
							variant="text"
							intent="info"
							onClick={() => alert("Create one clicked")}
						/>
					</CardNoItems>
				)}
			/>
		</div>
	);
};

Playground.args = {
	showTitleIcon: true,
	quantityOfTopActions: 1,
	quantityOfBottomActions: 1,
	count: 0,
	showCount: "No",
	collapsed: false,
	noItemDisplay: "Default",
	noItemDisplayCustom: "These aren't the droids you're looking for.",
};

Playground.argTypes = {
	showTitleIcon: {
		name: "Show Title Icon",
	},
	quantityOfTopActions: {
		name: "Top Actions",
		control: { type: "number", min: 0, max: 3 },
	},
	quantityOfBottomActions: {
		name: "Bottom Actions",
		control: { type: "number", min: 0, max: 3 },
	},
	count: {
		name: "Count",
		control: { type: "number", min: 0, max: 3 },
	},
	showCount: {
		name: "Show Count",
		options: ["No", "Yes", "Yes, if greater than 0"],
		control: { type: "select" },
	},
	collapsed: {
		name: "Collapsed",
	},
	noItemDisplay: {
		name: "No Item Display",
		options: ["Default", "Custom Text", "React Node"],
		control: { type: "select" },
	},
	noItemDisplayCustom: {
		name: "Custom No Item Display",
		if: { arg: "noItemDisplay", eq: "Custom Text" },
	},
};
