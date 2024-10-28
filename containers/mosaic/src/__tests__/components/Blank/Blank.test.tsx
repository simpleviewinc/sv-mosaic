import { render, screen } from "@testing-library/react";
import React, { act } from "react";

import Blank from "@root/components/Blank";

async function setup() {
	const renderResult = await act(() => render(
		<Blank />,
	));

	return {
		...renderResult,
	};
}

describe(__dirname, () => {
	it("should display a long hyphen", async () => {
		await setup();

		expect(screen.getByText("—")).toBeInTheDocument();
	});
});
