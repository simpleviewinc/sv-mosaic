import { render, screen } from "@testing-library/react";
import React, { act } from "react";
import userEvent from "@testing-library/user-event";

import type { FieldDefRawData, RawInputSettings } from "@root/components/Field/FormFieldRaw/FormFieldRawTypes";
import type { FieldDefBase, MosaicFieldProps } from "@root/components";

import FormFieldTestType from "../FormFieldTestType";
import FormFieldRaw from "@root/components/Field/FormFieldRaw/FormFieldRaw";

function RawFieldContent() {
	return <div data-testid="testRawContent">Raw Content</div>;
}

const defaultFieldDef: FieldDefBase<"raw", RawInputSettings> = {
	name: "raw",
	type: "raw",
};

async function setup(
	props: Partial<MosaicFieldProps<"raw", RawInputSettings, FieldDefRawData>> = {},
	{
		stateful = false,
		userEventOptions,
	}: {
		stateful?: boolean;
		userEventOptions?: Parameters<typeof userEvent.setup>[0];
	} = {},
) {
	const onChangeMock = props.onChange || vi.fn();

	const renderResult = await act(async () => render(
		<FormFieldTestType
			Component={FormFieldRaw}
			fieldDef={defaultFieldDef}
			onChange={onChangeMock}
			stateful={stateful}
			value={<RawFieldContent />}
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(userEventOptions),
	};
}

describe(__dirname, () => {
	it("should render the raw form field content", async () => {
		await setup();

		const rawComponent = screen.queryByTestId("testRawContent");
		expect(rawComponent).toBeInTheDocument();
		expect(rawComponent).toHaveTextContent("Raw Content");
	});
});
