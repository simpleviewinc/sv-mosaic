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
];

const TopComponentExample = () => {
	return (
		<TopComponent
			description='Description'
			title='Form title'
			onCancel={cancelCallback}
			onSubmit={saveCallback}
			submitButtonAttrs={{
				label: "Save"
			}}
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

describe("TopComponent", () => {
	beforeEach(() => {
		render(<TopComponentExample />);
	});

	it("should display TopComponent content", () => {
		expect(screen.getByText("Description")).toBeTruthy();
		expect(screen.getByText("Form title")).toBeTruthy();
		expect(screen.getAllByText("Account Profile")).toBeTruthy();
		expect(screen.getByTestId("tooltip-test-id")).toBeTruthy();
		expect(screen.getByTestId("checkbox-test-id")).toBeTruthy();
	});

	it("should trigger cancel and save onClick callback", () => {
		const saveButton = screen.getByText("Save");
		const cancelButton = screen.getByText("Cancel");

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
				description='Description'
				title='Form title'
				onCancel={cancelCallback}
				onSubmit={saveCallback}
				sections={sections}
				showActive={true}
				view='DESKTOP'
			/>
		);

		const helpIcon = screen.queryByTestId("tooltip-test-id");

		expect(helpIcon).toBe(null);
	});

	it("should not display checkbox if show active is false", () => {
		render(
			<TopComponent
				description='Description'
				title='Form title'
				onCancel={cancelCallback}
				onSubmit={saveCallback}
				sections={sections}
				showActive={false}
				view='DESKTOP'
			/>
		);

		const activeCheckbox = screen.queryByTestId("checkbox-test-id");

		expect(activeCheckbox).toBe(null);
	});
});
