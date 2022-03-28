import * as React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ColorResult } from "react-color";

// Components
import FormFieldColorPicker from "./FormFieldColorPicker";

afterEach(cleanup);

const { getByTestId, getByText, queryByText } = screen;

const value: ColorResult = {
	hsl: {
		h: 212.15686274509804,
		s: 1,
		l: 0.3,
		a: 1,
	},
	hex: "#004799",
	rgb: {
		r: 0,
		g: 71,
		b: 153,
		a: 1,
	},
};

describe("ColorPicker component", () => {
	it("should display the color picker when the selected color element is clicked", () => {
		render(
			<FormFieldColorPicker
				value={value}
				fieldDef={{ name: "colorPicker", label: "", disabled: false }}

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
				fieldDef={{ name: "colorPicker", label: "", disabled: true }}

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
				fieldDef={{ name: "colorPicker", label: "", disabled: true }}

			/>
		);

		expect(getByTestId("colordiv-test")).toHaveStyle("background:rgb(0, 141, 168)");
	});
});
