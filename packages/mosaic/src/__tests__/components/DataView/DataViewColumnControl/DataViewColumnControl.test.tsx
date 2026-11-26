import { render, screen, waitFor } from "@testing-library/react";
import React, { act } from "react";

import type { DataViewColumnControlProps } from "@root/components/DataView/DataViewColumnControl";

import DataViewColumnControl from "@root/components/DataView/DataViewColumnControl";
import userEvent from "@testing-library/user-event";

const allColumns: DataViewColumnControlProps["allColumns"] = [{ name: "column1", label: "Column 1" }, { name: "column2", label: "Column 2" }];
const columns: DataViewColumnControlProps["columns"] = [{ name: "column1", label: "Column 1" }];

function LiveRegionHarness() {
	const [activeColumnNames, setActiveColumnNames] = React.useState(["column1"]);
	const activeColumns = activeColumnNames.reduce<DataViewColumnControlProps["columns"]>((result, name) => {
		const column = allColumns.find(item => item.name === name);

		return column ? [...result, column] : result;
	}, []);

	return (
		<DataViewColumnControl
			allColumns={allColumns}
			columns={activeColumns}
			onChange={setActiveColumnNames}
		/>
	);
}

async function setup(props: Partial<DataViewColumnControlProps> = {}) {
	const onChangeMock = props.onChange || vi.fn();

	const renderResult = await act(() => render(
		<DataViewColumnControl
			allColumns={allColumns}
			columns={columns}
			onChange={onChangeMock}
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should render the data view column control", async () => {
		await setup();

		expect(screen.queryByRole("button", { name: "DataView.columns" })).toBeInTheDocument();
	});

	it("should toggle the column drawer when the gear button is clicked", async () => {
		const { user } = await setup();

		const button = screen.queryByRole("button", { name: "DataView.columns" });
		expect(button).toBeInTheDocument();
		expect(screen.queryByText("DataView.column_settings")).not.toBeInTheDocument();
		await user.click(button);
		expect(screen.queryByText("DataView.column_settings")).toBeInTheDocument();
	});

	it("should announce each applied column update once", async () => {
		const user = userEvent.setup();
		await act(() => render(<LiveRegionHarness />));

		expect(screen.getByRole("status")).toBeEmptyDOMElement();

		await user.click(screen.getByRole("button", { name: "DataView.columns" }));
		await user.click(screen.getByRole("checkbox", { name: "Column 2" }));
		await user.click(screen.getByRole("button", { name: "Apply" }));

		await waitFor(() => expect(screen.getByRole("status")).toHaveTextContent("Columns updated. 2 columns now visible."));
		expect(screen.getAllByRole("status")).toHaveLength(1);

		await user.click(screen.getByRole("button", { name: "DataView.columns" }));
		await user.click(screen.getByRole("button", { name: "Remove Column 2 column" }));
		await user.click(screen.getByRole("button", { name: "Apply" }));

		await waitFor(() => expect(screen.getByRole("status")).toHaveTextContent("Columns updated. 1 column now visible."));
		expect(screen.getAllByRole("status")).toHaveLength(1);
	});

	it("announces after the modal releases the page, including same-count updates", async () => {
		const user = userEvent.setup();
		const { unmount } = render(<LiveRegionHarness />);
		const status = screen.getByRole("status");
		const updates: { text: string; hidden: boolean }[] = [];
		const observer = new MutationObserver(() => {
			if (status.textContent) {
				updates.push({ text: status.textContent, hidden: Boolean(status.closest('[aria-hidden="true"]')) });
			}
		});
		observer.observe(status, { childList: true, characterData: true, subtree: true });
		try {
			await user.click(screen.getByRole("button", { name: "DataView.columns" }));
			await user.click(screen.getByRole("button", { name: "Apply" }));
			await waitFor(() => expect(updates).toEqual([{ text: "Columns updated. 1 column now visible.", hidden: false }]));

			await user.click(screen.getByRole("button", { name: "DataView.columns" }));
			await user.click(screen.getByRole("button", { name: "Remove Column 1 column" }));
			await user.click(screen.getByRole("checkbox", { name: "Column 2" }));
			await user.click(screen.getByRole("button", { name: "Apply" }));
			await waitFor(() => expect(updates).toEqual([
				{ text: "Columns updated. 1 column now visible.", hidden: false },
				{ text: "Columns updated. 1 column now visible.", hidden: false },
			]));

			await user.click(screen.getByRole("button", { name: "DataView.columns" }));
			await user.keyboard("{Escape}");
			await waitFor(() => expect(screen.queryByText("DataView.column_settings")).not.toBeInTheDocument());
			expect(updates).toHaveLength(2);
		} finally {
			observer.disconnect();
			unmount();
		}
	});
});
