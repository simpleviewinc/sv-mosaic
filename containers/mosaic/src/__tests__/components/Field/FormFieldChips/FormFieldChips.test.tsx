import { render, screen } from "@testing-library/react";
import React, { act } from "react";
import userEvent from "@testing-library/user-event";

import type { ChipData, FormFieldChipsInputSettings, FieldDefBase, MosaicFieldProps } from "@root/components";

import FormFieldTestType from "../FormFieldTestType";
import FormFieldChips from "@root/components/Field/FormFieldChips/FormFieldChips";
import { mockOptions } from "@root/mock";
import testIds from "@root/utils/testIds";

const defaultFieldDef: FieldDefBase<"chip", FormFieldChipsInputSettings> = {
	name: "chip",
	type: "chip",
	inputSettings: {
		options: mockOptions,
	},
};

async function setup(
	props: Partial<MosaicFieldProps<"chip", FormFieldChipsInputSettings, ChipData>> = {},
	{ stateful = false }: { stateful?: boolean} = {},
) {
	const onChangeMock = props.onChange || vi.fn();

	const renderResult = await act(async () => render(
		<FormFieldTestType
			Component={FormFieldChips}
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
	it("should render the chip form field", async () => {
		await setup();

		expect(screen.queryByRole("option", { name: "Cat" })).toBeInTheDocument();
		expect(screen.queryByRole("option", { name: "Dog" })).toBeInTheDocument();
		expect(screen.queryByRole("option", { name: "Horse" })).toBeInTheDocument();
	});

	it("should render the skeleton components if skeleton is truthy", async () => {
		await setup({ skeleton: true });

		expect(screen.queryByRole("option", { name: "Cat" })).not.toBeInTheDocument();
		expect(screen.queryByRole("option", { name: "Dog" })).not.toBeInTheDocument();
		expect(screen.queryByRole("option", { name: "Horse" })).not.toBeInTheDocument();
		expect(screen.queryByTestId(testIds.FORM_FIELD_SKELETON)).toBeInTheDocument();
	});

	// TODO Write more tests when the Chip component is vastly improved.
});
