import * as assert from "assert";
import type { ReactNode } from "react";
import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { TestDef } from "@simpleview/mochalib";
import { testArray } from "@simpleview/mochalib";
import type { FieldDef } from "@root/components/Field";
import { generateLayout } from "@root/components/Form/Layout/layoutUtils";
import Form, { type FormProps, type SectionDef, useForm } from "@root/components/Form";
import type { ButtonProps } from "@root/components/Button";

vi.mock("nanoid", async () => {
	return {
		nanoid: () => "section-123",
	};
});

type Test = ({
	type: "fields";
	data: FieldDef[];
} | {
	type: "sections";
	data: SectionDef[];
}) & {
	result: SectionDef[];
};

describe("Layout logic", () => {
	const fields: FieldDef[] = [
		{
			name: "text1",
			label: "Simple Text",
			type: "text",
		},
		{
			name: "text2",
			label: "Text with validators and dynamic help",
			type: "text",
		},
		{
			name: "text3",
			label: "Text that copies to the next input",
			type: "text",
		},
		{
			name: "text4",
			label: "Text that receives copy",
			type: "text",
		},
	];

	const sections = [
		{
			fields: [
				// row 1
				[["text1"], ["text2"], ["text3"]],
				// row 2
				[["text3"], ["text4"], ["text1"]],
				[[]],
			],
		},
		{
			fields: [
				// row 1
				[[], ["text2"], ["text3"]],
				// row 2
				[[], [], []],
				[[]],
			],
		},
	];

	const tests: TestDef<Test>[] = [
		{
			name: "Create layout with only fields",
			args: {
				type: "fields",
				data: fields,
				result: [
					{
						fields: [[["text1"]], [["text2"]], [["text3"]], [["text4"]]],
						id: "section-123",
					},
				],
			},
		},
		{
			name: "Ignore empty positions",
			args: {
				type: "sections",
				data: sections,
				result: [
					{
						fields: [
							[["text1"], ["text2"], ["text3"]],
							[["text3"], ["text4"], ["text1"]],
						],
						id: "section-123",
					},
					{
						fields: [
							[[], ["text2"], ["text3"]],
						],
						id: "section-123",
					},
				],
			},
		},
		{
			name: "No sections",
			args: {
				type: "sections",
				data: [
					{
						fields: [
							// row 1
							[[], ["text1"], []],
							// row 2
							[[], [], []],
							[[]],
						],
					},
					{
						fields: [
							// row 1
							[[], [], []],
							// row 2
							[[], [], []],
							[[]],
						],
					},
				],
				result: [
					{
						fields: [
							[[], ["text1"], []],
						],
						id: "section-123",
					},
					{
						fields: [],
						id: "section-123",
					},
				],
			},
		},
	];

	testArray(tests, test => {
		const result = test.type === "fields" ?
			generateLayout({ fields }) :
			generateLayout({ fields, sections: test.data as SectionDef[] });

		assert.deepStrictEqual(result, test.result);
	});
});

const formFields: FieldDef[] = [{
	name: "lastField",
	label: "Last field",
	type: "text",
}];

interface TestFormProps {
	bottomActions?: ButtonProps[];
	bottomSlot?: ReactNode;
	buttons?: ButtonProps[];
	onSubmit?: FormProps["onSubmit"];
}

function TestForm({ bottomActions, bottomSlot, buttons, onSubmit }: TestFormProps) {
	const controller = useForm();

	return (
		<Form
			{...controller}
			bottomActions={bottomActions}
			bottomSlot={bottomSlot}
			buttons={buttons}
			fields={formFields}
			onSubmit={onSubmit}
			title="Test form"
		/>
	);
}

const submitAction: ButtonProps = {
	intent: "primary",
	label: "Submit",
	type: "submit",
	variant: "contained",
};

describe("Form actions", () => {
	it("keeps bottom actions optional and preserves custom bottom slot consumers", () => {
		render(
			<TestForm
				buttons={[submitAction]}
				bottomSlot={<button type="button">Custom footer action</button>}
			/>,
		);

		expect(screen.getAllByRole("button", { name: "Submit" })).toHaveLength(1);
		expect(screen.getByRole("button", { name: "Custom footer action" })).toBeInTheDocument();
	});

	it("places bottom actions after the fields in DOM and forward keyboard order", async () => {
		const user = userEvent.setup();
		render(<TestForm buttons={[submitAction]} bottomActions={[submitAction]} />);

		const [topSubmit, bottomSubmit] = screen.getAllByRole("button", { name: "Submit" });
		const lastField = screen.getByRole("textbox", { name: "Last field" });

		expect(topSubmit.compareDocumentPosition(lastField) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
		expect(lastField.compareDocumentPosition(bottomSubmit) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();

		await user.click(lastField);
		await user.tab();

		expect(bottomSubmit).toHaveFocus();
	});

	it("submits once when a bottom submit action is activated", async () => {
		const user = userEvent.setup();
		const onAction = vi.fn();
		const onSubmit = vi.fn();
		const action = { ...submitAction, onClick: onAction };
		render(
			<TestForm
				buttons={[action]}
				bottomActions={[action]}
				onSubmit={onSubmit}
			/>,
		);

		const bottomSubmit = screen.getAllByRole("button", { name: "Submit" })[1];
		await user.click(bottomSubmit);

		expect(onAction).toHaveBeenCalledTimes(1);
		expect(onSubmit).toHaveBeenCalledTimes(1);
	});

	it("keeps narrow top actions in DOM order", () => {
		render(<TestForm buttons={[submitAction]} />);

		const topActions = screen.getByRole("toolbar").parentElement;

		if (!topActions) {
			throw new Error("Expected a top actions container");
		}

		expect(window.getComputedStyle(topActions).order).not.toBe("-1");
	});
});
