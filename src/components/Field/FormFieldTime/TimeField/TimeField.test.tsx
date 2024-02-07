import { render } from "@testing-library/react";
import * as React from "react";
import TimeField from ".";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";

describe("TimeField component", () => {
	it("Should display the time value", () => {
		render(
			<TimeField
				fieldDef={{
					name: "time",
					type: "time",
					label: "Time Input",
					required: false,
					disabled: false,
				}}
				value={{
					time: new Date("2022-01-01T18:30:00.000Z"),
					validTime: true,
				}}

			/>,
		);
		expect(screen.getByDisplayValue("06:30 pm")).toBeInTheDocument();
	});
});
