import React from "react";
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import DataViewFilterText from "@root/components/DataViewFilterText";
import DataView, { DataViewProps } from "@root/components/DataView";

afterEach(cleanup);

const columns: DataViewProps["columns"] = [
	{
		name: "id",
		label: "ID",
	},
	{
		name: "title",
		label: "Title",
	},
];

const data: DataViewProps["data"] = [
	{
		id: "1",
		title: "Row 1",
	},
	{
		id: "2",
		title: "Row 2",
	},
	{
		id: "3",
		title: "Row 3",
	},
];

describe("DataViewFilterText component", () => {

	it("Should display Equals comparison filter when the developer has passed an empty string in comparisonDefault", async () => {
		render(
			<DataViewFilterText
				label="Title with Comparisons:"
				data={{}}
				args={{
					comparisons: ["equals", "not_equals", "contains", "not_contains", "exists", "not_exists"],
					comparisonDefault: "",
				}}
				onRemove={jest.fn()}
				onChange={jest.fn()}
			/>,
		);
		const titleWithComparisonsButton = screen.getByText("Title with Comparisons:");
		fireEvent.click(titleWithComparisonsButton);
		const filter = await screen.findByText("Equals");
		expect(filter).toBeTruthy();
	});

	it("Should display Not Equal comparison filter when the developer has passed as not_equals string in comparisonDefault", async () => {
		render(
			<DataViewFilterText
				label="Title with Comparisons:"
				data={{}}
				args={{
					comparisons: ["equals", "not_equals", "contains", "not_contains", "exists", "not_exists"],
					comparisonDefault: "not_equals",
				}}
				onRemove={jest.fn()}
				onChange={jest.fn()}
			/>,
		);
		const titleWithComparisonsButton = screen.getByText("Title with Comparisons:");
		fireEvent.click(titleWithComparisonsButton);
		const filter = await screen.findByText("Not Equal");
		expect(filter).toBeTruthy();
	});

	it("Should display Equals comparison filter when the developer has not passed the comparisonDefault prop", async () => {
		render(
			<DataViewFilterText
				label="Title with Comparisons:"
				data={{}}
				args={{
					comparisons: ["equals", "not_equals", "contains", "not_contains", "exists", "not_exists"],
				}}
				onRemove={jest.fn()}
				onChange={jest.fn()}
			/>,
		);
		const titleWithComparisonsButton = screen.getByText("Title with Comparisons:");
		fireEvent.click(titleWithComparisonsButton);
		const filter = await screen.findByText("Equals");
		expect(filter).toBeTruthy();
	});

	it("Should throw an error when the developer has passed an invalid comparisonDefault prop", async () => {
		jest.spyOn(console, "error").mockImplementation(() => jest.fn());
		expect(() => render(
			<DataViewFilterText
				label="Title with Comparisons:"
				data={{}}
				args={{
					comparisons: ["equals", "not_equals", "contains", "not_contains", "exists", "not_exists"],
					comparisonDefault: "invalid_comparison",
				}}
				onRemove={jest.fn()}
				onChange={jest.fn()}
			/>,
		)).toThrow("The selected comparison is not a valid comparison");
	});

	// it("Should not show bulk action download if more than 5 items are checked", async () => {
	// 	render(
	// 		<Playground />,
	// 	);

	// 	await waitFor(() => expect(screen.getAllByRole("checkbox").length).toBeGreaterThan(1));

	// 	const checkboxes = screen.getAllByRole("checkbox");

	// 	act(() => {
	// 		fireEvent.click(checkboxes[1]);
	// 	});

	// 	expect(screen.queryByTitle("Download checked")).not.toBeNull();

	// 	act(() => {
	// 		fireEvent.click(checkboxes[2]);
	// 		fireEvent.click(checkboxes[3]);
	// 		fireEvent.click(checkboxes[4]);
	// 		fireEvent.click(checkboxes[5]);
	// 		fireEvent.click(checkboxes[6]);
	// 	});

	// 	expect(screen.queryByTitle("Download checked")).toBeNull();
	// });

	// it("Should not show bulk action delete if items across all pages are checked", async () => {
	// 	render(
	// 		<Playground />,
	// 	);

	// 	await waitFor(() => expect(screen.getAllByRole("checkbox").length).toBeGreaterThan(1));

	// 	const checkboxes = screen.getAllByRole("checkbox");

	// 	act(() => {
	// 		for (let i = 1; i < checkboxes.length; i++) {
	// 			fireEvent.click(checkboxes[i]);
	// 		}
	// 	});

	// 	const selectAllButton = screen.queryByText("Select All 304 Records");

	// 	expect(selectAllButton).not.toBeNull();
	// 	expect(screen.queryByTitle("Delete checked")).not.toBeNull();

	// 	act(() => {
	// 		fireEvent.click(selectAllButton);
	// 	});

	// 	expect(screen.queryByTitle("Delete checked")).toBeNull();
	// });

	it("Should display the name of the current view as text if one is provided", async () => {
		render(
			<DataView
				columns={columns}
				data={data}
				currentView={{ value: "my-view", label: "My View" }}
			/>,
		);

		const currentViewText = screen.queryByText("View: My View");
		expect(currentViewText).not.toBeNull();
		expect(currentViewText.tagName).toBe("DIV");
	});

	it("Should display the name of the current view inside the view list button if a current view and list view handler is provided", async () => {
		const onViewList = jest.fn();

		render(
			<DataView
				columns={columns}
				data={data}
				currentView={{ value: "my-view", label: "My View" }}
				onViewList={onViewList}
			/>,
		);

		const currentViewText = screen.queryByText("View: My View");
		expect(currentViewText).not.toBeNull();
		expect(currentViewText.tagName).toBe("BUTTON");
	});

	it("Should display the list views button if a handler is provided and fire that handler when clicked", async () => {
		const onViewList = jest.fn();

		render(
			<DataView
				columns={columns}
				data={data}
				onViewList={onViewList}
			/>,
		);

		const viewListButton = screen.queryByText("No view selected");
		expect(viewListButton).not.toBeNull();

		act(() => {
			fireEvent.click(viewListButton);
		});

		expect(onViewList).toBeCalledTimes(1);
	});

	it("Should display the save view dropdown menu when an onViewSave handler is provided and correctly invoke that handler", async () => {
		const onViewSave = jest.fn();

		render(
			<DataView
				columns={columns}
				data={data}
				onViewSave={onViewSave}
			/>,
		);

		const saveViewButton = screen.queryByText("Save View");
		expect(saveViewButton).not.toBeNull();

		act(() => {
			fireEvent.click(saveViewButton);
		});

		const overwriteCurrentViewButton = screen.queryByText("Overwrite Current View");
		expect(overwriteCurrentViewButton).not.toBeNull();

		act(() => {
			fireEvent.click(overwriteCurrentViewButton);
		});

		expect(onViewSave).toBeCalledTimes(1);
	});

	it("Should display the save view dropdown menu when an onViewSaveAs handler is provided and correctly invoke that handler", async () => {
		const onViewSaveAs = jest.fn();

		render(
			<DataView
				columns={columns}
				data={data}
				onViewSaveAs={onViewSaveAs}
			/>,
		);

		const saveViewButton = screen.queryByText("Save View");
		expect(saveViewButton).not.toBeNull();

		act(() => {
			fireEvent.click(saveViewButton);
		});

		const saveAsNewViewButton = screen.queryByText("Save as New View");
		expect(saveAsNewViewButton).not.toBeNull();

		act(() => {
			fireEvent.click(saveAsNewViewButton);
		});

		expect(onViewSaveAs).toBeCalledTimes(1);
	});
});
