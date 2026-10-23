import { render, screen } from "@testing-library/react";
import React, { act } from "react";

import type { DataViewActionsButtonRowProps } from "@root/components/DataView/DataViewActionsButtonRow";

import DataViewActionsButtonRow from "@root/components/DataView/DataViewActionsButtonRow";
import testIds from "@root/utils/testIds";
import userEvent from "@testing-library/user-event";

const primaryActions: DataViewActionsButtonRowProps["primaryActions"] = [{ name: "primary1", label: "Primary 1", intent: "secondary", variant: "contained", onClick: vi.fn() }, { name: "primary2", label: "Primary 2", intent: "secondary", variant: "contained", onClick: vi.fn() }];
const additionalActions: DataViewActionsButtonRowProps["additionalActions"] = [{ name: "additional1", label: "Additional 1", onClick: vi.fn() }, { name: "additional2", label: "Additional 2", onClick: vi.fn() }];
const originalRowData: DataViewActionsButtonRowProps["originalRowData"] = { id: "abc123" };

async function setup(props: Partial<DataViewActionsButtonRowProps> = {}) {
	const renderResult = await act(() => render(
		<DataViewActionsButtonRow
			originalRowData={originalRowData}
			activeDisplay="list"
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should render the data view actions button row with primary actions", async () => {
		const onClickMock = vi.fn<DataViewActionsButtonRowProps["primaryActions"][number]["onClick"]>(({ data }) => {
			expect(data).toStrictEqual({ id: "abc123" });
		});

		const { user } = await setup({ primaryActions: [{ ...primaryActions[0], onClick: onClickMock }, primaryActions[1]] });

		expect(screen.queryByTestId(testIds.BUTTON_ROW)).toBeInTheDocument();

		const buttons = screen.queryAllByRole("button");
		expect(buttons).toHaveLength(2);
		await user.click(buttons[0]);
		expect(onClickMock).toBeCalled();

	});

	it("should render the data view actions button row with additional actions", async () => {
		const onClickMock = vi.fn<DataViewActionsButtonRowProps["additionalActions"][number]["onClick"]>(({ data }) => {
			expect(data).toStrictEqual({ id: "abc123" });
		});

		const { user } = await setup({ additionalActions: [{ ...additionalActions[0], onClick: onClickMock }, additionalActions[1]] });

		expect(screen.queryByTestId(testIds.BUTTON_ROW)).toBeInTheDocument();

		const button = screen.queryByRole("button");
		expect(button).toBeInTheDocument();
		await user.click(button);

		const menuItem = screen.getByRole("menuitem", { name: "Additional 1" });
		expect(screen.getByRole("menuitem", { name: "Additional 1" })).toBeInTheDocument();
		await user.click(menuItem);

		expect(onClickMock).toBeCalled();
	});

	it("should render the button row invisible if the actions are hidden", async () => {
		await setup({ actionsHidden: true, primaryActions, additionalActions });

		const buttonRow = screen.queryByTestId(testIds.BUTTON_ROW);

		expect(buttonRow).toBeInTheDocument();

		// TODO: assert visibility when we've migrated to emotion
	});
});

describe("primary action row callbacks", () => {
	const activeRow = { id: "active", accountArchived: false };
	const archivedRow = { id: "archived", accountArchived: true };

	it("disables only matching rows and passes the original row to click handlers", async () => {
		const disabled = vi.fn(({ row }) => row.accountArchived);
		const onClick = vi.fn();
		const actions = [{ ...primaryActions[0], disabled, onClick }];
		const { user } = await setup({ originalRowData: activeRow, primaryActions: actions });
		await setup({ originalRowData: archivedRow, primaryActions: actions });

		const [activeButton, archivedButton] = screen.getAllByRole("button");
		expect(activeButton).toBeEnabled();
		expect(archivedButton).toBeDisabled();
		expect(disabled).toHaveBeenCalledWith({ row: activeRow });
		expect(disabled).toHaveBeenCalledWith({ row: archivedRow });
		await user.click(activeButton);
		archivedButton.click();
		expect(onClick).toHaveBeenCalledExactlyOnceWith({ data: activeRow });
	});

	it("shows row-specific tooltips, including on a disabled action", async () => {
		const tooltip = vi.fn(({ row }) => row.accountArchived ? "This account is archived" : "Edit account");
		const actions = [{ ...primaryActions[0], disabled: ({ row }) => Boolean(row.accountArchived), tooltip }];
		const { user } = await setup({ originalRowData: activeRow, primaryActions: actions });
		await setup({ originalRowData: archivedRow, primaryActions: actions });

		// Hover the wrapper, which receives pointer events even when its button is disabled.
		const wrappers = document.querySelectorAll('[data-mosaic-id="action_primary_primary1"]');
		await user.hover(wrappers[0]);
		expect(screen.getByRole("tooltip")).toHaveTextContent("Edit account");
		await user.unhover(wrappers[0]);
		await user.hover(wrappers[1]);
		expect(screen.getByRole("tooltip")).toHaveTextContent("This account is archived");
		expect(tooltip).toHaveBeenCalledWith({ row: activeRow });
		expect(tooltip).toHaveBeenCalledWith({ row: archivedRow });
	});

	it.each([
		{ name: "omitted", disabled: undefined, expected: false },
		{ name: "false", disabled: false, expected: false },
		{ name: "true", disabled: true, expected: true },
		{ name: "false callback", disabled: () => false, expected: false },
		{ name: "true callback", disabled: () => true, expected: true },
		{ name: "empty array", disabled: [], expected: false },
		{ name: "false array", disabled: [false, () => false], expected: false },
		{ name: "mixed array", disabled: [false, ({ row }) => Boolean(row.accountArchived)], expected: true },
		{ name: "true array", disabled: [() => false, true], expected: true },
	])("evaluates $name disabled values", async ({ disabled, expected }) => {
		await setup({ originalRowData: archivedRow, primaryActions: [{ ...primaryActions[0], disabled }] });
		expect(screen.getByRole("button")).toHaveProperty("disabled", expected);
	});

	it.each(["disabled", "actionsHidden"] as const)("keeps %s authoritative when the row callback returns false", async (flag) => {
		await setup({ [flag]: true, primaryActions: [{ ...primaryActions[0], disabled: () => false }] });
		const button = screen.getByRole("button", { hidden: true });
		expect(button).toBeDisabled();
		if (flag === "actionsHidden") {
			expect(button).not.toBeVisible();
		}
	});

	it.each([
		{ name: "static string", tooltip: "Edit account" },
		{ name: "static element", tooltip: <span>Edit account</span> },
		{ name: "callback element", tooltip: ({ row }) => <span>{`Edit ${row.id}`}</span> },
	])("preserves $name tooltips", async ({ tooltip }) => {
		const { user } = await setup({ originalRowData: { id: "account" }, primaryActions: [{ ...primaryActions[0], tooltip }] });
		await user.hover(screen.getByRole("button"));
		expect(screen.getByRole("tooltip")).toHaveTextContent("Edit account");
	});

	it("allows a tooltip callback to return undefined", async () => {
		const { user } = await setup({ primaryActions: [{ ...primaryActions[0], tooltip: () => undefined }] });
		await user.hover(screen.getByRole("button"));
		expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
	});

	it("re-evaluates callbacks when row data changes without replacing the actions", async () => {
		const actions = [{
			...primaryActions[0],
			disabled: ({ row }) => Boolean(row.accountArchived),
			tooltip: ({ row }) => row.accountArchived ? "Archived" : "Active",
		}];
		const { rerender, user } = await setup({ originalRowData: activeRow, primaryActions: actions });
		expect(screen.getByRole("button")).toBeEnabled();
		await user.hover(screen.getByRole("button"));
		expect(screen.getByRole("tooltip")).toHaveTextContent("Active");
		await act(() => rerender(
			<DataViewActionsButtonRow originalRowData={{ ...activeRow, accountArchived: true }} activeDisplay="list" primaryActions={actions} />,
		));
		expect(screen.getByRole("button")).toBeDisabled();
		expect(screen.getByRole("tooltip")).toHaveTextContent("Archived");
	});

	it("keeps show filtering and does not evaluate callbacks for excluded actions", async () => {
		const disabled = vi.fn(() => false);
		const tooltip = vi.fn(() => "Edit account");
		await setup({
			originalRowData: archivedRow,
			primaryActions: [{ ...primaryActions[0], show: ({ row }) => !row.accountArchived, disabled, tooltip }],
		});
		expect(screen.queryByRole("button")).not.toBeInTheDocument();
		expect(disabled).not.toHaveBeenCalled();
		expect(tooltip).not.toHaveBeenCalled();
	});
});
