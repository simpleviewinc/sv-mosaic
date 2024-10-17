import { render, screen, waitFor } from "@testing-library/react";
import React, { act } from "react";
import Icon from "@mui/icons-material/Abc";
import userEvent from "@testing-library/user-event";

import type { ButtonProps } from "@root/components/Button";

import Button from "@root/components/Button";

const color = "black";
const variant = "contained";
const label = "My Button";
const buttonColors: ButtonProps["color"][] = ["black", "blue", "gray", "lightBlue", "red", "teal", "white", "yellow"];
const buttonVariants: ButtonProps["variant"][] = ["contained", "icon", "input", "outlined", "text"];
const menuItems: ButtonProps["menuItems"] = [{ label: "Test 1", onClick: () => null }, { label: "Test 2", onClick: () => null }];
const notShownMenuItems: ButtonProps["menuItems"] = [{ label: "Test 1", onClick: () => null, show: false }];

async function setup(props: Partial<ButtonProps> = {}) {
	const renderResult = await act(() => render(
		<Button
			color={color}
			variant={variant}
			label={label}
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should render a standard button", async () => {
		await setup();

		expect(screen.queryByRole("button")).toBeInTheDocument();
	});

	it("should not render a button whose show property evaluates to false", async () => {
		await setup({ show: false });
		expect(screen.queryByRole("button")).not.toBeInTheDocument();
	});

	for (const color of buttonColors) {
		for (const variant of buttonVariants) {
			it(`should render buttons of the ${variant} variant in ${color}`, async () => {
				await setup({ color, variant, mIcon: Icon });
				expect(screen.queryByRole("button")).toBeInTheDocument();
			});
		}
	}

	it("should render a large contained button", async () => {
		await setup({ size: "large" });
		expect(screen.queryByRole("button")).toBeInTheDocument();
	});

	it("should render a large outlined button", async () => {
		await setup({ size: "large", variant: "outlined" });
		expect(screen.queryByRole("button")).toBeInTheDocument();
	});

	it("should render a small contained button", async () => {
		await setup({ size: "small" });
		expect(screen.queryByRole("button")).toBeInTheDocument();
	});

	it("should render a small outlined button", async () => {
		await setup({ size: "small", variant: "outlined" });
		expect(screen.queryByRole("button")).toBeInTheDocument();
	});

	it("should render a full width button", async () => {
		await setup({ fullWidth: true });
		expect(screen.queryByRole("button")).toBeInTheDocument();
	});

	it("should render a disabled button", async () => {
		await setup({ disabled: true });
		const button = screen.queryByRole("button");
		expect(button).toBeInTheDocument();
		expect(button).toBeDisabled();
	});

	it("should render a disabled icon button", async () => {
		await setup({ disabled: true, variant: "icon", mIcon: Icon });
		const button = screen.queryByRole("button");
		expect(button).toBeInTheDocument();
		expect(button).toBeDisabled();
	});

	it("should render an invisible button", async () => {
		await setup({ invisible: true });
		expect(screen.queryByRole("button")).toBeInTheDocument();
	});

	it("should render an icon button with icon positioned to the right", async () => {
		await setup({ mIcon: Icon, iconPosition: "right" });
		expect(screen.queryByRole("button")).toBeInTheDocument();
	});

	it("should render a button with menu items", async () => {
		const onClickMock = vi.fn();

		const { user } = await setup({
			menuItems,
			onClick: onClickMock,
		});

		const button = screen.queryByRole("button");
		await user.click(button);
		expect(onClickMock).toBeCalled();

		const menu = screen.queryByRole("menu");
		expect(menu).toBeInTheDocument();
		await user.keyboard("{Escape}");
		await waitFor(() => expect(menu).not.toBeInTheDocument());
	});

	it("should not render a button with menu items whose show property all evaluate to false", async () => {
		await setup({ menuItems: notShownMenuItems });

		const button = screen.queryByRole("button");
		expect(button).not.toBeInTheDocument();
	});

	it("should render a button with tooltip", async () => {
		const onMouseEnterMock = vi.fn();
		const onMouseLeaveMock = vi.fn();

		const { user } = await setup({
			tooltip: "My Tooltip",
			onMouseEnter: onMouseEnterMock,
			onMouseLeave: onMouseLeaveMock,
		});

		const button = screen.queryByRole("button");
		await user.hover(button);
		expect(onMouseEnterMock).toBeCalled();

		const tooltip = screen.queryByRole("tooltip");
		expect(tooltip).toBeInTheDocument();
		await user.unhover(button);
		expect(tooltip).not.toBeInTheDocument();
	});

	it("should render a button with popover on hover", async () => {
		const onMouseEnterMock = vi.fn();
		const onMouseLeaveMock = vi.fn();

		const { user } = await setup({
			popover: <>My Popover</>,
			popoverEvent: "onHover",
			onMouseEnter: onMouseEnterMock,
			onMouseLeave: onMouseLeaveMock,
		});

		const button = screen.queryByRole("button");
		await user.hover(button);
		expect(onMouseEnterMock).toBeCalled();

		const popover = screen.queryByText("My Popover");
		expect(popover).toBeInTheDocument();
		await user.unhover(button);
		expect(popover).not.toBeInTheDocument();
	});

	it("should render a button with popover on click", async () => {
		const { user } = await setup({ popover: <>My Popover</> });

		const button = screen.queryByRole("button");
		expect(button).toBeInTheDocument();
		await user.click(button);

		const popover = screen.queryByText("My Popover");
		expect(popover).toBeInTheDocument();
		await user.keyboard("{Escape}");
		expect(popover).not.toBeInTheDocument();
	});
});
