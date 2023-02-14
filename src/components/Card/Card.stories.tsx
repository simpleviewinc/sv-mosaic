import * as React from "react";
import { ReactElement, useMemo } from "react";
import { boolean, withKnobs, select } from "@storybook/addon-knobs";
import { Meta } from "@storybook/addon-docs/blocks";
import styled from "styled-components";
import theme from "@root/theme";
import { format } from "date-fns";
import { ButtonProps } from "../Button";

// Components
import Card from "./Card";
import AddIcon from "@mui/icons-material/Add";
import ContactsIcon from "@mui/icons-material/Contacts";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";

export default {
	title: "Components/Card",
	decorators: [withKnobs],
} as Meta;

const SideCardActionsTitle = styled.span`
	color: ${theme.newColors.almostBlack["100"]};
	font-size: 14px;
	margin-left: 8px;
`;

const RecentActivityTitle = styled.span`
	color: ${theme.newColors.almostBlack["100"]};
	font-weight: ${theme.fontWeight.medium};
`;

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
	</div>
];

const topActions = [
	{
		color: "black",
		variant: "icon",
		onClick: () => alert("+ icon clicked"),
		mIcon: AddIcon,
	},
	{
		label: "Save",
		onClick: () => alert("Save button clicked"),
		color: "yellow",
		variant: "contained"
	},
	{
		label: "Remove",
		onClick: () => alert("Save button clicked"),
		color: "gray",
		variant: "outlined",
		mIcon: DeleteIcon,
	},
] as ButtonProps[];

const bottomActions = [
	{
		color: "teal",
		label: "Add a new task",
		variant: "text",
		onClick: () => alert("Add new task clicked"),
		mIcon: AddIcon,
	},
	{
		color: "teal",
		label: "Edit task",
		variant: "text",
		onClick: () => alert("Add new task clicked"),
		mIcon: CreateIcon,
	},
	{
		label: "Go to tasks",
		onClick: () => alert("Go to tasks clicked"),
		color: "yellow",
		variant: "contained"
	},
] as ButtonProps[];

export const Playground = (): ReactElement => {
	const showTitleIcon = boolean("Show title icon ", true);
	const showTopAction = boolean("Show top action", true);
	const showBottomAction = boolean("Show bottom action", true);
	const quantityOfTopActions = select("Top actions", [0, 1, 2, 3], 1);
	const quantityOfBottomActions = select("Bottom actions", [0, 1, 2, 3], 1);

	const slicedTopActions = useMemo(() => topActions.slice(0, quantityOfTopActions), [quantityOfTopActions]);
	const slicedBottomActions = useMemo(() => bottomActions.slice(0, quantityOfBottomActions), [quantityOfBottomActions]);

	return (
		<Card
			content={content}
			title={<SideCardActionsTitle>Section Title</SideCardActionsTitle>}
			titleIcon={
				showTitleIcon && <ContactsIcon sx={{ color: "black", width: 16 }} />
			}
			topActions={showTopAction && slicedTopActions}
			bottomActions={showBottomAction && slicedBottomActions}
		/>
	);
};

const recentActivityContent = [
	<ActivityWrapper key="activity-1">
		<ActivityDescription>First Activity</ActivityDescription>
		<ActivityDate>{format(new Date(), "MM/dd/yyyy")}</ActivityDate>
	</ActivityWrapper>,
	<ActivityWrapper key="activity-2">
		<ActivityDescription>Second Activity</ActivityDescription>
		<ActivityDate>{format(new Date(), "MM/dd/yyyy")}</ActivityDate>
	</ActivityWrapper>,
	<ActivityWrapper key="activity-3">
		<ActivityDescription>Third Activity</ActivityDescription>
		<ActivityDate>{format(new Date(), "MM/dd/yyyy")}</ActivityDate>
	</ActivityWrapper>,
	<ActivityWrapper key="activity-4">
		<ActivityDescription>Fourth Activity</ActivityDescription>
		<ActivityDate>{format(new Date(), "MM/dd/yyyy")}</ActivityDate>
	</ActivityWrapper>,
];

export const RecentActivity = (): ReactElement => {
	return (
		<Card
			title={<RecentActivityTitle>Recent Activity</RecentActivityTitle>}
			content={recentActivityContent}
			topActions={[
				{
					color: "teal",
					label: "Show All",
					variant: "text",
					onClick: () => alert("Show all clicked"),
				}
			]}
		/>
	);
};
