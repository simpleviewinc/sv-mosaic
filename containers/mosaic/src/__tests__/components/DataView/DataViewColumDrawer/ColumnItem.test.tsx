import { render } from "@testing-library/react";
import React, { act } from "react";

import { ColumnItem } from "@root/components/DataView/DataViewColumDrawer/DataViewColumnDrawer.styled";

async function setup() {
	const renderResult = await act(() => render(
		<ColumnItem $isDragging />,
	));

	return {
		...renderResult,
	};
}

describe(__dirname, () => {
	it("should render with the correct styles when being dragged", async () => {
		await setup();

		// TODO: assert correct styles when we've migrated to emotion
	});
});
