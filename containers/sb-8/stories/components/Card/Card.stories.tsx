import * as React from "react";
import type { ReactElement } from "react";
import styled from "styled-components";
import theme from "#mosaic/theme";
import format from "date-fns/format";
import type { ButtonProps } from "#mosaic/components/Button";

// Components
import Card from "#mosaic/components/Card";
import AddIcon from "@mui/icons-material/Add";
import ContactsIcon from "@mui/icons-material/Contacts";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { DATE_FORMAT_FULL } from "#mosaic/constants";
import { Text } from "@simpleview/sv-mosaic/components/Typography";
import { Column } from "@simpleview/sv-mosaic/components/common";

export default {
	title: "Components/Card",
	parameters: {
		layout: "centered",
	},
};

const ActivityWrapper = styled.div`
  margin: 32px 0 32px 0;
`;

const ActivityDescription = styled.p`
  color: ${theme.newColors.grey4["100"]};
  margin-bottom: 8px;
`;

const ActivityDate = styled.span`
  color: ${theme.newColors.grey3["100"]};
`;

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
	showZeroCount,
	collapsed,
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
				content={content}
				title="Section Title"
				titleIcon={showTitleIcon && ContactsIcon}
				topActions={topActions.slice(0, quantityOfTopActions)}
				bottomActions={bottomActions.slice(0, quantityOfBottomActions)}
				count={count !== undefined && count >= 0 ? count : undefined}
				showZeroCount={showZeroCount}
				collapsed={collapsed}
			/>
		</div>
	);
};

Playground.args = {
	showTitleIcon: true,
	quantityOfTopActions: 1,
	quantityOfBottomActions: 1,
	count: 0,
	showZeroCount: false,
	collapsed: false,
};

Playground.argTypes = {
	showTitleIcon: {
		name: "Show Title Icon",
	},
	quantityOfTopActions: {
		options: [0, 1, 2, 3],
		control: { type: "select" },
		name: "Top Actions",
	},
	quantityOfBottomActions: {
		options: [0, 1, 2, 3],
		control: { type: "select" },
		name: "Bottom Actions",
	},
	count: {
		name: "Count",
	},
	showZeroCount: {
		name: "Display Zero Count",
	},
	collapsed: {
		name: "Collapsed",
	},
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
					intent: "info",
					label: "Show All",
					variant: "text",
					onClick: () => alert("Show all clicked"),
				},
			]}
		/>
	);
};
