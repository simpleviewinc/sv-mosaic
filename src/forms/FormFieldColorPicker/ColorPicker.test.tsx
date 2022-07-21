import * as React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

// Components
import FormFieldColorPicker from "./FormFieldColorPicker";

afterEach(cleanup);

const { getByTestId, getByText, queryByText } = screen;

const value = "#004799";

describe("ColorPicker component", () => {
	it("should display the color picker when the selected color element is clicked", () => {
		render(
			<FormFieldColorPicker
				value={value}
				fieldDef={{ name: "colorPicker", label: "", disabled: false, type: "color", }}
			/>
		);

		const selectedColorDiv = getByTestId("colordiv-test");
		fireEvent.click(selectedColorDiv);
		const colorPicker = getByText("hex");

		expect(colorPicker).toBeTruthy();
		expect(selectedColorDiv).toHaveStyle("background:rgb(0, 71, 153)");
	});

	it("should not open the color picker when is disabled", () => {
		render(
			<FormFieldColorPicker
				value={value}
				fieldDef={{ name: "colorPicker", label: "", disabled: true, type: "color", }}

			/>
		);

		fireEvent.click(getByTestId("colordiv-test"));
		const colorPicker = queryByText("hex");

		expect(colorPicker).toBe(null);
	});

	it("should display the default color", () => {
		render(
			<FormFieldColorPicker
				value={undefined}
				fieldDef={{ name: "colorPicker", label: "", disabled: true, type: "color", }}
			/>
		);

		expect(getByTestId("colordiv-test")).toHaveStyle("background:rgb(0, 141, 168)");
	});
});
