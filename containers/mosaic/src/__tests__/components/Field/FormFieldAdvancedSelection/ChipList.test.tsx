import { render, screen, within } from "@testing-library/react";
import React, { act } from "react";
import userEvent from "@testing-library/user-event";

import type { ChipListPropsTypes } from "@root/components";

import ChipList from "@root/components/Field/FormFieldAdvancedSelection/ChipList";
import testIds from "@root/utils/testIds";
import { mockOptions } from "@root/mock";

const defaultFieldDef: ChipListPropsTypes["fieldDef"] = {
	disabled: false,
	inputSettings: {
		deleteSelectedOption: () => null,
		isMobileView: false,
	},
};

async function setup(props: Partial<ChipListPropsTypes> = {}) {
	const renderResult = await act(async () => render(
		<ChipList
			fieldDef={defaultFieldDef}
			value={mockOptions}
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should render the advanced selection chip list", async () => {
		await setup();

		expect(screen.queryByRole("button", { name: "Dog" })).toBeInTheDocument();
		expect(screen.queryByRole("button", { name: "Cat" })).toBeInTheDocument();
		expect(screen.queryByRole("button", { name: "Horse" })).toBeInTheDocument();
		expect(screen.queryByRole("button", { name: "Lion" })).toBeInTheDocument();
		expect(screen.queryByRole("button", { name: "Tiger" })).toBeInTheDocument();
		expect(screen.queryByRole("button", { name: "Human" })).toBeInTheDocument();
		expect(screen.queryByRole("button", { name: "Cow" })).toBeInTheDocument();
		expect(screen.queryByRole("button", { name: "Snake" })).toBeInTheDocument();
		expect(screen.queryByRole("button", { name: "6 more" })).toBeInTheDocument();
	});

	it("should not throw any errors if an undefined value is provided", async () => {
		expect(setup({
			value: undefined,
		})).resolves.not.toThrowError();
	});

	it("should fire the delete selection option handler when the chip delete button is clicked", async () => {
		const deleteSelectedOptionMock = vi.fn();

		const { user } = await setup({
			fieldDef: {
				...defaultFieldDef,
				inputSettings: {
					...defaultFieldDef.inputSettings,
					deleteSelectedOption: deleteSelectedOptionMock,
				},
			},
			value: [
				mockOptions[0],
				mockOptions[1],
				mockOptions[2],
			],
		});

		const cat = screen.queryByRole("button", { name: "Cat" });
		const deleteIcon = within(cat).queryByTestId(testIds.CHIP_DELETE_ICON);
		expect(deleteIcon).toBeInTheDocument();
		await user.click(deleteIcon);
		expect(deleteSelectedOptionMock).toBeCalledWith([{ label: "Dog", value: "dog" }, { label: "Horse", value: "horse" }]);
	});

	it("should show all chips when the show more button is clicked", async () => {
		const { user } = await setup();

		const showMore = screen.queryByRole("button", { name: "6 more" });
		expect(showMore).toBeInTheDocument();
		expect(screen.queryAllByTestId(testIds.CHIP)).toHaveLength(8);
		await user.click(showMore);
		expect(screen.queryAllByTestId(testIds.CHIP)).toHaveLength(14);
		expect(screen.queryByRole("button", { name: "Hide" })).toBeInTheDocument();
	});
});
