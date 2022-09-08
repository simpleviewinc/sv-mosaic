import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { DataViewFilterText } from "../../index";

afterEach(cleanup);

describe("DataViewFilterText component", () => {

	it("Should display Equals comparison filter when the developer has passed an empty string in comparisonDefault", async () => {
		render(
			<DataViewFilterText
				label = "Title with Comparisons"
				type = "optional"
				data = {{}}
				args = {{
					comparisons: ["equals", "not_equals", "contains", "not_contains", "exists", "not_exists"],
					comparisonDefault: ""
				}}
				onRemove = {jest.fn()}
				onChange = {jest.fn()}
			/>
		);
		const titleWithComparisonsButton = screen.getByText("Title with Comparisons:");
		fireEvent.click(titleWithComparisonsButton);
		const filter = await screen.findByText("Equals");
		expect(filter).toBeTruthy()
	})

	it("Should display Not Equal comparison filter when the developer has passed as not_equals string in comparisonDefault", async () => {
		render(
			<DataViewFilterText
				label = "Title with Comparisons"
				type = "optional"
				data = {{}}
				args = {{
					comparisons: ["equals", "not_equals", "contains", "not_contains", "exists", "not_exists"],
					comparisonDefault: "not_equals"
				}}
				onRemove = {jest.fn()}
				onChange = {jest.fn()}
			/>
		);
		const titleWithComparisonsButton = screen.getByText("Title with Comparisons:");
		fireEvent.click(titleWithComparisonsButton);
		const filter = await screen.findByText("Not Equal");
		expect(filter).toBeTruthy()
	})

	it("Should display Equals comparison filter when the developer has not passed the comparisonDefault prop", async () => {
		render(
			<DataViewFilterText
				label = "Title with Comparisons"
				type = "optional"
				data = {{}}
				args = {{
					comparisons: ["equals", "not_equals", "contains", "not_contains", "exists", "not_exists"]
				}}
				onRemove = {jest.fn()}
				onChange = {jest.fn()}
			/>
		);
		const titleWithComparisonsButton = screen.getByText("Title with Comparisons:");
		fireEvent.click(titleWithComparisonsButton);
		const filter = await screen.findByText("Equals");
		expect(filter).toBeTruthy()
	})

	it("Should throw an error when the developer has passed an invalid comparisonDefault prop", async () => {
		jest.spyOn(console, "error").mockImplementation(() => jest.fn());
		expect(() => render(
			<DataViewFilterText
				label = "Title with Comparisons"
				type = "optional"
				data = {{}}
				args = {{
					comparisons: ["equals", "not_equals", "contains", "not_contains", "exists", "not_exists"],
					comparisonDefault: "invalid_comparison"
				}}
				onRemove = {jest.fn()}
				onChange = {jest.fn()}
			/>
		)).toThrow("The selected comparison is not a valid comparison");
	})
});
