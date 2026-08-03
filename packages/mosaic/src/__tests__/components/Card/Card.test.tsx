import Icon from "@mui/icons-material/Abc";
import { render, screen } from "@testing-library/react";
import React, { act } from "react";

import type { CardProps } from "@root/components/Card";

import testIds from "@root/utils/testIds";
import Card from "@root/components/Card";

const title = "My Card";
const content = [<>Card Content 1</>, <>Card Content 2</>];
const actions: CardProps["topActions"] = [{ intent: "secondary", variant: "contained", label: "Button 1" }, { intent: "secondary", variant: "contained", label: "Button 2" }];

async function setup(props: Partial<CardProps> = {}) {
	const renderResult = await act(() => render(
		<Card
			title={title}
			content={content}
			{...props}
		/>,
	));

	return {
		...renderResult,
	};
}

describe(__dirname, () => {
	it("should render a card", async () => {
		await setup();

		expect(screen.queryByText("My Card")).toBeInTheDocument();
		expect(screen.queryByText("Card Content 1")).toBeInTheDocument();
		expect(screen.queryByText("Card Content 2")).toBeInTheDocument();
	});

	it("should render a card with an icon in the title", async () => {
		await setup({ titleIcon: Icon });

		expect(screen.queryByTestId(testIds.CARD_TITLE_ICON)).toBeInTheDocument();
	});

	it("should render top actions as a button row", async () => {
		await setup ({ topActions: actions });

		expect(screen.queryByTestId(testIds.BUTTON_ROW)).toBeInTheDocument();
		expect(screen.queryAllByRole("button")).toHaveLength(2);
	});

	it("should render bottom actions as a button row", async () => {
		await setup ({ bottomActions: actions });

		expect(screen.queryByTestId(testIds.BUTTON_ROW)).toBeInTheDocument();
		expect(screen.queryAllByRole("button")).toHaveLength(2);
	});

	it("should display the count alongside the title if more than 0", async () => {
		await setup({ count: 1 });

		const heading = screen.queryByTestId(testIds.CARD_HEADING);
		expect(heading).toBeInTheDocument();
		expect(heading).toHaveTextContent("My Card1");
	});

	it("should display the count alongside the title if it's zero and zero counts should be displayed", async () => {
		await setup({ count: 0, showZeroCount: true });

		const heading = screen.queryByTestId(testIds.CARD_HEADING);
		expect(heading).toBeInTheDocument();
		expect(heading).toHaveTextContent("My Card0");
	});

	it("should not display the count alongside the title if it's zero and zero counts should not be displayed", async () => {
		await setup({ count: 0, showZeroCount: false });

		const heading = screen.queryByTestId(testIds.CARD_HEADING);
		expect(heading).toBeInTheDocument();
		expect(heading).toHaveTextContent("My Card");
	});

	it("should not display the count if it's not provided", async () => {
		await setup();

		const heading = screen.queryByTestId(testIds.CARD_HEADING);
		expect(heading).toBeInTheDocument();
		expect(heading).toHaveTextContent("My Card");
	});
});
