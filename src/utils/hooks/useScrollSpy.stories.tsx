import styled from "styled-components";
import * as React from "react";
import { ReactElement } from "react";
import SideNav from "@root/components/SideNav/SideNav";
import { SideNavArgs } from "@root/components/SideNav";
import useScrollSpy from "./useScrollSpy";
import { faker } from "@faker-js/faker"

export default {
	title: "Utils/Hooks/useScrollSpy"
};

const StyledMain = styled.div`
	display: flex;
	height: 80vh;
`

const StyledSection = styled.section`
	white-space: pre-wrap;
	font-family: sans-serif;
	font-size: 20px;
	line-height: 1.4em;

	&:not(:last-child){
		border-bottom: 1px solid #ddd;
		margin-bottom: 2rem;
		padding-bottom: 2rem;
	}
`

const StyledHeading = styled.h2`
	font-size: 24px;
	font-weight: bold;
	margin: 0 0 1rem;
`

const StyledScrollContainer = styled.div`
	overflow: auto;
	flex-grow: 1
	padding: 2rem;
`

function Section({ registerRef, title, content }: {registerRef: (ref: HTMLElement) => () => void, title: string, content: React.ReactNode}) {
	const ref = React.useRef<HTMLElement>();

	React.useEffect(() => {
		const unregister = registerRef(ref.current);
		return unregister;
	}, [])

	return (
		<StyledSection ref={ref}>
			<StyledHeading>{title}</StyledHeading>
			{content}
		</StyledSection>
	);
}

const sections = Array(20).fill(null).map((_, i) => ({
	title: `${i + 1}) ${faker.lorem.sentence()}`,
	content: faker.lorem.paragraphs({min: 1, max: 20})
}));

const sideNavItems = sections.map(({title}, index) => ({name: String(index), label: title}));

export const Playground = (): ReactElement => {
	const containerRef = React.useRef<HTMLElement>();
	const [sectionRefs, setSectionRefs] = React.useState<HTMLElement[]>([]);

	const registerRef = React.useCallback((ref) => {
		setSectionRefs(refs => [...refs, ref]);

		return () => setSectionRefs(refs => refs.filter(r => r !== ref));
	}, []);

	const {
		activeSection,
		setActiveSection,
	} = useScrollSpy({
		refs: sectionRefs,
		container: containerRef.current
	});

	const onNav = React.useCallback((args: SideNavArgs) => {
		setActiveSection(Number(args.item.name))
	}, [setActiveSection]);

	return (
		<StyledMain>
			<SideNav
				items={[sideNavItems]}
				active={String(activeSection)}
				onNav={onNav}
			/>
			<StyledScrollContainer ref={containerRef}>
				{sections.map((section, index) => (
					<Section key={index} registerRef={registerRef} {...section} />
				))}
			</StyledScrollContainer>
		</StyledMain>
	);
};
