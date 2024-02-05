import React from "react";
import { act, cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { DataViewFilterText } from "../../index";
import { Playground } from "./DataView.stories";

afterEach(cleanup);

describe("DataViewFilterText component", () => {

	it("Should display Equals comparison filter when the developer has passed an empty string in comparisonDefault", async () => {
		render(
			<DataViewFilterText
				label = "Title with Comparisons:"
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
				label = "Title with Comparisons:"
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
				label = "Title with Comparisons:"
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
				label = "Title with Comparisons:"
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

	it("Should not show bulk action download if more than 5 items are checked", async () => {
		render(
			<Playground />
		);

		await waitFor(() => expect(screen.getAllByRole("checkbox").length).toBeGreaterThan(1));

		const checkboxes = screen.getAllByRole("checkbox");

		act(() => {
			fireEvent.click(checkboxes[1]);
		});


		expect(screen.queryByTitle("Download checked")).not.toBeNull();

		act(() => {
			fireEvent.click(checkboxes[2]);
			fireEvent.click(checkboxes[3]);
			fireEvent.click(checkboxes[4]);
			fireEvent.click(checkboxes[5]);
			fireEvent.click(checkboxes[6]);
		});

		expect(screen.queryByTitle("Download checked")).toBeNull();
	});

	it("Should not show bulk action delete if items across all pages are checked", async () => {
		render(
			<Playground />
		);

		await waitFor(() => expect(screen.getAllByRole("checkbox").length).toBeGreaterThan(1));

		const checkboxes = screen.getAllByRole("checkbox");

		act(() => {
			for (let i = 1; i < checkboxes.length; i++) {
				fireEvent.click(checkboxes[i]);
			}
		})

		const selectAllButton = screen.queryByText("Select All 304 Records");

		expect(selectAllButton).not.toBeNull();
		expect(screen.queryByTitle("Delete checked")).not.toBeNull();

		act(() => {
			fireEvent.click(selectAllButton);
		})

		expect(screen.queryByTitle("Delete checked")).toBeNull();
	});
});
