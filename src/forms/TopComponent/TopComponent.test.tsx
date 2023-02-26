import { ButtonProps } from "@root/components/Button";
import { Views } from "@root/theme/theme";
import { ViewProvider } from "@root/utils/formViewUtils";
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
		<ViewProvider value={Views.desktop}>
			<TopComponent
				buttons={buttons}
				description='Description'
				title='Form title'
				onCancel={cancelCallback}
				sections={sections}
				showActive={true}
				tooltipInfo={"Tooltip info"}
				view={Views.desktop}
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
		</ViewProvider>
	);
};

const { getByText, getAllByText, getByTestId, queryByTestId, queryByText } = screen;
const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
	observe: () => null,
	unobserve: () => null,
	disconnect: () => null
});
window.IntersectionObserver = mockIntersectionObserver;

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
			<ViewProvider value={Views.desktop}>
				<TopComponent
					buttons={buttons}
					description='Description'
					title='Form title'
					onCancel={cancelCallback}
					sections={sections}
					showActive={true}
					view={Views.desktop}
				/>
			</ViewProvider>
		);

		const helpIcon = queryByTestId("tooltip-test-id");

		expect(helpIcon).toBe(null);
	});

	it("should not display checkbox if show active is false", () => {
		render(
			<ViewProvider value={Views.desktop}>
				<TopComponent
					description='Description'
					title='Form title'
					onCancel={cancelCallback}
					sections={sections}
					showActive={false}
					view={Views.desktop}
				/>
			</ViewProvider>
		);

		const activeCheckbox = queryByTestId("checkbox-test-id");

		expect(activeCheckbox).toBe(null);
	});

	it("should display the provided buttons", () => {
		render(
			<ViewProvider value={Views.desktop}>
				<TopComponent
					buttons={buttons}
					description='Description'
					title='Form title'
					onCancel={cancelCallback}
					sections={sections}
					showActive={false}
					view={Views.desktop}
				/>
			</ViewProvider>
		);

		expect(getByText("Cancel")).toBeDefined();
		expect(getByText("Save")).toBeDefined();
	});

	it("should not display the provided buttons", () => {
		render(
			<ViewProvider value={Views.desktop}>
				<TopComponent
					description='Description'
					title='Form title'
					onCancel={null}
					sections={sections}
					showActive={false}
					view={Views.desktop}
				/>
			</ViewProvider>
		);

		expect(queryByText("Cancel")).toBe(null);
		expect(queryByText("Save")).toBe(null);
	});

	it("should not display tabs when sections array has only one element", () => {
		render(
			<ViewProvider value={Views.desktop}>
				<TopComponent
					buttons={buttons}
					description='Description'
					title='Form title'
					onCancel={cancelCallback}
					sections={oneSection}
					showActive={true}
					view={Views.desktop}
				/>
			</ViewProvider>
		);

		expect(queryByText("Account Profile")).toBeNull();
	});
});
