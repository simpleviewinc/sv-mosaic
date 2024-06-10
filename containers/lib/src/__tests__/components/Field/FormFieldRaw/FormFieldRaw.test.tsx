import { render, screen, cleanup } from "@testing-library/react";
import * as React from "react";
import FormFieldRaw from "./FormFieldRaw";
import { RawValueWrapper } from "./FormFieldRaw.styled";

afterEach(cleanup);

const { getByRole } = screen;

function RawValue() {
	return (
		<RawValueWrapper role="presentation">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit.
		</RawValueWrapper>
	);
}

const FormFieldRawExample = () => {
	return (
		<FormFieldRaw
			fieldDef={{
				label: "Field label",
				type: "raw",
				name: "raw",
			}}
			value={<RawValue />}
		/>
	);
};

describe("FormFieldRaw component", () => {
	it("should display the custom component's text", () => {
		render(<FormFieldRawExample />);

		const rawValue = getByRole("presentation");

		expect(rawValue.textContent).toBe("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
	});
});
