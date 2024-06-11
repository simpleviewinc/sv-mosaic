import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import * as React from "react";

// Components
import Card from "@root/components/Card";
import AddIcon from "@mui/icons-material/Add";
import ContactsIcon from "@mui/icons-material/Contacts";

afterEach(cleanup);

const { getByText, getByTestId, queryByTestId } = screen;
const topAction = jest.fn();
const bottomAction = jest.fn();
const content = [
	<p key="first-element">First Element</p>,
	<p key="second-element">Second Element</p>,
	<div key="div-element">
		<p>Paragraph</p>
		<button>Button</button>
	</div>,
];

describe("Card component", () => {
	beforeEach(() => {
		render(
			<Card
				content={content}
				title="Title"
				titleIcon={ContactsIcon}
				topActions={[
					{
						color: "black",
						variant: "icon",
						onClick: () => topAction(),
						mIcon: AddIcon,
					},
				]}
				bottomActions={[
					{
						color: "teal",
						label: "Add a new task",
						variant: "text",
						onClick: () => bottomAction(),
						mIcon: AddIcon,
					},
				]}
			/>,
		);
	});

	it("should display the title with the icon title", () => {
		expect(getByText("Title"));
		expect(getByTestId("contacts-icon-test"));
	});

	it("should display the card content", () => {
		expect(getByText("First Element"));
		expect(getByText("Second Element"));
		expect(getByText("Paragraph"));
		expect(getByText("Button"));
	});

	it("should execute the bottom an top actions", () => {
		fireEvent.click(getByTestId("icon-button-test"));
		expect(topAction).toHaveBeenCalled();

		fireEvent.click(getByText("Add a new task"));
		expect(bottomAction).toHaveBeenCalled();
	});
});

describe("Card component without title icon", () => {
	it("should display the title with the icon title", () => {
		render(
			<Card
				content={content}
				title="Title"
				topActions={[
					{
						color: "black",
						variant: "icon",
						onClick: () => topAction(),
						mIcon: AddIcon,
					},
				]}
				bottomActions={[
					{
						color: "teal",
						label: "Add a new task",
						variant: "text",
						onClick: () => bottomAction(),
						mIcon: AddIcon,
					},
				]}
			/>,
		);

		expect(queryByTestId("contacts-icon-test")).toBe(null);
	});
});
