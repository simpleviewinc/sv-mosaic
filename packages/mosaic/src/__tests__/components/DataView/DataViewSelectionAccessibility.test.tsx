import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import DataViewTHead from "@root/components/DataView/DataViewTHead";
import { DataViewTh } from "@root/components/DataView/DataViewTh/DataViewTh";
import DataViewActionsRow from "@root/components/DataView/DataViewActionsRow";
import DataViewDisplayGrid from "@root/components/DataView/DataViewDisplayGrid";
import { DataViewDisplayList, DataViewDisplayGrid as GridDisplayOption } from "@root/components/DataView/DataViewDisplays";
import testIds from "@root/utils/testIds";

const columns = [
	{ name: "name", label: "Name", sortable: true },
	{ name: "place", label: "Place" },
];
const data = [
	{ id: "one", name: "First", place: "Here", image: <span>First image</span> },
	{ id: "two", name: "Second", place: "There", image: <span>Second image</span> },
];

describe(__dirname, () => {
	it.each([
		{ allChecked: false, anyChecked: false, disabled: false },
		{ allChecked: true, anyChecked: true, disabled: false },
		{ allChecked: false, anyChecked: true, disabled: false },
		{ allChecked: false, anyChecked: false, disabled: true },
	])("names the list select-all input with allChecked=$allChecked, anyChecked=$anyChecked, disabled=$disabled", async ({ allChecked, anyChecked, disabled }) => {
		const onCheckAllClick = vi.fn();
		const user = userEvent.setup();
		render(
			<table>
				<DataViewTHead
					columns={columns}
					data={data}
					hasActions={false}
					onCheckAllClick={onCheckAllClick}
					allChecked={allChecked}
					anyChecked={anyChecked}
					disabled={disabled}
				/>
			</table>,
		);

		const input = screen.getByRole("checkbox", { name: "Select all rows" });
		expect(input).toHaveAttribute("aria-label", "Select all rows");
		expect(input).toHaveProperty("checked", allChecked);
		expect(input).toHaveProperty("disabled", disabled);
		expect(input).toHaveAttribute("data-indeterminate", String(anyChecked && !allChecked));
		if (!disabled) {
			await user.click(input);
			expect(onCheckAllClick).toHaveBeenCalledTimes(1);
		}
	});

	it("sets explicit scope on reorder, selection, actions, and data headers", () => {
		render(
			<table>
				<DataViewTHead
					columns={columns}
					data={data}
					hasActions
					onReorder={vi.fn()}
					onCheckAllClick={vi.fn()}
					onSortChange={vi.fn()}
				/>
			</table>,
		);

		const headers = screen.getAllByRole("columnheader");
		expect(headers).toHaveLength(5);
		for (const header of headers) {
			expect(header).toHaveAttribute("scope", "col");
		}
		expect(screen.getByRole("columnheader", { name: "Name" })).toHaveAttribute("scope", "col");
	});

	it("sets explicit scope on the bulk-action replacement header", () => {
		render(
			<table>
				<DataViewTHead
					columns={columns}
					data={data}
					hasActions
					onReorder={vi.fn()}
					onCheckAllClick={vi.fn()}
					anyChecked
					checked={[true, false]}
					bulkActions={[{ name: "archive", label: "Archive", intent: "secondary", variant: "contained", onClick: vi.fn() }]}
				/>
			</table>,
		);

		const headers = screen.getAllByRole("columnheader");
		expect(headers).toHaveLength(3);
		for (const header of headers) {
			expect(header).toHaveAttribute("scope", "col");
		}
		expect(screen.getByRole("checkbox", { name: "Select all rows" })).toHaveAttribute("data-indeterminate", "true");
	});

	it("keeps the spanning selection header scoped when rows are selected without bulk actions", () => {
		render(
			<table>
				<DataViewTHead
					columns={columns}
					data={data}
					hasActions
					onReorder={vi.fn()}
					onCheckAllClick={vi.fn()}
					anyChecked
					bulkActions={[]}
				/>
			</table>,
		);

		const headers = screen.getAllByRole("columnheader");
		expect(headers).toHaveLength(2);
		for (const header of headers) {
			expect(header).toHaveAttribute("scope", "col");
		}
		expect(headers[1]).toHaveAttribute("colspan", "4");
	});

	it("keeps sortable data headers scoped and invokes sort", async () => {
		const onSortChange = vi.fn();
		const user = userEvent.setup();
		render(<table><thead><tr><DataViewTh name="name" label="Name" sortable sorted="asc" onSortChange={onSortChange} /></tr></thead></table>);

		const header = screen.getByRole("columnheader", { name: "Name" });
		expect(header).toHaveAttribute("scope", "col");
		await user.click(within(header).getByTestId(testIds.DATA_VIEW_TH_INNER));
		expect(onSortChange).toHaveBeenCalledWith({ name: "name", dir: "desc" });
	});

	it.each([
		{ allChecked: false, anyChecked: false, disabled: false },
		{ allChecked: true, anyChecked: true, disabled: false },
		{ allChecked: false, anyChecked: true, disabled: false },
		{ allChecked: false, anyChecked: false, disabled: true },
	])("names the grid select-all input with allChecked=$allChecked, anyChecked=$anyChecked, disabled=$disabled", async ({ allChecked, anyChecked, disabled }) => {
		const onCheckAllClick = vi.fn();
		const user = userEvent.setup();
		render(
			<DataViewActionsRow
				display="grid"
				displayControlEnabled={false}
				displayOptionsFull={[GridDisplayOption, DataViewDisplayList]}
				activeColumnObjs={columns}
				bulkActions={[]}
				data={data}
				checked={[allChecked, allChecked]}
				onCheckAllClick={onCheckAllClick}
				allChecked={allChecked}
				anyChecked={anyChecked}
				disabled={disabled}
			/>,
		);

		const input = screen.getByRole("checkbox", { name: "Select all rows" });
		expect(input).toHaveAttribute("aria-label", "Select all rows");
		expect(input).toHaveProperty("checked", allChecked);
		expect(input).toHaveProperty("disabled", disabled);
		expect(input).toHaveAttribute("data-indeterminate", String(anyChecked && !allChecked));
		if (!disabled) {
			await user.click(input);
			expect(onCheckAllClick).toHaveBeenCalledTimes(1);
		}
	});

	it("names each grid row input and preserves its row index callback", async () => {
		const onCheckboxClick = vi.fn();
		const user = userEvent.setup();
		render(
			<DataViewDisplayGrid
				columns={columns}
				data={data}
				gridColumnsMap={{ image: "image", primary: "name", secondary: "place" }}
				rowActions={{}}
				checked={[false, true]}
				anyChecked
				onCheckboxClick={onCheckboxClick}
			/>,
		);

		const items = screen.getAllByTestId(testIds.DATA_VIEW_GRID_ITEM);
		expect(items).toHaveLength(2);
		const inputs = items.map(item => within(item).getByRole("checkbox", { name: "Select row" }));
		expect(inputs[0]).toHaveAttribute("aria-label", "Select row");
		expect(inputs[1]).toHaveAttribute("aria-label", "Select row");
		expect(inputs[0]).not.toBeChecked();
		expect(inputs[1]).toBeChecked();
		await user.click(inputs[0]);
		await user.click(inputs[1]);
		expect(onCheckboxClick).toHaveBeenNthCalledWith(1, 0);
		expect(onCheckboxClick).toHaveBeenNthCalledWith(2, 1);
	});
});
