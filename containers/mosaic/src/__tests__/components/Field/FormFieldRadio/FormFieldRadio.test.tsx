import * as React from "react";
import { useState } from "react";
import { render, screen, fireEvent, cleanup, waitFor, act } from "@testing-library/react";
import { getOptions } from "@root/mock";

import type { MosaicLabelValue } from "@root/types";

import FormFieldRadio from "@root/components/Field/FormFieldRadio";
import { optionsLibrary } from "@root/mock";

afterEach(cleanup);

const { getByText, getAllByRole } = screen;

const options = [
	{
		label: "Label 1",
		value: "label_1",
	},
	{
		label: "Label 2",
		value: "label_2",
	},
	{
		label: "Label 3",
		value: "label_3",
	},
];

const FormFieldRadioExample = (props: { fromDB?: boolean }) => {
	const [value, setValue] = useState<MosaicLabelValue>();

	const handleChange = async (value: MosaicLabelValue) => {
		setValue(value);
	};

	return (
		<>
			<span>{value?.value}</span>
			{!props.fromDB ? (
				<FormFieldRadio
					fieldDef={{
						name: "radio",
						type: "radio",
						label: "Label",
						inputSettings: {
							options: options,
						},
					}}
					onChange={handleChange}
					value={value}
				/>
			) : (
				<FormFieldRadio
					fieldDef={{
						name: "radio",
						type: "radio",
						label: "Label",
						inputSettings: {
							getOptions: getOptions,
						},
					}}
					onChange={handleChange}
					value={value}
				/>
			)}
		</>
	);
};

describe("FormFieldRadio component", () => {
	let radioButtons = [];
	beforeEach(() => {
		render(<FormFieldRadioExample fromDB={false} />);
		radioButtons = getAllByRole("radio") as HTMLInputElement[];
		fireEvent.click(radioButtons[1]);
	});

	it("should display the value of the clicked option", () => {
		expect(getByText("label_2")).toBeDefined();
	});

	it("should check the clicked option", () => {
		expect(radioButtons[0].checked).toEqual(false);
		expect(radioButtons[1].checked).toEqual(true);
		expect(radioButtons[2].checked).toEqual(false);
	});
});

describe("FormFieldRadio component from DB", () => {
	let radioButtons = [];
	beforeEach(async () => {
		await act( async() => {
			render(<FormFieldRadioExample fromDB={true} />);
		});

		await waitFor(() => {
			radioButtons = getAllByRole("radio") as HTMLInputElement[];
		}, { timeout: 3000 });

		await act( async() => {
			radioButtons[6].dispatchEvent(new MouseEvent("click", { bubbles: true }));
		});
	});

	it("should display the value of the clicked option", async () => {
		expect(getByText(optionsLibrary[6].value)).toBeDefined();
	});

	it("should check the clicked option", () => {
		radioButtons.forEach( (radioButton, i) => {
			expect(radioButton.checked).toEqual(i === 6);
		});
	});
});
