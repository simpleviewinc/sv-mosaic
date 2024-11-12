import { render, screen } from "@testing-library/react";
import React, { act } from "react";

import type { DataViewTdProps } from "@root/components/DataView/DataViewTd";

import DataViewTd from "@root/components/DataView/DataViewTd";
import userEvent from "@testing-library/user-event";
import testIds from "@root/utils/testIds";

async function setup(props: Partial<DataViewTdProps> = {}) {
	const renderResult = await act(() => render(
		<table>
			<tbody>
				<tr>
					<DataViewTd
						// eslint-disable-next-line react/no-children-prop
						children={<p>Test Content</p>}
						{...props}
					/>
				</tr>
			</tbody>
		</table>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should render the data view table cell", async () => {
		await setup();

		expect(screen.queryByRole("cell")).toBeInTheDocument();
		expect(screen.queryByText("Test Content")).toBeInTheDocument();
	});

	it("should render the table cell with the expandCell class when expandCell is provided", async () => {
		await setup({ expandCell: true });

		expect(screen.queryByRole("cell")).toHaveClass("expandCell");

		// TODO: Check style once we've migrated to emotion.
	});

	it("should render the table cell with the bold class when bold is provided", async () => {
		await setup({ style: { bold: true } });

		expect(screen.queryByRole("cell")).toHaveClass("bold");

		// TODO: Check style once we've migrated to emotion.
	});

	it("should render the table cell with the italic class when italic is provided", async () => {
		await setup({ style: { italic: true } });

		expect(screen.queryByRole("cell")).toHaveClass("italic");

		// TODO: Check style once we've migrated to emotion.
	});

	it("should render the table cell with the strikeThrough class when strikeThrough is provided", async () => {
		await setup({ style: { strikeThrough: true } });

		expect(screen.queryByRole("cell")).toHaveClass("strikeThrough");

		// TODO: Check style once we've migrated to emotion.
	});

	it("should render the table cell inner div with the noWrap class when noWrap is provided", async () => {
		await setup({ style: { noWrap: true } });

		expect(screen.queryByTestId(testIds.DATA_VIEW_TD_INNER)).toHaveClass("noWrap");

		// TODO: Check style once we've migrated to emotion.
	});

	it("should render the table cell inner div with the ellipsis class when ellipsis is provided", async () => {
		await setup({ style: { ellipsis: true } });

		expect(screen.queryByTestId(testIds.DATA_VIEW_TD_INNER)).toHaveClass("ellipsis");

		// TODO: Check style once we've migrated to emotion.
	});

	it("should render the table cell inner div with a title if ellipsis is provided and the content is a string", async () => {
		await setup({ style: { ellipsis: true }, children: "My Text" });

		expect(screen.queryByTestId(testIds.DATA_VIEW_TD_INNER)).toHaveAttribute("title", "My Text");
	});
});
