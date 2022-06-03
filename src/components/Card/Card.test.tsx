import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import * as React from "react";

// Components
import Card from "./Card";
import AddIcon from "@mui/icons-material/Add";
import ContactsIcon from "@mui/icons-material/Contacts";

afterEach(cleanup);

const { getByText, getByTestId } = screen;
const topAction = jest.fn();
const bottomAction = jest.fn();

describe("Card component", () => {
	beforeEach(() => {
		render(
			<Card
				content={<h1>Content</h1>}
				title={<p>Title</p>}
				titleIcon={
					<ContactsIcon
						data-testid="contacts-icon-test"
						sx={{ color: "black", width: 16 }}
					/>
				}
				size="md"
				topAction={{
					color: "black",
					variant: "icon",
					onClick: () => topAction(),
					mIcon: AddIcon,
				}}
				bottomAction={{
					color: "teal",
					label: "Add a new task",
					variant: "text",
					onClick: () => bottomAction(),
					mIcon: AddIcon,
				}}
			/>
		);
	});

	it("should display the title, the icon title and the content", () => {
		expect(getByText("Content"));
		expect(getByText("Title"));
		expect(getByTestId("contacts-icon-test"));
	});

	it("should execute the bottom an top actions", () => {
		fireEvent.click(getByTestId("icon-button-test"));
		expect(topAction).toHaveBeenCalled();

		fireEvent.click(getByText("Add a new task"));
		expect(bottomAction).toHaveBeenCalled();
	});
});
