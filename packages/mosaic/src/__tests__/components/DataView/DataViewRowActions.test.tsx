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
