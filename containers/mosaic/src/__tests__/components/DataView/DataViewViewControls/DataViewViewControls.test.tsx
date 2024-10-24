import { render, screen } from "@testing-library/react";
import React, { act } from "react";

import type { DataViewViewControlsProps } from "@root/components/DataView/DataViewViewControls";

import DataViewViewControls from "@root/components/DataView/DataViewViewControls";
import userEvent from "@testing-library/user-event";

async function setup(props: Partial<DataViewViewControlsProps> = {}) {
	const renderResult = await act(() => render(
		<DataViewViewControls
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should render the data view view controls in read-only if a current view is provided", async () => {
		await setup({ currentView: { value: "myView", label: "My View" } });

		expect(screen.queryByText("DataView.view: My View")).toBeInTheDocument();
	});

	it("should render button showing the current view label if a current view and list handler is provided", async () => {
		const onViewListMock = vi.fn();

		const { user } = await setup({
			currentView: { value: "myView", label: "My View" },
			onViewList: onViewListMock,
		});

		const button = screen.queryByRole("button", { name: "DataView.view: My View" });
		expect(button).toBeInTheDocument();
		await user.click(button);
		expect(onViewListMock).toHaveBeenCalled();
	});

	it("should render button showing no view selected label if a list handler is provided but there is no current view", async () => {
		const onViewListMock = vi.fn();

		await setup({ onViewList: onViewListMock });

		expect(screen.queryByRole("button", { name: "DataView.no_view_selected" })).toBeInTheDocument();
	});

	it("should render a menu button with an overwrite current view item if the view save handler is provided", async () => {
		const onViewSaveMock = vi.fn();

		const { user } = await setup({ onViewSave: onViewSaveMock });

		const button = screen.queryByRole("button", { name: "DataView.save_view" });
		expect(button).toBeInTheDocument();
		await user.click(button);
		const menuItem = screen.queryByRole("menuitem", { name: "DataView.overwrite_current_view" });
		expect(menuItem).toBeInTheDocument();
		await user.click(menuItem);
		expect(onViewSaveMock).toHaveBeenCalled();
	});

	it("should render a menu button with a save new view item if the view save as handler is provided", async () => {
		const onViewSaveAsMock = vi.fn();

		const { user } = await setup({ onViewSaveAs: onViewSaveAsMock });

		const button = screen.queryByRole("button", { name: "DataView.save_view" });
		expect(button).toBeInTheDocument();
		await user.click(button);
		const menuItem = screen.queryByRole("menuitem", { name: "DataView.save_as_new_view" });
		expect(menuItem).toBeInTheDocument();
		await user.click(menuItem);
		expect(onViewSaveAsMock).toHaveBeenCalled();
	});
});
