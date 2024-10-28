import { render, screen } from "@testing-library/react";
import React, { act } from "react";
import userEvent from "@testing-library/user-event";

import type { DataViewFilterNumberDropdownContentProps } from "@root/components/DataViewFilterNumber";

import DataViewFilterNumberDropdownContent from "@root/components/DataViewFilterNumber/DataViewFilterNumberDropdownContent";
import testIds from "@root/utils/testIds";

async function setup(props: Partial<DataViewFilterNumberDropdownContentProps> = {}) {
	const onChangeMock = props.onChange || vi.fn();
	const onCloseMock = props.onClose || vi.fn();

	const renderResult = await act(async () => render(
		<DataViewFilterNumberDropdownContent
			args={{}}
			data={{}}
			onChange={onChangeMock}
			onClose={onCloseMock}
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should render the data view number dropdown content", async () => {
		await setup();

		expect(screen.queryByTestId(testIds.DATA_VIEW_FILTER_NUMBER_CONTENT)).toBeInTheDocument();
		expect(screen.queryByLabelText("Minimum")).toBeInTheDocument();
		expect(screen.queryByLabelText("Maximum")).toBeInTheDocument();
		expect(screen.queryByRole("button", { name: "Clear" })).toBeInTheDocument();
		expect(screen.queryByRole("button", { name: "Apply" })).toBeInTheDocument();
	});

	it("should not throw an error if data is not provided", async () => {
		await expect(new Promise((resolve, reject) => setup({ data: undefined }).then(resolve).catch(reject)))
			.resolves
			.not
			.toThrow();
	});

	it("should render with the correct field values", async () => {
		await setup({ data: { min: 3, max: 5 } });

		const min = screen.queryByLabelText("Minimum");
		const max = screen.queryByLabelText("Maximum");

		expect(min).toBeInTheDocument();
		expect(max).toBeInTheDocument();
		expect(min).toHaveValue("3");
		expect(max).toHaveValue("5");
	});

	it("should clear the field values when the clear button is clicked", async () => {
		const { user } = await setup({ data: { min: 3, max: 5 } });

		const min = screen.queryByLabelText("Minimum");
		const max = screen.queryByLabelText("Maximum");
		const clear = screen.queryByRole("button", { name: "Clear" });

		expect(min).toBeInTheDocument();
		expect(max).toBeInTheDocument();
		expect(clear).toBeInTheDocument();

		await user.click(clear);

		expect(min).toHaveValue("");
		expect(max).toHaveValue("");
	});

	it("should fire the on change handler with an undefined value if neither the minimum or maximum fields have value", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({ onChange: onChangeMock });

		const apply = screen.queryByRole("button", { name: "Apply" });
		expect(apply).toBeInTheDocument();
		await user.click(apply);
		expect(onChangeMock).toBeCalledWith(undefined);
	});

	it("should fire the on change handler with a the correct parameter if the minimum field has value", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({ onChange: onChangeMock, data: { min: 3 } });

		const apply = screen.queryByRole("button", { name: "Apply" });
		expect(apply).toBeInTheDocument();
		await user.click(apply);
		expect(onChangeMock).toBeCalledWith({
			min: 3,
			max: undefined,
		});
	});

	it("should fire the on change handler with a the correct parameter if the maximum field has value", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({ onChange: onChangeMock, data: { max: 5 } });

		const apply = screen.queryByRole("button", { name: "Apply" });
		expect(apply).toBeInTheDocument();
		await user.click(apply);
		expect(onChangeMock).toBeCalledWith({
			min: undefined,
			max: 5,
		});
	});

	it("should fire the on change handler with a the correct parameter if both the minimum and maximum fields have value", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({ onChange: onChangeMock, data: { min: 3, max: 5 } });

		const apply = screen.queryByRole("button", { name: "Apply" });
		expect(apply).toBeInTheDocument();
		await user.click(apply);
		expect(onChangeMock).toBeCalledWith({
			min: 3,
			max: 5,
		});
	});
});
