import * as React from "react";
import { render, screen, cleanup } from "@testing-library/react";

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

/**
 * Both Forms below intentionally reuse the SAME caller-supplied section ids.
 * `SectionDef.id` is caller-supplied (layoutUtils only falls back to nanoid
 * when it is absent), so this is a realistic case — e.g. two independent
 * Forms rendered on the same page, each authored with the same "generic"
 * section ids.
 */
const sections: SectionDef[] = [
	{
		id: "overview",
		title: "Overview",
		description: "Overview description",
		fields: [[["fieldA"]]],
	},
	{
		id: "details",
		title: "Details",
		description: "Details description",
		fields: [[["fieldB"]]],
	},
];

function TestForm({ title }: { title: string }) {
	const controller = useForm();

	return (
		<Form
			{...controller}
			title={title}
			fields={fields}
			sections={sections}
		/>
	);
}

describe("Form section DOM id scoping across multiple Form instances", () => {
	it("keeps every panel/heading id unique and every aria-controls resolving to exactly one element, even when two Forms share section ids", () => {
		render(
			<>
				<TestForm title="Form One" />
				<TestForm title="Form Two" />
			</>,
		);

		const headings = screen.getAllByTestId(testIds.CARD_HEADING);
		const sectionWrappers = screen.getAllByTestId("section-test-id");
		const headingElements = screen.getAllByRole("heading", { level: 3 });

		// 2 Forms x 2 sections each.
		expect(headings).toHaveLength(4);
		expect(sectionWrappers).toHaveLength(4);
		expect(headingElements).toHaveLength(4);

		const wrapperIds = sectionWrappers.map(wrapper => wrapper.id);
		const headingIds = headingElements.map(heading => heading.id);
		const controlsIds = headings.map(heading => heading.getAttribute("aria-controls"));

		// No DOM id collisions across Form instances that share section ids.
		expect(wrapperIds.every(Boolean)).toBe(true);
		expect(headingIds.every(Boolean)).toBe(true);
		expect(controlsIds.every(Boolean)).toBe(true);

		expect(new Set(wrapperIds).size).toBe(wrapperIds.length);
		expect(new Set(headingIds).size).toBe(headingIds.length);
		expect(new Set(controlsIds).size).toBe(controlsIds.length);

		// Every heading's aria-controls resolves to exactly one existing element
		// (a duplicate id elsewhere in the document would make this ambiguous).
		controlsIds.forEach(id => {
			expect(id).toBeTruthy();
			expect(document.getElementById(id)).toBeInTheDocument();
		});
	});
});
