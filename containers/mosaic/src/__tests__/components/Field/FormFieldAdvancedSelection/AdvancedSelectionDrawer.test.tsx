import { render, screen, waitFor } from "@testing-library/react";
import React, { act } from "react";
import userEvent from "@testing-library/user-event";

import type { AdvancedSelectionInputSettings, AdvanceSelectionDrawerPropTypes } from "@root/components/Field/FormFieldAdvancedSelection";
import type { FieldDefBase } from "@root/components";

import AdvancedSelectionDrawer from "@root/components/Field/FormFieldAdvancedSelection/AdvancedSelectionDrawer";
import type { MosaicLabelValue } from "@root/types";

const defaultFieldDef: FieldDefBase<"advancedSelection", AdvancedSelectionInputSettings> = {
	name: "advancedSelection",
	type: "advancedSelection",
	label: "My Advanced Selection",
};

const defaultOptions: MosaicLabelValue[] = [{ label: "Option 1", value: "option1" }, { label: "Option 2", value: "option2" }];

async function setup(props: Partial<AdvanceSelectionDrawerPropTypes> = {}) {
	const handleCloseMock = props.handleClose || vi.fn();
	const onChangeMock = props.onChange || vi.fn();

	const renderResult = await act(async () => render(
		<AdvancedSelectionDrawer
			fieldDef={defaultFieldDef}
			handleClose={handleCloseMock}
			isModalOpen={false}
			onChange={onChangeMock}
			value={[]}
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should render the advanced selection drawer", async () => {
		await setup({
			fieldDef: {
				...defaultFieldDef,
				inputSettings: {
					options: defaultOptions,
				},
			},
		});

		expect(screen.queryByRole("button", { name: "Cancel advanced selection" })).toBeInTheDocument();
		expect(screen.queryByRole("heading", { level: 1, name: "My Advanced Selection" })).toBeInTheDocument();
		expect(screen.queryByRole("button", { name: "Cancel" })).toBeInTheDocument();
		expect(screen.queryByRole("button", { name: "Save" })).toBeInTheDocument();
		expect(screen.queryByPlaceholderText("Keyword...")).toBeInTheDocument();
		expect(screen.queryByText("DataView.selected_options")).toBeInTheDocument();

	});

	it("should render the checkbox items returned from an asynchronous get options", async () => {
		await setup({
			fieldDef: {
				...defaultFieldDef,
				inputSettings: {
					getOptions: async () => ({
						docs: defaultOptions,
					}),
				},
			},
		});

		expect(screen.queryByRole("checkbox", { name: "Option 1" })).toBeInTheDocument();
		expect(screen.queryByRole("checkbox", { name: "Option 2" })).toBeInTheDocument();
	});

	it("should render the checkbox items provided as options", async () => {
		await setup({
			fieldDef: {
				...defaultFieldDef,
				inputSettings: {
					options: defaultOptions,
				},
			},
		});

		expect(screen.queryByRole("checkbox", { name: "Option 1" })).toBeInTheDocument();
		expect(screen.queryByRole("checkbox", { name: "Option 2" })).toBeInTheDocument();
	});

	it("should render the checkbox items checked if they appear in the value provided", async () => {
		await setup({
			fieldDef: {
				...defaultFieldDef,
				inputSettings: {
					options: defaultOptions,
				},
			},
			value: [{ label: "Option 1", value: "option1" }],
		});

		const option1 = screen.queryByRole("checkbox", { name: "Option 1" });
		const option2 = screen.queryByRole("checkbox", { name: "Option 2" });
		expect(option1).toBeInTheDocument();
		expect(option1).toBeChecked();
		expect(option2).toBeInTheDocument();
		expect(option2).not.toBeChecked();
	});

	it("should fire the on change handler with the selected options when the save button is clicked", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({
			fieldDef: {
				...defaultFieldDef,
				inputSettings: {
					options: defaultOptions,
				},
			},
			value: [{ label: "Option 1", value: "option1" }],
			onChange: onChangeMock,
		});

		const save = screen.queryByRole("button", { name: "Save" });
		expect(save).toBeInTheDocument();
		await user.click(save);
		expect(onChangeMock).toBeCalledWith([{ label: "Option 1", value: "option1" }]);
	});

	it("should fire the handle close handler with a true parameter when the save button is clicked", async () => {
		const handleCloseMock = vi.fn();

		const { user } = await setup({
			handleClose: handleCloseMock,
			fieldDef: {
				...defaultFieldDef,
				inputSettings: {
					options: defaultOptions,
				},
			},
		});

		const save = screen.queryByRole("button", { name: "Save" });
		expect(save).toBeInTheDocument();
		await user.click(save);
		expect(handleCloseMock).toBeCalledWith(true);
	});

	it("should fire the handle close handler with an undefined parameter when the cancel button is clicked", async () => {
		const handleCloseMock = vi.fn();

		const { user } = await setup({
			handleClose: handleCloseMock,
			fieldDef: {
				...defaultFieldDef,
				inputSettings: {
					options: defaultOptions,
				},
			},
		});

		const cancel = screen.queryByRole("button", { name: "Cancel" });
		expect(cancel).toBeInTheDocument();
		await user.click(cancel);
		expect(handleCloseMock).toBeCalled();
	});

	it("should filter synchronous options shortly after a keyword is entered", async () => {
		const { user } = await setup({
			fieldDef: {
				...defaultFieldDef,
				inputSettings: {
					options: defaultOptions,
				},
			},
		});

		expect(screen.queryByRole("checkbox", { name: "Option 1" })).toBeInTheDocument();
		expect(screen.queryByRole("checkbox", { name: "Option 2" })).toBeInTheDocument();
		const keyword = screen.queryByPlaceholderText("Keyword...");
		expect(keyword).toBeInTheDocument();
		await user.type(keyword, "Option 1");
		await waitFor(() => new Promise((resolve) => setTimeout(() => resolve(null), 200)));
		expect(screen.queryByRole("checkbox", { name: "Option 1" })).toBeInTheDocument();
		expect(screen.queryByRole("checkbox", { name: "Option 2" })).not.toBeInTheDocument();
	});

	it("should limit the number of checkboxes that can be checked if a select limit is provided", async () => {
		const { user } = await setup({
			fieldDef: {
				...defaultFieldDef,
				inputSettings: {
					options: defaultOptions,
					selectLimit: 1,
				},
			},
		});

		const option1 = screen.queryByRole("checkbox", { name: "Option 1" });
		const option2 = screen.queryByRole("checkbox", { name: "Option 2" });
		expect(option1).toBeInTheDocument();
		expect(option2).toBeInTheDocument();
		expect(option1).not.toBeDisabled();
		expect(option2).not.toBeDisabled();
		await user.click(option1);
		expect(option1).toBeDisabled();
		expect(option2).toBeDisabled();
	});
});
