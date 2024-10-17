import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { act } from "react";

import type { CheckboxListProps } from "@root/components/CheckboxList";

import CheckboxList from "@root/components/CheckboxList";

const checked: CheckboxListProps["checked"] = [];
const options: CheckboxListProps["options"] = [{ value: "item1", label: "Item 1" }, { value: "item2", label: "Item 2" }];

async function setup(props: Partial<CheckboxListProps> = {}) {
	const onChangeMock = props.onChange || vi.fn();

	const renderResult = await act(() => render(
		<CheckboxList
			checked={checked}
			options={options}
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
	it("should render a checkbox list", async () => {
		await setup();

		expect(screen.queryAllByRole("checkbox")).toHaveLength(2);
	});

	it("should trigger the change handler with the correct parameters", async () => {
		const onChangeMock = vi.fn((checked) => {
			expect(checked).toStrictEqual([{ value: "item1", label: "Item 1" }]);
		});

		const { user } = await setup({ onChange: onChangeMock });

		const checkboxes = screen.queryAllByRole("checkbox");

		expect(checkboxes).toHaveLength(2);
		await user.click(checkboxes[0]);
		expect(onChangeMock).toBeCalled();
	});

	it("should trigger the duplocate change handler with the correct parameters", async () => {
		const onChangeCbMock = vi.fn((checked) => {
			expect(checked).toStrictEqual([{ value: "item1", label: "Item 1" }]);
		});

		const { user } = await setup({ onChangeCb: onChangeCbMock });

		const checkboxes = screen.queryAllByRole("checkbox");

		expect(checkboxes).toHaveLength(2);
		await user.click(checkboxes[0]);
		expect(onChangeCbMock).toBeCalled();
	});

	it("should render checked checkboxes when the checked property refers to one of the options provided", async () => {
		await setup({ checked: [{ ...options[0] }] });

		const checkboxes = screen.queryAllByRole("checkbox");
		expect(checkboxes).toHaveLength(2);
		expect(checkboxes[0]).toBeChecked();
	});
});
