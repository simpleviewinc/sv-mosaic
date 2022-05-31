import * as React from "react";
import { ReactElement } from "react";
import { boolean, withKnobs } from "@storybook/addon-knobs";
import { Meta } from "@storybook/addon-docs/blocks";

// Components
import SummaryPageCard from "./SummaryPageCard";
import AddIcon from "@mui/icons-material/Add";
import ContactsIcon from "@mui/icons-material/Contacts";
import RecentActity, { Activity } from "../RecentActivity";
import {
	RecentActivityTitle,
	SideCardActionsTitle,
} from "./SummaryPageCard.styled";

export default {
	title: "Components/SummaryPageCard",
	decorators: [withKnobs],
} as Meta;

const ContentExample = () => <h1>Content Example</h1>;
const activities: Activity[] = [
	{
		description: "First Activity",
		date: new Date(),
	},
	{
		description: "Second activity",
		date: new Date(),
	},
	{
		description: "Third activity",
		date: new Date(),
	},
	{
		description: "4to activity",
		date: new Date(),
	},
	{
		description: "5th Activity",
		date: new Date(),
	},
	{
		description: "6th activity",
		date: new Date(),
	},
	{
		description: "7th activity",
		date: new Date(),
	},
	{
		description: "8th activity",
		date: new Date(),
	},
	{
		description: "9th Activity",
		date: new Date(),
	},
	{
		description: "10th activity",
		date: new Date(),
	},
	{
		description: "This activity should not be displayed",
		date: new Date(),
	},
];

export const KitchenSink = (): ReactElement => {
	const showTitleIcon = boolean("Show title icon ", true);
	const showTopAction = boolean("Show top action", true);
	const showBottomAction = boolean("Show bottom action", true);

	return (
		<>
			<div style={{ marginBottom: 20 }}>
				<SummaryPageCard
					content={<ContentExample />}
					title={<SideCardActionsTitle>Section Title</SideCardActionsTitle>}
					titleIcon={showTitleIcon && <ContactsIcon sx={{ color: "black", width: 16 }} />}
					size="md"
					topAction={ showTopAction && {
						color: "black",
						variant: "icon",
						onClick: () => alert("+ icon clicked"),
						mIcon: AddIcon,
					}}
					bottomAction={ showBottomAction && {
						color: "teal",
						label: "Add a new task",
						variant: "text",
						onClick: () => alert("Add new task clicked"),
						mIcon: AddIcon,
					}}
				/>
			</div>
			<div>
				<SummaryPageCard
					title={<RecentActivityTitle>Recent Activity</RecentActivityTitle>}
					content={<RecentActity activities={activities} />}
					size="lg"
					topAction={showTopAction && {
						color: "teal",
						label: "Show All",
						variant: "text",
						onClick: () => alert("Show all clicked"),
					}}
				/>
			</div>
		</>
	);
};
