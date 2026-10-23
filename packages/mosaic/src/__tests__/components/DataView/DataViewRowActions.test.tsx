import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { act } from "react";

import DataView from "@root/components/DataView";

it.each(["list", "grid"])("evaluates %s actions against original data, not formatted columns", async (display) => {
	const row = { id: "active", accountArchived: false };
	const disabled = vi.fn(({ row }) => row.accountArchived);
	const tooltip = vi.fn(({ row }) => row.accountArchived ? "Archived account" : "Edit account");
	const onClick = vi.fn();
	const user = userEvent.setup();
	await act(() => render(
		<DataView
			display={display}
			gridColumnsMap={{ primary: "accountArchived" }}
			columns={[{ name: "accountArchived", label: "Status", transforms: [({ data }) => data ? "Archived" : "Active"] }]}
			data={[row]}
			primaryActions={[{ name: "edit", label: "Edit", variant: "contained", disabled, tooltip, onClick }]}
		/>,
	));

	expect(screen.getByText("Active")).toBeInTheDocument();
	const button = screen.getByRole("button", { name: "Edit" });
	expect(button).toBeEnabled();
	expect(disabled.mock.calls[0][0].row).toBe(row);
	expect(tooltip.mock.calls[0][0].row).toBe(row);
	await user.hover(button);
	expect(screen.getByRole("tooltip")).toHaveTextContent("Edit account");
	await user.click(button);
	expect(onClick.mock.calls[0][0].data).toBe(row);
});

for (const display of ["list", "grid"]) {
	it.each(["disabled", "tooltip"])(`skips %s callbacks for excluded rows in ${display} view`, async (callback) => {
		const accountRow = { id: "account", name: "Account row", account: { archived: false, name: "Active account" } };
		const data = [accountRow, { id: "other", name: "Other row" }];
		const disabled = vi.fn(({ row }) => row.account.archived);
		const tooltip = vi.fn(({ row }) => row.account.name);
		await act(() => render(
			<DataView
				display={display}
				gridColumnsMap={{ primary: "name" }}
				columns={[{ name: "name", label: "Name" }]}
				data={data}
				primaryActions={[{
					name: "edit",
					label: "Edit",
					variant: "contained",
					show: ({ row }) => Boolean(row.account),
					disabled: callback === "disabled" ? disabled : false,
					tooltip: callback === "tooltip" ? tooltip : "Edit account",
					onClick: vi.fn(),
				}]}
			/>,
		));

		expect(screen.getByText("Other row")).toBeInTheDocument();
		expect(callback === "disabled" ? disabled : tooltip).toHaveBeenCalledExactlyOnceWith({ row: accountRow });
		const wrappers = document.querySelectorAll('[data-mosaic-id="action_primary_edit"]');
		expect(wrappers).toHaveLength(display === "list" ? 2 : 1);
		expect(wrappers[0]).toBeVisible();
		expect(wrappers[0].querySelector("button")).toBeEnabled();
		if (display === "list") {
			// Keep a disabled placeholder for alignment without evaluating its callbacks.
			expect(wrappers[1]).toHaveClass("invisible");
			expect(wrappers[1]).not.toBeVisible();
			expect(wrappers[1].querySelector("button")).toBeDisabled();
		}
	});
}
