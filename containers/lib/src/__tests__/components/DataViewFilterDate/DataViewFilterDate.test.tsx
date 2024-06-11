import * as React from "react";
import "@testing-library/jest-dom";
import { screen, cleanup, render, act, fireEvent } from "@testing-library/react";
import DataViewFilterDate from "@root/components/DataViewFilterDate";
import { MosaicLabelValue } from "@root/types";
import { useState } from "react";

afterEach(cleanup);

const DataViewFilterDateExample = ({ showOptions }: { showOptions?: boolean }) => {
	const [state, setState] = useState({});
	const options: MosaicLabelValue[] = [
		{
			label: "Today",
			value: "today",
		},
		{
			label: "Yesterday",
			value: "yesterday",
		},
		{
			label: "Tomorrow",
			value: "tomorrow",
		},
		{
			label: "Last year",
			value: "last_year",
		},
		{
			label: "Last 2 years",
			value: "last_2_years",
		},
		{
			label: "Last 3 years",
			value: "last_3_years",
		},
	];

	const onChange = function(data) {
		setState(data);
	};

	const onRemove = () => undefined;

	return (
		<DataViewFilterDate
			label="Date filter example"
			data={state}
			args={{ options: showOptions ? options : undefined }}
			onRemove={onRemove}
			onChange={onChange}
		/>
	);
};

describe("DataViewFilterDate", () => {
	it("Should select a from date", async () => {
		await act(async () => {
			render(<DataViewFilterDateExample />);
		});

		const filterButton = await screen.findByText("Date filter example");
		expect(filterButton).toBeInTheDocument();

		await act(async () => {
			filterButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		});

		const dropdownContent = await screen.findByTestId("dataview-filter-date-dropdown-content");
		expect(dropdownContent).toBeInTheDocument();

		const fromInput = (await screen.findAllByRole("textbox"))[0];
		await act(async () => {
			fireEvent.change(fromInput, { target: { value: "01012023" } });
		});

		const applyButton = await screen.findByText("Apply");
		await act(async () => {
			applyButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		});

		const actualResult = (await screen.findByRole("button")).textContent;
		const expectedResult = "Date filter example|from 1/1/2023";
		expect(actualResult).toEqual(expectedResult);
	});

	it("Should select a from date", async () => {
		await act(async () => {
			render(<DataViewFilterDateExample />);
		});

		const filterButton = await screen.findByText("Date filter example");
		expect(filterButton).toBeInTheDocument();

		await act(async () => {
			filterButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		});

		const dropdownContent = await screen.findByTestId("dataview-filter-date-dropdown-content");
		expect(dropdownContent).toBeInTheDocument();

		const toInput = (await screen.findAllByRole("textbox"))[1];
		await act(async () => {
			fireEvent.change(toInput, { target: { value: "01012023" } });
		});

		const applyButton = await screen.findByText("Apply");
		await act(async () => {
			applyButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		});

		const actualResult = (await screen.findByRole("button")).textContent;
		const expectedResult = "Date filter example|to 1/1/2023";
		expect(actualResult).toEqual(expectedResult);
	});

	it("Should select a valid range", async () => {
		await act(async () => {
			render(<DataViewFilterDateExample />);
		});

		const filterButton = await screen.findByText("Date filter example");
		expect(filterButton).toBeInTheDocument();

		await act(async () => {
			filterButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		});

		const dropdownContent = await screen.findByTestId("dataview-filter-date-dropdown-content");
		expect(dropdownContent).toBeInTheDocument();

		const fromInput = (await screen.findAllByRole("textbox"))[0];
		await act(async () => {
			fireEvent.change(fromInput, { target: { value: "12312022" } });
		});

		const toInput = (await screen.findAllByRole("textbox"))[1];
		await act(async () => {
			fireEvent.change(toInput, { target: { value: "01012023" } });
		});

		const applyButton = await screen.findByText("Apply");
		await act(async () => {
			applyButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		});

		const actualResult = (await screen.findByRole("button")).textContent;
		const expectedResult = "Date filter example|12/31/2022 - 1/1/2023";
		expect(actualResult).toEqual(expectedResult);
	});

	it("Should throw an error when selecting an invalid range", async () => {
		await act(async () => {
			render(<DataViewFilterDateExample />);
		});

		const filterButton = await screen.findByText("Date filter example");
		expect(filterButton).toBeInTheDocument();

		await act(async () => {
			filterButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		});

		const dropdownContent = await screen.findByTestId("dataview-filter-date-dropdown-content");
		expect(dropdownContent).toBeInTheDocument();

		const fromInput = (await screen.findAllByRole("textbox"))[0];
		await act(async () => {
			fireEvent.change(fromInput, { target: { value: "01012023" } });
			fireEvent.blur(fromInput);
		});

		const toInput = (await screen.findAllByRole("textbox"))[1];
		await act(async () => {
			fireEvent.change(toInput, { target: { value: "12312022" } });
			fireEvent.blur(toInput);
		});

		const applyButton = await screen.findByText("Apply");
		expect(applyButton).toHaveProperty("disabled");

		const errorMessageStart = await screen.findByText("Start date should happen before the end date");
		expect(errorMessageStart).toBeInTheDocument();

		const errorMessageEnd = await screen.findByText("End date should happen after the start date");
		expect(errorMessageEnd).toBeInTheDocument();
	});

	it("Should select a magic value", async () => {
		await act(async () => {
			render(<DataViewFilterDateExample showOptions={true} />);
		});

		const filterButton = await screen.findByText("Date filter example");
		expect(filterButton).toBeInTheDocument();

		await act(async () => {
			filterButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		});

		const dropdownContent = await screen.findByTestId("dataview-filter-date-dropdown-content");
		expect(dropdownContent).toBeInTheDocument();

		const magicValues = await screen.findAllByRole("menuitem");
		const randomMagicValueIdx = Math.floor(Math.random() * magicValues.length);
		const magicValueSelected = magicValues[randomMagicValueIdx];

		await act(async () => {
			magicValueSelected.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		});

		const actualResult = (await screen.findByRole("button")).textContent;
		const expectedResult = `Date filter example|${magicValueSelected.textContent}`;
		expect(actualResult).toEqual(expectedResult);
	});
});
