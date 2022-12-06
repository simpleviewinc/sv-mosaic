import * as React from "react";
import { ReactElement } from "react";
import { boolean, withKnobs } from "@storybook/addon-knobs";
import { Meta } from "@storybook/addon-docs/blocks";
import styled from "styled-components";
import theme from "@root/theme";

// Components
import Card from "./Card";
import AddIcon from "@mui/icons-material/Add";
import ContactsIcon from "@mui/icons-material/Contacts";
import { format } from "date-fns";

export default {
	title: "Components/Card",
	decorators: [withKnobs],
} as Meta;

const SideCardActionsTitle = styled.span`
	color: ${theme.newColors.almostBlack["100"]}
	font-size: 14px;
	margin-left: 8px;
`;

const RecentActivityTitle = styled.span`
	color: ${theme.newColors.almostBlack["100"]}
	font-weight: ${theme.fontWeight.medium};
`;

const ActivityWrapper = styled.div`
  margin: 32px 0 32px 0;
`;

const ActivityDescription = styled.p`
  color: ${theme.colors.gray700};
  font-size: 14px;
  margin-bottom: 8px;
`;

const ActivityDate = styled.span`
  color: ${theme.colors.gray600};
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

export const Playground = (): ReactElement => {
	const showTitleIcon = boolean("Show title icon ", true);
	const showTopAction = boolean("Show top action", true);
	const showBottomAction = boolean("Show bottom action", true);

	return (
		<Card
			content={content}
			title={<SideCardActionsTitle>Section Title</SideCardActionsTitle>}
			titleIcon={
				showTitleIcon && <ContactsIcon sx={{ color: "black", width: 16 }} />
			}
			topAction={
				showTopAction && {
					color: "black",
					variant: "icon",
					onClick: () => alert("+ icon clicked"),
					mIcon: AddIcon,
				}
			}
			bottomAction={
				showBottomAction && {
					color: "teal",
					label: "Add a new task",
					variant: "text",
					onClick: () => alert("Add new task clicked"),
					mIcon: AddIcon,
				}
			}
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
			topAction={{
				color: "teal",
				label: "Show All",
				variant: "text",
				onClick: () => alert("Show all clicked"),
			}}
		/>
	);
};
