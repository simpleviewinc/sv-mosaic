import * as React from "react";
import { render, screen, cleanup } from "@testing-library/react";

// Components
import TextArea from "./FormFieldTextArea";

afterEach(cleanup);

describe("TextArea component", () => {
	beforeEach(() => {
		render(
			<TextArea
				fieldDef={{
					name: "textArea",
					type: "textArea",
					label: "Label test",
					instructionText: "Instructional text",
					inputSettings: {
						placeholder: "placeholder",
					},
				}}
			/>
		);
	});

	it("should render a text area element", () => {
		const textAreaElement = screen.getByPlaceholderText("placeholder");

		expect(textAreaElement.nodeName).toBe("TEXTAREA");
	});

	it("should display the placeholder", () => {
		const placeholderElement = screen.getByPlaceholderText("placeholder");

		expect(placeholderElement).toBeDefined();
	});
});
