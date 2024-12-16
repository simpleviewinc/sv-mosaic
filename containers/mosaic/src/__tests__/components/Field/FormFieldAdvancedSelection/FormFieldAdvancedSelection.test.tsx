import { render, screen, waitFor, within } from "@testing-library/react";
import React, { act, useState } from "react";
import userEvent from "@testing-library/user-event";

import type { AdvancedSelectionData, AdvancedSelectionInputSettings, FieldDefBase, MosaicFieldProps } from "@root/components";

import FormFieldAdvancedSelection from "@root/components/Field/FormFieldAdvancedSelection/FormFieldAdvancedSelection";
import { mockOptions } from "@root/mock";
import testIds from "@root/utils/testIds";

const defaultFieldDef: FieldDefBase<"advancedSelection", AdvancedSelectionInputSettings> = {
	name: "address",
	type: "advancedSelection",
	inputSettings: {
		options: mockOptions,
	},
};

async function setup(
	props: Partial<MosaicFieldProps<"advancedSelection", AdvancedSelectionInputSettings, AdvancedSelectionData>> = {},
	{ stateful = false }: { stateful?: boolean} = {},
) {
	const onChangeMock = props.onChange || vi.fn();

	const Stateless = () => (
		<FormFieldAdvancedSelection
			fieldDef={defaultFieldDef}
			onChange={async (value) => onChangeMock(value)}
			{...props}
		/>
	);

	const Stateful = () => {
		const [value, setValue] = useState<AdvancedSelectionData>([]);

		return (
			<FormFieldAdvancedSelection
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
	it("should render the advanced selection form field", async () => {
		await setup();

		expect(screen.queryByRole("button", { name: "Add" })).toBeInTheDocument();
	});

	it("should not display the add button if select limit is provided and the limit has been reached", async () => {
		const { user } = await setup({
			fieldDef: {
				...defaultFieldDef,
				inputSettings: {
					...defaultFieldDef.inputSettings,
					selectLimit: 1,
				},
			},
		}, { stateful: true });

		const add = screen.queryByRole("button", { name: "Add" });
		expect(add).toBeInTheDocument();
		await user.click(add);
		const option = screen.queryByRole("checkbox", { name: "Dog" });
		const save = screen.queryByRole("button", { name: "Save" });
		expect(option).toBeInTheDocument();
		await user.click(option);
		await user.click(save);
		await waitFor(() => expect(screen.queryByTestId(testIds.DRAWER_BACKDROP)).toBeNull());
		expect(screen.queryByRole("button", { name: "Dog" })).toBeInTheDocument();
		expect(add).not.toBeInTheDocument();
	});

	it("should fire the on blur handler when the selection is saved", async () => {
		const onBlurMock = vi.fn();

		const { user } = await setup({ onBlur: onBlurMock });

		const add = screen.queryByRole("button", { name: "Add" });
		await user.click(add);
		const save = screen.queryByRole("button", { name: "Save" });
		await user.click(save);
		expect(onBlurMock).toBeCalled();
	});

	it("should fire the on blur handler when the selection is cancelled", async () => {
		const onBlurMock = vi.fn();

		const { user } = await setup({ onBlur: onBlurMock });

		const add = screen.queryByRole("button", { name: "Add" });
		await user.click(add);
		const cancel = screen.queryByRole("button", { name: "Cancel" });
		await user.click(cancel);
		expect(onBlurMock).toBeCalled();
	});

	it("should close the drawer when the selection is cancelled", async () => {
		const { user } = await setup();

		const add = screen.queryByRole("button", { name: "Add" });
		await user.click(add);
		const cancel = screen.queryByRole("button", { name: "Cancel" });
		await user.click(cancel);
		await waitFor(() => expect(screen.queryByTestId(testIds.DRAWER_BACKDROP)).toBeNull());
	});

	it("should fire the on change and on blur handlers when an option is deleted", async () => {
		const onChangeMock = vi.fn();
		const onBlurMock = vi.fn();

		const { user } = await setup({
			value: [mockOptions[0]],
			onChange: onChangeMock,
			onBlur: onBlurMock,
		});

		const option = screen.queryByRole("button", { name: "Dog" });
		expect(option).toBeInTheDocument();
		const deleteIcon = within(option).queryByTestId(testIds.CHIP_DELETE_ICON);
		expect(deleteIcon).toBeInTheDocument();
		await user.click(deleteIcon);
		expect(onChangeMock).toBeCalledWith([]);
		expect(onBlurMock).toBeCalled();
	});

	it("should render the skeleton components if skeleton is truthy", async () => {
		await setup({ skeleton: true });

		expect(screen.queryByRole("button", { name: "Add" })).not.toBeInTheDocument();
		expect(screen.queryByTestId(testIds.FORM_FIELD_SKELETON)).toBeInTheDocument();
	});
});
