import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import * as React from "react";
import FormNav from "./FormNav";

afterEach(cleanup);

const sections = [
	{
		title: "Account Profile",
		id: "section1",
	},
	{
		title: "Account Information",
		id: "section2",
	},
	{
		title: "Contact Information",
		id: "section3",
	},
];

describe("FormNav component", () => {
	beforeEach(() => {
		render(<FormNav sections={sections} />);
	});

	it("should render FormNav with the list of sections", () => {
		expect(screen.getByText("Account Profile")).toBeTruthy();
		expect(screen.getByText("Account Information")).toBeTruthy();
		expect(screen.getByText("Contact Information")).toBeTruthy();
	});

	it("should navigate to the selected section", () => {
		const url = "http://dummy.com";
		const sectionLink = screen.getByText("Account Information");
		global.window = Object.create(window);
		Object.defineProperty(window, "location", {
			value: {
				href: url,
			},
			writable: true,
		});
		window.location.replace = jest.fn();

		fireEvent.click(sectionLink);

		expect(window.location.replace).toHaveBeenCalled();
	});
});
