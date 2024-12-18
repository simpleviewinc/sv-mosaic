import { render, screen } from "@testing-library/react";
import React, { act } from "react";
import userEvent from "@testing-library/user-event";

import type { DateData, FieldDefBase, MosaicFieldProps } from "@root/components";

import FormFieldTestType from "../FormFieldTestType";
import FormFieldDate from "@root/components/Field/FormFieldDate/FormFieldDate";
import testIds from "@root/utils/testIds";

const defaultFieldDef: FieldDefBase<"date"> = {
	name: "date",
	type: "date",
};

async function setup(
	props: Partial<MosaicFieldProps<"date", never, DateData>> = {},
	{ stateful = false }: { stateful?: boolean} = {},
) {
	const onChangeMock = props.onChange || vi.fn();

	const renderResult = await act(async () => render(
		<FormFieldTestType
			Component={FormFieldDate}
			fieldDef={defaultFieldDef}
			onChange={onChangeMock}
			stateful={stateful}
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should render a date field", async () => {
		await setup();

		expect(screen.queryByRole("textbox")).toBeInTheDocument();
		expect(screen.queryByRole("button", { name: "Choose date" })).toBeInTheDocument();
	});

	it("should fire the on change handler with a keyboard and an invalid date if manual entry is used", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({ onChange: onChangeMock });

		const input = screen.queryByRole("textbox");
		expect(input).toBeInTheDocument();
		await user.type(input, "1");
		expect(onChangeMock).toBeCalledWith({
			date: new Date("Invalid Date"),
			keyboardInputValue: "1",
		});
	});

	it("should fire the on change handler with a keyboard and a valid date if manual entry is used", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({ onChange: onChangeMock });

		const input = screen.queryByRole("textbox");
		expect(input).toBeInTheDocument();
		await user.click(input);
		await user.paste("01/01/2024");
		expect(onChangeMock).toBeCalledWith({
			date: new Date("2024/01/01"),
			keyboardInputValue: "01/01/2024",
		});
	});

	it("should fire the on change handler with no keyboard value and a valid date if the date picker is used", async () => {
		// An error "A props object containing a "key" prop is being spread into JSX" is logged
		// but there's not much we can do about it because it comes from the MUI internals.
		vi.spyOn(console, "error").mockImplementation(() => null);

		const now = new Date();

		const onChangeMock = vi.fn();
		const { user } = await setup({ onChange: onChangeMock });
		const open = screen.queryByRole("button", { name: "Choose date" });
		expect(open).toBeInTheDocument();
		await user.click(open);
		const first = screen.queryByText("1", { exact: true });
		expect(first).toBeInTheDocument();
		await user.click(first);
		expect(onChangeMock).toBeCalledWith({
			date: new Date(`${now.getFullYear()}/${now.getMonth() + 1}/01`),
			keyboardInputValue: undefined,
		});
	});

	it("should render the skeleton components if skeleton is truthy", async () => {
		await setup({ skeleton: true });

		expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
		expect(screen.queryByRole("button", { name: "Choose date" })).not.toBeInTheDocument();
		expect(screen.queryByTestId(testIds.FORM_FIELD_SKELETON)).toBeInTheDocument();
	});
});
