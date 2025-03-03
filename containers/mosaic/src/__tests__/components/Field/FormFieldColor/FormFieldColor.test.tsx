import { render, screen } from "@testing-library/react";
import React, { act, useState } from "react";
import userEvent from "@testing-library/user-event";

import type { ColorData, FieldDefBase, MosaicFieldProps } from "@root/components";

import FormFieldColor from "@root/components/Field/FormFieldColor/FormFieldColor";
import testIds from "@root/utils/testIds";

const defaultFieldDef: FieldDefBase<"color"> = {
	name: "color",
	label: "Color",
	type: "color",
};

async function setup(
	props: Partial<MosaicFieldProps<"color", never, ColorData>> = {},
	{ stateful = false }: { stateful?: boolean} = {},
) {
	const onChangeMock = props.onChange || vi.fn();

	const Stateless = () => (
		<FormFieldColor
			fieldDef={defaultFieldDef}
			onChange={onChangeMock}
			{...props}
		/>
	);

	const Stateful = () => {
		const [value, setValue] = useState<ColorData | undefined>(undefined);

		return (
			<FormFieldColor
				fieldDef={defaultFieldDef}
				value={value}
				onChange={async (value) => setValue(value)}
				{...props}
			/>
		);
	};

	const renderResult = await act(async () => render(
		stateful ? <Stateful /> : <Stateless />,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should render the color form field", async () => {
		await setup();

		expect(screen.queryByRole("button", { name: "Select color" })).toBeInTheDocument();
	});

	it("should display the color picker when the button is clicked and close it again when popover is closed", async () => {
		// react-color dependencies throw an error
		// TODO investigate new color picker libraries because react-color seems to no longer be maintained
		vi.spyOn(console, "error").mockImplementation(() => null);
		const { user } = await setup();

		const button = screen.queryByRole("button", { name: "Select color" });
		expect(button).toBeInTheDocument();
		await user.click(button);
		expect(screen.queryByTestId(testIds.FORM_FIELD_COLOR_POPOVER)).toBeInTheDocument();
		await user.keyboard("{Escape}");
		expect(screen.queryByTestId(testIds.FORM_FIELD_COLOR_POPOVER)).not.toBeInTheDocument();
	});

	it("should fire the on blur handler when the color picker is closed", async () => {
		const onBlurMock = vi.fn();

		const { user } = await setup({ onBlur: onBlurMock });

		const button = screen.queryByRole("button", { name: "Select color" });
		expect(button).toBeInTheDocument();
		await user.click(button);
		await user.keyboard("{Escape}");
		expect(onBlurMock).toBeCalled();
	});

	// TODO For some reason, the on change handler can't be fired in a JSDom environment
	it.skip("should fire the on change handler with a hexidecimal representation of the chosen color", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({ onChange: onChangeMock });

		const button = screen.queryByRole("button", { name: "Select color" });
		expect(button).toBeInTheDocument();
		await user.click(button);
		const hex = screen.queryByRole("textbox", { name: "hex" });
		expect(hex).toBeInTheDocument();
		await user.type(hex, "f55cde");

		expect(onChangeMock).toBeCalled();
	});

	it("should render the color picker not clickable if the disabled prop is truthy", async () => {
		await setup({ disabled: true });

		expect(screen.queryByRole("button", { name: "Select color" })).toBeDisabled();
	});

	it("should display the correct color if a value is provided", async () => {
		await setup({ value: "#f55cde" });

		// TODO Check background color of button div when we migrate to emotion
	});

	it("should render the skeleton components if skeleton is truthy", async () => {
		await setup({ skeleton: true });

		expect(screen.queryByRole("button", { name: "Select color" })).not.toBeInTheDocument();
		expect(screen.queryByTestId(testIds.FORM_FIELD_SKELETON)).toBeInTheDocument();
	});
});
