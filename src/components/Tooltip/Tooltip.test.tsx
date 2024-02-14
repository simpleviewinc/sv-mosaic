import * as React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Tooltip from "./Tooltip";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import useTooltip from "./useTooltip";

function TooltipTest({ text }: { text: string }) {
	const { anchorProps, tooltipProps } = useTooltip();

	return (
		<>
			<MoreVertIcon {...anchorProps} />
			<Tooltip {...tooltipProps}>{text}</Tooltip>
		</>
	);
}

beforeEach(() => {
	document.createRange = () => ({
		setStart: jest.fn(),
		setEnd: jest.fn(),
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
});
