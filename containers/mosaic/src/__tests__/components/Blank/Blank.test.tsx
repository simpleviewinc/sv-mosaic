import Blank from "@root/components/Blank";
import { render, screen } from "@testing-library/react";
import React, { act } from "react";

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
