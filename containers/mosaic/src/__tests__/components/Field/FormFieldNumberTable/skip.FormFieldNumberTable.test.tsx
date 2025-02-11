import { render, screen } from "@testing-library/react";
import React, { act } from "react";
import userEvent from "@testing-library/user-event";

import type { NumberTableData, NumberTableInputSettings, Col, Row } from "@root/components/Field/FormFieldNumberTable/FormFieldNumberTableTypes";
import type { FieldDefBase, MosaicFieldProps } from "@root/components";

import FormFieldTestType from "../FormFieldTestType";
import FormFieldNumberTable from "@root/components/Field/FormFieldNumberTable/FormFieldNumberTable";

const defaultColumns: Col[] = [{ name: "london", title: "London" }, { name: "paris", title: "Paris" }, { name: "tokyo", title: "Tokyo" }];
const defaultRows: Row[] = [{ name: "adults", title: "Adults" }, { name: "children", title: "Children" }];

const defaultInputSettings: NumberTableInputSettings = {
	columns: defaultColumns,
	rows: defaultRows,
};

const defaultFieldDef: FieldDefBase<"numberTable", NumberTableInputSettings> = {
	name: "numberTable",
	type: "numberTable",
	inputSettings: defaultInputSettings,
};

async function setup(
	props: Partial<MosaicFieldProps<"numberTable", NumberTableInputSettings, NumberTableData>> = {},
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
			Component={FormFieldNumberTable}
			fieldDef={defaultFieldDef}
			onChange={onChangeMock}
			stateful={stateful}
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(userEventOptions),
	};
}

describe(__dirname, () => {
	it("should render the number table form field", async () => {
		await setup();

		expect(screen.queryByText("London")).toBeInTheDocument();
		expect(screen.queryByText("Paris")).toBeInTheDocument();
		expect(screen.queryByText("Tokyo")).toBeInTheDocument();
		expect(screen.queryByText("Adults")).toBeInTheDocument();
		expect(screen.queryByText("Children")).toBeInTheDocument();
		expect(screen.queryAllByText("Total")).toHaveLength(2);
		expect(screen.queryAllByRole("textbox")).toHaveLength(6);
		expect(screen.queryAllByText("0")).toHaveLength(6);
	});

	/**
	 * TODO more tests here when the number field has been refactored
	 * @link https://simpleviewtools.atlassian.net/browse/MOS-1572
	 */
});
