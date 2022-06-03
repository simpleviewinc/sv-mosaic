import * as React from "react";
import { ReactElement } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Meta } from "@storybook/addon-docs/blocks";
import styled from "styled-components";
import theme from "../../utils/theme.js";

// Components
import Card from "../Card";
import RecentActity, { Activity } from "../RecentActivity";

export default {
	title: "Components/RecentActivity",
	decorators: [withKnobs],
} as Meta;

const RecentActivityTitle = styled.span`
	color: ${theme.colors.almostBlack}
	font-weight: ${theme.fontWeight.medium};
`;

const activities: Activity[] = [
	{
		description: "First activity",
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
		description: "Fourth activity",
		date: new Date(),
	},
	{
		description: "Fifth activity",
		date: new Date(),
	},
	{
		description: "Sixth activity",
		date: new Date(),
	},
	{
		description: "Seventh activity",
		date: new Date(),
	},
	{
		description: "Eighth activity",
		date: new Date(),
	},
	{
		description: "Ninth Activity",
		date: new Date(),
	},
	{
		description: "Tenth activity",
		date: new Date(),
	},
	{
		description: "This activity should not be displayed",
		date: new Date(),
	},
];

export const Example = (): ReactElement => {
	return (
		<Card
			title={<RecentActivityTitle>Recent Activity</RecentActivityTitle>}
			content={<RecentActity activities={activities} />}
			size="lg"
			topAction={
				{
					color: "teal",
					label: "Show All",
					variant: "text",
					onClick: () => alert("Show all clicked"),
				}
			}
		/>
	);
};
