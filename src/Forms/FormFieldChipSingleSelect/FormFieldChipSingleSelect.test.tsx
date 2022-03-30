import * as React from "react";
import { useState } from "react";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

//Components
import FormFieldChipSingleSelect from "./FormFieldChipSingleSelect";

afterEach(cleanup);

const options = [
	{
		label: "Option 1",
		value: "Option_1",
	},
	{
		label: "Option 2",
		value: "Option_2",
	},
	{
		label: "Option 3",
		value: "Option_3",
	},
];

const { getAllByRole, getByText } = screen;

const FormFieldChipSingleSelectExample = () => {
	const [checked, setChecked] = useState([]);

	const onChange = async (checked) => {
		setChecked(checked)
	}

	return (
		<FormFieldChipSingleSelect
			fieldDef={{
				name: "formFieldChipSingleSelect",
				label: "Chip test",
				inputSettings: {
					options
				}
			}}
			value={checked}
			onChange={onChange}
		/>
	);
};

describe("FormFieldChipSingleSelect component", () => {
	beforeEach(() => {
		render(<FormFieldChipSingleSelectExample />);
	})

	it("should display the list of options", () => {
		expect(getByText("Option 1")).toBeTruthy();
		expect(getByText("Option 2")).toBeTruthy();
		expect(getByText("Option 3")).toBeTruthy();
	});

	it("should check the clicked option", () => {
		const chipElements = getAllByRole("button") as HTMLInputElement[];
		fireEvent.click(chipElements[1]);

		expect(chipElements[0]).toHaveClass("cFyGIj")
		expect(chipElements[1]).toHaveClass("foHfmQ")
		expect(chipElements[2]).toHaveClass("cFyGIj")
	});
});
