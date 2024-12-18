import { render, screen } from "@testing-library/react";
import React, { act, useState } from "react";
import userEvent from "@testing-library/user-event";

import type { CheckboxData, FormFieldCheckboxInputSettings, FieldDefBase, MosaicFieldProps } from "@root/components";

import FormFieldCheckbox from "@root/components/Field/FormFieldCheckbox/FormFieldCheckbox";
import { mockOptions } from "@root/mock";
import testIds from "@root/utils/testIds";

const defaultFieldDef: FieldDefBase<"checkbox", FormFieldCheckboxInputSettings> = {
	name: "checkbox",
	type: "checkbox",
	inputSettings: {
		options: mockOptions,
	},
};

async function setup(
	props: Partial<MosaicFieldProps<"checkbox", FormFieldCheckboxInputSettings, CheckboxData>> = {},
	{ stateful = false }: { stateful?: boolean} = {},
) {
	const onChangeMock = props.onChange || vi.fn();

	const Stateless = () => (
		<FormFieldCheckbox
			fieldDef={defaultFieldDef}
			onChange={async (value) => onChangeMock(value)}
			{...props}
		/>
	);

	const Stateful = () => {
		const [value, setValue] = useState<CheckboxData>([]);

		return (
			<FormFieldCheckbox
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
	it("should render the checkbox form field", async () => {
		await setup();

		expect(screen.queryByRole("checkbox", { name: "Cat" })).toBeInTheDocument();
		expect(screen.queryByRole("checkbox", { name: "Dog" })).toBeInTheDocument();
		expect(screen.queryByRole("checkbox", { name: "Horse" })).toBeInTheDocument();
	});

	it("should fetch options based on the asynchronous get options callback", async () => {
		await setup({
			fieldDef: {
				...defaultFieldDef,
				inputSettings: {
					getOptions: async () => mockOptions,
				},
			},
		});

		expect(screen.queryByRole("checkbox", { name: "Cat" })).toBeInTheDocument();
		expect(screen.queryByRole("checkbox", { name: "Dog" })).toBeInTheDocument();
		expect(screen.queryByRole("checkbox", { name: "Horse" })).toBeInTheDocument();
	});

	it("should append the current value items as checkboxes if they don't already exist in the options fetched", async () => {
		await setup({
			fieldDef: {
				...defaultFieldDef,
				inputSettings: {
					getOptions: async () => mockOptions,
				},
			},
			value: [{ label: "Ferret", value: "ferret" }],
		});

		expect(screen.queryByRole("checkbox", { name: "Ferret" })).toBeInTheDocument();
	});

	it("should fire the on change handler when checkbox items are checked or unchecked", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({
			fieldDef: {
				...defaultFieldDef,
				inputSettings: {
					getOptions: async () => mockOptions,
				},
			},
			onChange: onChangeMock,
		});

		const option = screen.queryByRole("checkbox", { name: "Dog" });
		expect(option).toBeInTheDocument();
		await user.click(option);
		expect(onChangeMock).toBeCalledWith([{ label: "Dog", value: "dog" }]);
	});

	it("should render the skeleton components if skeleton is truthy", async () => {
		await setup({ skeleton: true });

		expect(screen.queryByRole("checkbox", { name: "Cat" })).not.toBeInTheDocument();
		expect(screen.queryByRole("checkbox", { name: "Dog" })).not.toBeInTheDocument();
		expect(screen.queryByRole("checkbox", { name: "Horse" })).not.toBeInTheDocument();
		expect(screen.queryByTestId(testIds.FORM_FIELD_SKELETON)).toBeInTheDocument();
	});
});
