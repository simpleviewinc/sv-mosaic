import { ViewProvider } from "@root/utils/formViewUtils";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import * as React from "react";
import { ReactElement, useEffect, useRef, useState } from "react";
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

const oneSection = [
	{
		title: "Account Profile",
		id: "section1",
	},
];

const FormNavExample = (): ReactElement => {
	const sectionsRef = useRef([]);
	const [sectionsRefs, setSectionsRefs] = useState<HTMLDivElement[] | []>([]);

	useEffect(() => {
		setSectionsRefs(sectionsRef.current);
	}, []);

	return (
		<>
			<FormNav  sections={sections} sectionsRefs={sectionsRefs}/>
			{sections.map((section, i) => (
				<section key={i} ref={el => sectionsRef.current[i] = el} >
					{section.id}
				</section>
			))}
		</>
	);
};

const scrollIntoViewMock = jest.fn();
const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
	observe: () => null,
	unobserve: () => null,
	disconnect: () => null
});
window.IntersectionObserver = mockIntersectionObserver;

describe("FormNav component", () => {
	beforeEach(() => {
		render(
			<ViewProvider value="DESKTOP">
				<FormNavExample />
			</ViewProvider>);
	});

	it("should render FormNav with the list of sections", () => {
		expect(screen.getByText("Account Profile")).toBeTruthy();
		expect(screen.getByText("Account Information")).toBeTruthy();
		expect(screen.getByText("Contact Information")).toBeTruthy();
	});

	it("should navigate to the selected section", () => {
		window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

		fireEvent.click(screen.getByText("Account Profile"));

		expect(scrollIntoViewMock).toHaveBeenCalled();
	});
});

describe("FormNav component recieves a section", () => {
	it("should not render FormNav with the section", () => {
		render(
			<ViewProvider value="DESKTOP">
				<FormNav sections={oneSection} />
			</ViewProvider>
		);

		expect(screen.queryByText("Account Profile")).toBeNull();
	});
})
