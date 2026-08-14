import * as React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Tooltip from "@root/components/Tooltip";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useTooltip } from "@root/components/Tooltip";

function TooltipTest({ text }: { text: string }) {
	const { anchorProps, tooltipProps } = useTooltip();

	return (
		<>
			<MoreVertIcon {...anchorProps} />
			<Tooltip {...tooltipProps}>{text}</Tooltip>
		</>
	);
}

/**
 * The anchor an SVG icon cannot be: a natively focusable element, which is
 * what a keyboard user actually reaches with Tab. SC 1.4.13 is measured here.
 */
function FocusableTooltipTest({ text }: { text: string }) {
	const { anchorProps, tooltipProps } = useTooltip();

	return (
		<>
			<button type="button" {...anchorProps}>Anchor</button>
			<button type="button">Next</button>
			<Tooltip {...tooltipProps}>{text}</Tooltip>
		</>
	);
}

beforeEach(() => {
	document.createRange = () => ({
		setStart: vi.fn(),
		setEnd: vi.fn(),
		// The types of the common Ancestor Container object in the following line
		// are ignored just for practical purposes to run the test.
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		commonAncestorContainer: {
			nodeName: "BODY",
			ownerDocument: document,
		},
	});
});

afterEach(cleanup);

describe("Tooltip component", () => {
	it("should render a regular tooltip", async () => {
		const tooltip = render(
			<TooltipTest text="Default tooltip test" />,
		);

		fireEvent.mouseOver(tooltip.getByTestId("MoreVertIcon"));

		expect(
			await tooltip.findByText("Default tooltip test"),
		).toBeInTheDocument();
	});

	it("should show the tooltip when the anchor receives keyboard focus", async () => {
		const user = userEvent.setup();
		const tooltip = render(
			<FocusableTooltipTest text="Focus tooltip test" />,
		);

		await user.tab();

		expect(tooltip.getByRole("button", { name: "Anchor" })).toHaveFocus();
		expect(
			await tooltip.findByText("Focus tooltip test"),
		).toBeInTheDocument();
	});

	it("should hide the tooltip when keyboard focus leaves the anchor", async () => {
		const user = userEvent.setup();
		const tooltip = render(
			<FocusableTooltipTest text="Blur tooltip test" />,
		);

		await user.tab();
		expect(await tooltip.findByText("Blur tooltip test")).toBeInTheDocument();

		await user.tab();

		expect(tooltip.getByRole("button", { name: "Next" })).toHaveFocus();
		expect(tooltip.queryByText("Blur tooltip test")).not.toBeInTheDocument();
	});

	it("should dismiss the tooltip on Escape without moving focus", async () => {
		const user = userEvent.setup();
		const tooltip = render(
			<FocusableTooltipTest text="Dismiss tooltip test" />,
		);

		await user.tab();
		expect(await tooltip.findByText("Dismiss tooltip test")).toBeInTheDocument();

		await user.keyboard("{Escape}");

		expect(tooltip.queryByText("Dismiss tooltip test")).not.toBeInTheDocument();
		// SC 1.4.13 Dismissible: the content goes away, the focus does not.
		expect(tooltip.getByRole("button", { name: "Anchor" })).toHaveFocus();
	});

	it("should reference the tooltip with aria-describedby only while it is open", async () => {
		const user = userEvent.setup();
		const tooltip = render(
			<FocusableTooltipTest text="Described tooltip test" />,
		);
		const anchor = tooltip.getByRole("button", { name: "Anchor" });

		// Closed: no reference at all, rather than one pointing at nothing.
		expect(anchor).not.toHaveAttribute("aria-describedby");

		await user.tab();

		const describedBy = anchor.getAttribute("aria-describedby");
		expect(describedBy).toBeTruthy();
		expect(document.getElementById(describedBy)).toHaveTextContent(
			"Described tooltip test",
		);
	});
});
