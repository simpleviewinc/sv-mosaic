import { render, screen } from "@testing-library/react";
import React, { act } from "react";

import type { DataViewTdProps } from "@root/components/DataView/DataViewTd";

import DataViewTd from "@root/components/DataView/DataViewTd";
import userEvent from "@testing-library/user-event";

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
	it("should render the data view table body", async () => {
		await setup();

		expect(screen.queryByRole("cell")).toBeInTheDocument();
		expect(screen.queryByText("Test Content")).toBeInTheDocument();
	});
});
