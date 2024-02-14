import * as React from "react";
import { ReactElement } from "react";
import { boolean, withKnobs, select } from "@storybook/addon-knobs";
import { Meta } from "@storybook/addon-docs/blocks";
import styled from "styled-components";
import theme from "@root/theme";
import format from "date-fns/format";
import { ButtonProps } from "../Button";

// Components
import Card from "./Card";
import AddIcon from "@mui/icons-material/Add";
import ContactsIcon from "@mui/icons-material/Contacts";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { DATE_FORMAT_FULL } from "@root/constants";

export default {
	title: "Components/Card",
	decorators: [withKnobs],
} as Meta;

const ActivityWrapper = styled.div`
  margin: 32px 0 32px 0;
`;

const ActivityDescription = styled.p`
  color: ${theme.newColors.grey4["100"]};
  font-size: 14px;
  margin-bottom: 8px;
`;

const ActivityDate = styled.span`
  color: ${theme.newColors.grey3["100"]};
  font-size: 14px;
`;

const content = [
	<p key="p-key-1">First Element</p>,
	<p key="p-key-2">Second Element</p>,
	<div key="div-key">
		<p key="div-p-key-1">Paragraph</p>
		<button key="div-button-key-1">Button</button>
	</div>,
];

export const Playground = (): ReactElement => {
	const showTitleIcon = boolean("Show title icon ", true);
	const showTopAction = boolean("Show top action", true);
	const showBottomAction = boolean("Show bottom action", true);
	const quantityOfTopActions = select("Top actions", [0, 1, 2, 3], 1);
	const quantityOfBottomActions = select("Bottom actions", [0, 1, 2, 3], 1);

	const topActions: ButtonProps[] = [
		{
			color: "black",
			variant: "icon",
			onClick: () => alert("+ icon clicked"),
			mIcon: AddIcon,
			show: () => quantityOfTopActions > 0,
		},
		{
			label: "Save",
			onClick: () => alert("Save button clicked"),
			color: "yellow",
			variant: "contained",
			show: () => quantityOfTopActions > 1,
		},
		{
			label: "Remove",
			onClick: () => alert("Remove button clicked"),
			color: "gray",
			variant: "outlined",
			mIcon: DeleteIcon,
			show: () => quantityOfTopActions > 2,
		},
	];

	const bottomActions: ButtonProps[] = [
		{
			color: "teal",
			label: "Add a new task",
			variant: "text",
			onClick: () => alert("Add new task clicked"),
			mIcon: AddIcon,
			show: () => quantityOfBottomActions > 0,
		},
		{
			color: "teal",
			label: "Edit task",
			variant: "text",
			onClick: () => alert("Add new task clicked"),
			mIcon: CreateIcon,
			show: () => quantityOfBottomActions > 1,
		},
		{
			label: "Go to tasks",
			onClick: () => alert("Go to tasks clicked"),
			color: "yellow",
			variant: "contained",
			show: () => quantityOfBottomActions > 2,
		},
	];

	return (
		<Card
			content={content}
			title="Section Title"
			titleIcon={showTitleIcon && ContactsIcon}
			topActions={showTopAction && topActions}
			bottomActions={showBottomAction && bottomActions}
		/>
	);
};

const recentActivityContent = [
	<ActivityWrapper key="activity-1">
		<ActivityDescription>First Activity</ActivityDescription>
		<ActivityDate>{format(new Date(), DATE_FORMAT_FULL)}</ActivityDate>
	</ActivityWrapper>,
	<ActivityWrapper key="activity-2">
		<ActivityDescription>Second Activity</ActivityDescription>
		<ActivityDate>{format(new Date(), DATE_FORMAT_FULL)}</ActivityDate>
	</ActivityWrapper>,
	<ActivityWrapper key="activity-3">
		<ActivityDescription>Third Activity</ActivityDescription>
		<ActivityDate>{format(new Date(), DATE_FORMAT_FULL)}</ActivityDate>
	</ActivityWrapper>,
	<ActivityWrapper key="activity-4">
		<ActivityDescription>Fourth Activity</ActivityDescription>
		<ActivityDate>{format(new Date(), DATE_FORMAT_FULL)}</ActivityDate>
	</ActivityWrapper>,
];

export const RecentActivity = (): ReactElement => {
	return (
		<Card
			title="Recent Activity"
			content={recentActivityContent}
			topActions={[
				{
					color: "teal",
					label: "Show All",
					variant: "text",
					onClick: () => alert("Show all clicked"),
				},
			]}
		/>
	);
};
