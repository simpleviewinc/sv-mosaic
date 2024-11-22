import { render, screen } from "@testing-library/react";
import React, { act } from "react";

import type { ButtonRowProps } from "@root/components/ButtonRow";

import Button from "@root/components/Button";
import ButtonRow from "@root/components/ButtonRow";
import testIds from "@root/utils/testIds";

const buttonDefs: ButtonRowProps["buttons"] = [{ color: "black", variant: "contained", label: "Button 1" }, { color: "black", variant: "contained", label: "Button 2" }];
const buttonDefsNoLabels: ButtonRowProps["buttons"] = [{ color: "black", variant: "contained" }, { color: "black", variant: "contained" }];
const buttonChildren: ButtonRowProps["children"] = [<Button key={0} {...buttonDefs[0]} />, <Button key={1} {...buttonDefs[0]} />];

async function setup(props: Partial<ButtonRowProps> = {}) {
	const renderResult = await act(() => render(
		<ButtonRow {...props} />,
	));

	return {
		...renderResult,
	};
}

describe(__dirname, () => {
	it("should render a row of buttons by button definition", async () => {
		await setup({ buttons: buttonDefs });

		expect(screen.queryByTestId(testIds.BUTTON_ROW)).toBeInTheDocument();
		expect(screen.queryAllByRole("button")).toHaveLength(2);
	});

	it("should render a row of buttons by button children", async () => {
		await setup({ children: buttonChildren });

		expect(screen.queryByTestId(testIds.BUTTON_ROW)).toBeInTheDocument();
		expect(screen.queryAllByRole("button")).toHaveLength(2);
	});

	it("should render a row of buttons with a separator", async () => {
		await setup({ children: buttonChildren, separator: true });

		expect(screen.queryByTestId(testIds.BUTTON_ROW)).toBeInTheDocument();
		expect(screen.queryAllByRole("button")).toHaveLength(2);
	});

	it("should render a row of buttons with wrapping enabled", async () => {
		await setup({ children: buttonChildren, wrap: true });

		expect(screen.queryByTestId(testIds.BUTTON_ROW)).toBeInTheDocument();
		expect(screen.queryAllByRole("button")).toHaveLength(2);
	});

	it("should not render a row if a falsey children property is provided", async () => {
		await setup({ children: null });

		expect(screen.queryByTestId(testIds.BUTTON_ROW)).not.toBeInTheDocument();
	});

	it("should render a skeleton for each button if the skeleton property is used", async () => {
		await setup({ buttons: buttonDefs, skeleton: true });

		expect(screen.queryByTestId(testIds.BUTTON_ROW)).toBeInTheDocument();
		expect(screen.queryAllByTestId(testIds.BUTTON_SKELETON)).toHaveLength(2);
	});

	it("should render buttons by button definitions using their index as a key if no key can be inferred from their props", async () => {
		await setup({ buttons: buttonDefsNoLabels });

		expect(screen.queryByTestId(testIds.BUTTON_ROW)).toBeInTheDocument();
		expect(screen.queryAllByRole("button")).toHaveLength(2);
	});

	it("should render buttons by button children using their index as a key if no key can be inferred from their element", async () => {
		await setup({ children: [...buttonChildren, 0] });

		expect(screen.queryByTestId(testIds.BUTTON_ROW)).toBeInTheDocument();
		expect(screen.queryAllByRole("button")).toHaveLength(2);
	});

	it("should throw if both children and button props are provided", async () => {
		vi.spyOn(console, "error").mockImplementation(() => null);

		await expect(() => setup({ buttons: buttonDefs, children: buttonChildren }))
			.rejects
			.toThrow("ButtonRow cannot receive both children and a buttons prop");
	});
});
