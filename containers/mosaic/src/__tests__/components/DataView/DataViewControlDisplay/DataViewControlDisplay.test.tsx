import { render, screen } from "@testing-library/react";
import React, { act } from "react";

import type { DataViewControlDisplayProps } from "@root/components/DataView/DataViewControlDisplay";

import DataViewControlDisplay from "@root/components/DataView/DataViewControlDisplay";
import userEvent from "@testing-library/user-event";
import { DataViewDisplayList, DataViewDisplayGrid } from "@root/components/DataView/DataViewDisplays";
import testIds from "@root/utils/testIds";

async function setup(props: Partial<DataViewControlDisplayProps> = {}) {
	const onDisplayChangeMock = props.onDisplayChange || vi.fn();

	const renderResult = await act(() => render(
		<DataViewControlDisplay
			display="list"
			displayOptions={[DataViewDisplayList, DataViewDisplayGrid]}
			onDisplayChange={onDisplayChangeMock}
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should render the data view display selection button", async () => {
		await setup();

		expect(screen.queryByTestId(testIds.DATA_VIEW_DISPLAY_CONTROL)).toBeInTheDocument();
	});
});
