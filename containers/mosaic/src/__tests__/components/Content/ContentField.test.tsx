import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { act } from "react";

import type { ContentFieldProps } from "@root/components/Content";

import ContentField from "@root/components/Content/ContentField";
import testIds from "@root/utils/testIds";

const label = "My Content Field";
const name = "myContentField";
const value = "My Content Value";

async function setup(props: Partial<ContentFieldProps> = {}) {
	const renderResult = await act(() => render(
		<ContentField
			label={label}
			name={name}
			value={value}
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should render a content field component", async () => {
		await setup();

		expect(screen.queryByTestId(testIds.CONTENT_FIELD)).toBeInTheDocument();
		expect(screen.queryByText("My Content Value"));
	});

	it("should render a blank component if the value is undefined", async () => {
		await setup({ value: undefined });

		expect(screen.getByText("—")).toBeInTheDocument();
	});

	it("should render a blank component if the value is an empty string", async () => {
		await setup({ value: "" });

		expect(screen.getByText("—")).toBeInTheDocument();
	});

	it("should render a blank component if the value is an empty array", async () => {
		await setup({ value: [] });

		expect(screen.getByText("—")).toBeInTheDocument();
	});

	it("should apply transformations for a field if they have been provided", async () => {
		await setup({ transforms: [({ data }) => `${data} with appended data`] });

		expect(screen.getByText("My Content Value with appended data")).toBeInTheDocument();
	});

	it("should render the content tooltip if a tooltip has been provided", async () => {
		await setup({ tooltip: "My Tooltip" });

		expect(screen.queryByTestId(testIds.CONTENT_TOOLTIP_ICON)).toBeInTheDocument();
	});
});
