import { render, screen } from "@testing-library/react";
import React, { act } from "react";

import type { DataViewActionsButtonRowProps } from "@root/components/DataView/DataViewActionsButtonRow";

import DataViewActionsButtonRow from "@root/components/DataView/DataViewActionsButtonRow";
import testIds from "@root/utils/testIds";
import userEvent from "@testing-library/user-event";

const primaryActions: DataViewActionsButtonRowProps["primaryActions"] = [{ name: "primary1", label: "Primary 1", color: "black", variant: "contained", onClick: vi.fn() }, { name: "primary2", label: "Primary 2", color: "black", variant: "contained", onClick: vi.fn() }];
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
