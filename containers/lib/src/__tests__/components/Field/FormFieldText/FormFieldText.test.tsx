import { render, screen } from "@testing-library/react";
import * as React from "react";

// Components
import TextField from "@root/components/Field/FormFieldText";

describe("TextField component", () => {
	it("should display the placeholder", () => {
		render(
			<TextField
				fieldDef={{
					name: "textField",
					type: "text",
					label: "Label test",
					instructionText: "Instruction text",
					inputSettings: {
						placeholder: "placeholder",
					},
				}}
			/>,
		);
		const placeholderElement = screen.getByPlaceholderText("placeholder");
		expect(placeholderElement).toBeDefined();
	});
});

describe("TextField multiline behaviour", () => {
	it("should render an input element when multiline is off", () => {
		render(
			<TextField
				fieldDef={{
					name: "textField",
					type: "text",
					label: "Label test",
					helperText: "Helper text",
					inputSettings: {
						placeholder: "placeholder",
						multiline: false,
					},
				}}

			/>,
		);
		const textField = screen.getByPlaceholderText("placeholder");

		expect(textField.nodeName).toBe("INPUT");
	});

	it("should render a text area element when the multiline prop is present", () => {
		render(
			<TextField
				fieldDef={{
					name: "textField",
					type: "text",
					label: "Label test",
					helperText: "Helper text",
					inputSettings: {
						placeholder: "placeholder",
						multiline: true,
					},
				}}

			/>,
		);

		const textField = screen.getByPlaceholderText("placeholder");

		expect(textField.nodeName).toBe("TEXTAREA");
	});
});
