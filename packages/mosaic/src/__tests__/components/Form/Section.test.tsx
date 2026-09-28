import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import React from "react";

import Section from "@root/components/Form/Section";
import type { SectionPropTypes } from "@root/components/Form/Section";

const sectionProps: SectionPropTypes = {
	title: "Contact details",
	description: "",
	fieldsDef: [],
	rows: [],
	sectionIdx: 0,
	methods: {} as SectionPropTypes["methods"],
	registerRef: () => () => undefined,
	id: "contact-details",
};

function setup(props: Partial<SectionPropTypes> = {}) {
	const user = userEvent.setup();
	render(<Section {...sectionProps} {...props} />);

	return { user };
}

describe("Form Section collapse control", () => {
	it("exposes the expanded state and toggles with keyboard focus", async () => {
		const { user } = setup();
		const toggle = screen.getByRole("button", { name: "Collapse Contact details" });
		const panelId = toggle.getAttribute("aria-controls");

		expect(toggle).toHaveAttribute("type", "button");
		expect(toggle).toHaveAttribute("aria-expanded", "true");
		expect(panelId).toBeTruthy();
		expect(document.getElementById(panelId as string)).toBeInTheDocument();

		await user.tab();
		expect(toggle).toHaveFocus();

		await user.keyboard("{Enter}");
		expect(screen.getByRole("button", { name: "Expand Contact details" })).toHaveAttribute("aria-expanded", "false");
	});

	it("exposes the collapsed state and expands with Space", async () => {
		const { user } = setup({ collapsed: true });
		const toggle = screen.getByRole("button", { name: "Expand Contact details" });

		expect(toggle).toHaveAttribute("aria-expanded", "false");

		await user.tab();
		expect(toggle).toHaveFocus();

		await user.keyboard(" ");
		expect(screen.getByRole("button", { name: "Collapse Contact details" })).toHaveAttribute("aria-expanded", "true");
	});
});
