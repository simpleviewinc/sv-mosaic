import { render, screen, cleanup } from "@testing-library/react";
import * as React from "react";
import RecentActivity from "./RecentActivity";
import { Activity } from "./RecentActivityTypes";

afterEach(cleanup);

export const activities: Activity[] = [
	{
		description: "First Activity",
		date: new Date(2022, 5, 10),
	},
	{
		description: "Second activity",
		date: new Date(2022, 5, 10),
	},
	{
		description: "Third activity",
		date: new Date(2022, 5, 10),
	},
	{
		description: "4to activity",
		date: new Date(2022, 5, 10),
	},
	{
		description: "5th Activity",
		date: new Date(2022, 5, 10),
	},
	{
		description: "6th activity",
		date: new Date(2022, 5, 10),
	},
	{
		description: "7th activity",
		date: new Date(2022, 5, 10),
	},
	{
		description: "8th activity",
		date: new Date(2022, 5, 10),
	},
	{
		description: "9th Activity",
		date: new Date(2022, 5, 10),
	},
	{
		description: "10th activity",
		date: new Date(2022, 5, 10),
	},
	{
		description: "This activity should not be displayed",
		date: new Date(2022, 5, 10),
	},
];

const { getByText, getAllByTestId } = screen;

describe("RecentActivity component", () => {
	it("should the activity content", () => {
		render(<RecentActivity activities={[{...activities[0]}]} />);

		expect(getByText("First Activity")).toBeDefined();
		expect(getByText("06/10/2022")).toBeDefined();
	});

	it("should only show 10 activities", () => {
		render(<RecentActivity activities={activities} />);
		const allActivities = getAllByTestId("activity");

		expect(allActivities.length).toBe(10);
	});
});
