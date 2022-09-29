import * as React from "react";
import { useState } from "react";
import { render, screen, fireEvent, cleanup, waitFor, act } from "@testing-library/react";
import { getOptions } from "@root/utils/getOptions";

// Components
import FormFieldRadio from "./FormFieldRadio";
import { MosaicLabelValue } from "@root/types";

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

const FormFieldRadioExample = (props: {fromDB?: boolean}) => {
	const [value, setValue] = useState<MosaicLabelValue>();

	const handleChange = async (value: MosaicLabelValue) => {
		setValue(value);
	};

	return (
		<>
			<span>{value?.value}</span>
			<FormFieldRadio
				fieldDef={{
					name: "radio",
					type: "radio",
					label: "Label",
					inputSettings: {
						options: props.fromDB ? undefined : options,
						getOptions: props.fromDB ? getOptions : undefined
					}
				}}
				onChange={handleChange}
				value={value}
			/>
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
		}, {timeout: 3000});

		await act( async() => {
			radioButtons[6].dispatchEvent(new MouseEvent("click", {bubbles: true}));
		});
	});

	it("should display the value of the clicked option", async () => {
		expect(getByText("option_3-cat_2")).toBeDefined();
	});

	it("should check the clicked option", () => {
		expect(radioButtons[0].checked).toEqual(false);
		expect(radioButtons[1].checked).toEqual(false);
		expect(radioButtons[2].checked).toEqual(false);
		expect(radioButtons[3].checked).toEqual(false);
		expect(radioButtons[4].checked).toEqual(false);
		expect(radioButtons[5].checked).toEqual(false);
		expect(radioButtons[6].checked).toEqual(true);
		expect(radioButtons[7].checked).toEqual(false);
		expect(radioButtons[8].checked).toEqual(false);
		expect(radioButtons[9].checked).toEqual(false);
		expect(radioButtons[10].checked).toEqual(false);
		expect(radioButtons[11].checked).toEqual(false);
		expect(radioButtons[12].checked).toEqual(false);
		expect(radioButtons[13].checked).toEqual(false);
		expect(radioButtons[14].checked).toEqual(false);
		expect(radioButtons[15].checked).toEqual(false);
	});
});
