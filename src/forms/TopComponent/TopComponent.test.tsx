import { ButtonProps } from "@root/components/Button";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import * as React from "react";

// Components
import TopComponent from "./TopComponent";

afterEach(cleanup);

const cancelCallback = jest.fn();
const saveCallback = jest.fn();

const sections = [
	{
		title: "Account Profile",
		id: "section1",
	},
	{
		title: "Section 2",
		id: "section2",
	},
	{
		title: "Section 3",
		id: "section3",
	},
];

const oneSection = [
	{
		title: "Account Profile",
		id: "section1",
	},
];

const buttons: ButtonProps[] = [
	{
		label: "Save",
		onClick: saveCallback,
		color: "yellow",
		variant: "contained"
	},
	{
		label: "Cancel",
		onClick: cancelCallback,
		color: "gray",
		variant: "outlined"
	},
];

const TopComponentExample = () => {
	return (
		<TopComponent
			buttons={buttons}
			description='Description'
			title='Form title'
			onCancel={cancelCallback}
			sections={sections}
			showActive={true}
			tooltipInfo={"Tooltip info"}
			view='DESKTOP'
		>
			<div>
				<div id='section1'>
					<h1>Account Profile</h1>
					<p>
						Try to scroll this section and look at the navigation bar while
						scrolling! Try to scroll this section and look at the navigation bar
						while scrolling!
					</p>
				</div>
			</div>
		</TopComponent>
	);
};

const { getByText, getAllByText, getByTestId, queryByTestId, queryByText } = screen;

describe("TopComponent", () => {
	beforeEach(() => {
		render(<TopComponentExample />);
	});

	it("should display TopComponent content", () => {
		expect(getByText("Description")).toBeTruthy();
		expect(getByText("Form title")).toBeTruthy();
		expect(getAllByText("Account Profile")).toBeTruthy();
		expect(getAllByText("Section 2")).toBeTruthy();
		expect(getAllByText("Section 3")).toBeTruthy();
		expect(getByTestId("tooltip-test-id")).toBeTruthy();
		expect(getByTestId("checkbox-test-id")).toBeTruthy();
	});

	it("should trigger cancel and save onClick callback", () => {
		const saveButton = getByText("Save");
		const cancelButton = getByText("Cancel");

		fireEvent.click(saveButton);
		fireEvent.click(cancelButton);

		expect(cancelCallback).toHaveBeenCalled();
		expect(saveCallback).toHaveBeenCalled();
	});
});

describe("TopComponent elements that are conditionally rendered", () => {
	it("should not display help icon when tooltip info is not provided", () => {
		render(
			<TopComponent
				buttons={buttons}
				description='Description'
				title='Form title'
				onCancel={cancelCallback}
				sections={sections}
				showActive={true}
				view='DESKTOP'
			/>
		);

		const helpIcon = queryByTestId("tooltip-test-id");

		expect(helpIcon).toBe(null);
	});

	it("should not display checkbox if show active is false", () => {
		render(
			<TopComponent
				description='Description'
				title='Form title'
				onCancel={cancelCallback}
				sections={sections}
				showActive={false}
				view='DESKTOP'
			/>
		);

		const activeCheckbox = queryByTestId("checkbox-test-id");

		expect(activeCheckbox).toBe(null);
	});

	it("should display the provided buttons", () => {
		render(
			<TopComponent
				buttons={buttons}
				description='Description'
				title='Form title'
				onCancel={cancelCallback}
				sections={sections}
				showActive={false}
				view='DESKTOP'
			/>
		);

		expect(getByText("Cancel")).toBeDefined();
		expect(getByText("Save")).toBeDefined();
	});

	it("should not display the provided buttons", () => {
		render(
			<TopComponent
				description='Description'
				title='Form title'
				onCancel={null}
				sections={sections}
				showActive={false}
				view='DESKTOP'
			/>
		);

		expect(queryByText("Cancel")).toBe(null);
		expect(queryByText("Save")).toBe(null);
	});

	it("should not display tabs when sections array has only one element", () => {
		render(
			<TopComponent
				buttons={buttons}
				description='Description'
				title='Form title'
				onCancel={cancelCallback}
				sections={oneSection}
				showActive={true}
				view='DESKTOP'
			/>
		);

		expect(queryByText("Account Profile")).toBeNull();
	});
});
