import * as React from "react";
import { render, screen, cleanup, fireEvent, within } from "@testing-library/react";

import Form, { useForm } from "@root/components/Form";
import type { SectionDef } from "@root/components/Form";
import type { FieldDef } from "@root/components/Field";
import testIds from "@root/utils/testIds";

afterEach(cleanup);

const fields: FieldDef[] = [
	{
		name: "fieldA",
		label: "Field A",
		type: "text",
	},
	{
		name: "fieldB",
		label: "Field B",
		type: "text",
	},
];

const sections: SectionDef[] = [
	{
		id: "section-a",
		title: "Section A",
		description: "Description for section A",
		fields: [[["fieldA"]]],
	},
	{
		id: "section-b",
		title: "Section B",
		description: "Description for section B",
		fields: [[["fieldB"]]],
	},
];

function TestForm() {
	const controller = useForm();

	return (
		<Form
			{...controller}
			title="Test Form"
			fields={fields}
			sections={sections}
		/>
	);
}

/**
 * Finds the CardHeading (the clickable, aria-controls-carrying wrapper)
 * that belongs to the section with the given title.
 */
function getSectionHeadingButton(title: string) {
	const headings = screen.getAllByTestId(testIds.CARD_HEADING);
	const match = headings.find(heading => heading.textContent === title);

	if (!match) {
		throw new Error(`could not find a section heading for "${title}"`);
	}

	return match;
}

/**
 * Finds the SideNav link (button) for the given label, scoped to the nav
 * so it isn't confused with the section heading that shares the same text.
 */
function getNavLink(label: string) {
	const navWrapper = screen.getByTestId("section-wrapper");
	const link = within(navWrapper).getByText(label).closest("button");

	if (!link) {
		throw new Error(`could not find a nav link for "${label}"`);
	}

	return link;
}

describe("Form section nav focus management", () => {
	it("keeps focus on the nav control before activation is the failing state we're fixing", () => {
		render(<TestForm />);

		const navLink = getNavLink("Section B");

		navLink.focus();
		expect(document.activeElement).toBe(navLink);
	});

	it("moves focus to the target section's heading when a section nav link is activated", () => {
		render(<TestForm />);

		const navLink = getNavLink("Section B");

		fireEvent.click(navLink);

		const heading = screen.getByRole("heading", { level: 3, name: "Section B" });

		expect(document.activeElement).toBe(heading);
		expect(heading).toHaveAttribute("tabindex", "-1");

		// Focus actually left the nav control and landed in the section.
		expect(document.activeElement).not.toBe(navLink);
	});

	it("moves focus to a different heading for each section, matching the activated link", () => {
		render(<TestForm />);

		fireEvent.click(getNavLink("Section A"));
		expect(document.activeElement).toBe(screen.getByRole("heading", { level: 3, name: "Section A" }));

		fireEvent.click(getNavLink("Section B"));
		expect(document.activeElement).toBe(screen.getByRole("heading", { level: 3, name: "Section B" }));
	});

	it("wires each section's aria-controls to its own real, unique content id instead of the hardcoded placeholder", () => {
		render(<TestForm />);

		const headingA = getSectionHeadingButton("Section A");
		const headingB = getSectionHeadingButton("Section B");

		const controlsA = headingA.getAttribute("aria-controls");
		const controlsB = headingB.getAttribute("aria-controls");

		expect(controlsA).toBeTruthy();
		expect(controlsB).toBeTruthy();
		expect(controlsA).not.toBe("panel1a-content");
		expect(controlsB).not.toBe("panel1a-content");
		expect(controlsA).not.toBe(controlsB);

		expect(document.getElementById(controlsA)).toHaveTextContent("Description for section A");
		expect(document.getElementById(controlsB)).toHaveTextContent("Description for section B");
	});
});
