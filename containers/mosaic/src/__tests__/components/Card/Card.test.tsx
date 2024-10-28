import Icon from "@mui/icons-material/Abc";
import { render, screen } from "@testing-library/react";
import React, { act } from "react";

import type { CardProps } from "@root/components/Card";

import testIds from "@root/utils/testIds";
import Card from "@root/components/Card";

const title = "My Card";
const content = [<>Card Content 1</>, <>Card Content 2</>];
const actions: CardProps["topActions"] = [{ color: "black", variant: "contained", label: "Button 1" }, { color: "black", variant: "contained", label: "Button 2" }];

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
});
