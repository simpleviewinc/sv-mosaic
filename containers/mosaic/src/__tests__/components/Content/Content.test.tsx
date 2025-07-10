import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { act } from "react";

import type { ContentProps } from "@root/components/Content";

import Content from "@root/components/Content";
import testIds from "@root/utils/testIds";

const fields: ContentProps["fields"] = [{ name: "content1", label: "My Content 1" }, { name: "content2", label: "My Content 2" }];
const data: ContentProps["data"] = { content1: "My first content", content2: "My second content" };
const buttons: ContentProps["buttons"] = [{ intent: "secondary", variant: "contained", label: "Button 1" }, { intent: "secondary", variant: "contained", label: "Button 2" }];

async function setup(props: Partial<ContentProps> = {}) {
	const renderResult = await act(() => render(
		<Content
			fields={fields}
			data={data}
			title="My Content Title"
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should render a content component with title", async () => {
		await setup();

		expect(screen.queryByTestId(testIds.CONTENT)).toBeInTheDocument();
		expect(screen.queryByText("My Content Title")).toBeInTheDocument();
		expect(screen.queryByText("My Content 1")).toBeInTheDocument();
		expect(screen.queryByText("My Content 2")).toBeInTheDocument();
	});

	it("should render a content component using the card variant", async () => {
		await setup({ variant: "card" });

		expect(screen.queryByTestId(testIds.CONTENT)).toHaveClass("card-wrapper");
	});

	it("should throw an error if a field in the sections provided does not exist in the field definitions provided", async () => {
		vi.spyOn(console, "error").mockImplementation(() => null);

		await expect(() => setup({ sections: [["noExist"]] }))
			.rejects
			.toThrow("No field declared for field name 'noExist'. (section 0, row 0)");
	});

	it("should evaluate a fields show property if provided", async () => {
		await setup({
			fields: [
				fields[0],
				{
					...fields[1],
					show: false,
				},
			],
		});

		expect(screen.queryByText("My Content 1")).toBeInTheDocument();
		expect(screen.queryByText("My Content 2")).not.toBeInTheDocument();
	});

	it("should not render content if there is no data", async () => {
		await setup({ data: undefined });

		expect(screen.queryByTestId(testIds.CONTENT)).not.toBeInTheDocument();
	});

	it("should render a button row in the title if the button property is provided", async () => {
		await setup({ buttons });

		expect(screen.queryByTestId(testIds.BUTTON_ROW)).toBeInTheDocument();
		expect(screen.queryAllByRole("button")).toHaveLength(2);
	});

	it("should render an empty column if there are no fields within", async () => {
		await setup({ sections: [["content1", "content2", undefined]] });

		expect(screen.queryAllByTestId(testIds.CONTENT_FIELD)).toHaveLength(3);
	});

	it("should render sections using the newly introduced section definition", async () => {
		await setup({ sections: [["content1", "content2"]] });

		expect(screen.queryAllByTestId(testIds.CONTENT_FIELD)).toHaveLength(2);
	});
});
