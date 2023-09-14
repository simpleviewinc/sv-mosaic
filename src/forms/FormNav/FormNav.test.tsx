import { Views } from "@root/theme/theme";
import { ViewProvider } from "@root/utils/formViewUtils";
import { render, screen, cleanup } from "@testing-library/react";
import * as React from "react";
import { ReactElement, useState } from "react";
import FormNav from "./FormNav";
import { useScrollSpy } from "@root/utils/hooks";

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

const SectionWithRefRegister = ({ children, registerRef }: React.PropsWithChildren<{registerRef: (ref: HTMLElement) => () => void}>): ReactElement => {
	const ref = React.useRef();

	React.useEffect(() => {
		const unregister = registerRef(ref.current);
		return unregister;
	}, [ref.current])

	return <section ref={ref}>{children}</section>
}

const FormNavExample = (): ReactElement => {
	const [sectionRefs, setSectionRefs] = useState<HTMLElement[]>([]);

	const {
		activeSection,
		setActiveSection,
	} = useScrollSpy({
		refs: sectionRefs,
		container: window.document.documentElement
	});

	const registerRef: ((ref: HTMLElement) => () => void) = React.useCallback((ref) => {
		setSectionRefs(refs => [...refs, ref]);

		return () => {
			setSectionRefs(refs => refs.filter(r => r !== ref));
		}
	}, []);

	return (
		<>
			<FormNav sections={sections} onSectionSelect={setActiveSection} activeSection={activeSection} />
			{sections.map((section, i) => (
				<SectionWithRefRegister key={i} registerRef={registerRef}>
					{section.id}
				</SectionWithRefRegister>
			))}
		</>
	);
};

describe("FormNav component", () => {
	beforeEach(() => {
		render(
			<ViewProvider value={Views.desktop}>
				<FormNavExample />
			</ViewProvider>);
	});

	it("should render FormNav with the list of sections", () => {
		expect(screen.getByText("Account Profile")).toBeTruthy();
		expect(screen.getByText("Account Information")).toBeTruthy();
		expect(screen.getByText("Contact Information")).toBeTruthy();
	});
});

describe("FormNav component recieves a section", () => {
	it("should not render FormNav with the section", () => {
		render(
			<ViewProvider value={Views.desktop}>
				<FormNav sections={oneSection} />
			</ViewProvider>
		);

		expect(screen.queryByText("Account Profile")).toBeNull();
	});
})
