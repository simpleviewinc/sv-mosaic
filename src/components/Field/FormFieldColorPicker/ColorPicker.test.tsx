import * as React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

// Components
import FormFieldColorPicker, { RGBAToHexA } from "./FormFieldColorPicker";

afterEach(cleanup);

const { getByTestId, queryByText } = screen;

const value = "#004799";

describe("ColorPicker component", () => {
	it("should not open the color picker when is disabled", () => {
		render(
			<FormFieldColorPicker
				value={value}
				fieldDef={{ name: "colorPicker", label: "", type: "color", }}
				disabled
			/>
		);

		fireEvent.click(getByTestId("colordiv-test"));
		const colorPicker = queryByText("hex");

		expect(colorPicker).toBe(null);
	});

	it("should convert an rgba color value to its hex representation", () => {
		const rgbaColor = {
			r: 48,
			g: 113,
			b: 124,
			a: 0.5
		};

		expect(RGBAToHexA(rgbaColor)).toBe("#30717c80")
	});
});
