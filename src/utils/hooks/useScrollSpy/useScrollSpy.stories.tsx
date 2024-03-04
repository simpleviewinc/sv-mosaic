import styled from "styled-components";
import * as React from "react";
import { ReactElement } from "react";
import SideNav from "@root/components/SideNav/SideNav";
import { SideNavArgs } from "@root/components/SideNav";
import useScrollSpy from "./useScrollSpy";
import { useStoryBookCssReset } from "../../reactTools";
import { withKnobs, number, boolean } from "@storybook/addon-knobs";

export default {
	title: "Utils/Hooks/useScrollSpy",
	decorators: [withKnobs],
};

const StyledMain = styled.div`
	display: flex;
	height: 100vh;
`;

const StyledSection = styled.section`
	background-color: #f6f6f6;
	white-space: pre-wrap;
	font-family: sans-serif;
	font-size: 20px;
	line-height: 1.4em;
	padding: 2rem;

	&:not(:last-child){
		margin-bottom: 2rem;
		padding-bottom: 2rem;
	}
`;

const StyledHeading = styled.h2`
	font-size: 24px;
	font-weight: bold;
	margin: 0 0 1rem;
`;

const StyledPrimary = styled.div<{ $height: number }>`
	border-bottom: 2px solid rgb(240,242,245);
	display: flex;
	flex-direction: column;
	height: ${({ $height }) => $height}px;
	position: relative;
`;

const StyledSections = styled.div`
	overflow: auto;
	flex: none;
	padding: 2rem;
	position: relative;
	height: 100%;
`;

const StyledThreshold = styled.div<{ $threshold: number }>`
	background-color: rgba(211, 52, 52, 0.24);
	border-bottom: 2px dashed rgb(223, 43, 43);
	left: 0;
	height: ${({ $threshold }) => $threshold}%;
	width: 100%;
	top: 0;
	position: absolute;
	pointer-events: none;
`;

function Section({ registerRef, title, content }: { registerRef: (ref: HTMLElement) => () => void; title: string; content: React.ReactNode }) {
	const ref = React.useRef<HTMLElement>();

	React.useEffect(() => {
		const unregister = registerRef(ref.current);
		return unregister;
	}, []);

	return (
		<StyledSection ref={ref}>
			<StyledHeading>{title}</StyledHeading>
			{content}
		</StyledSection>
	);
}

const randomSections = Array(100).fill(null).map((_, i) => ({
	title: `Section ${i + 1}`,
	content: <div style={{ height: Math.floor(Math.random() * (600 - 50 + 1) + 50) }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo faucibus accumsan. Fusce placerat augue orci, ac feugiat sem mollis quis. Aenean ultrices sem et commodo faucibus. Nulla id laoreet sem, id tempus felis. Etiam vulputate ullamcorper nunc, eget rutrum sem pretium ac. Sed egestas risus ut semper dignissim. Aenean feugiat sit amet ex vitae scelerisque. Etiam viverra sapien eu tellus lobortis, non pellentesque felis aliquet.</div>,
}));

export const Playground = (): ReactElement => {
	const numberOfSections = number("Number of sections", 100, { max: 100, min: 0 });
	const viewportHeight = number("Viewport height", 600);
	const smallLastSection = boolean("Render a final section that doesn't take enough of the screen to meet the threshold at which it'd be considered active", false);
	const showThreshold = boolean("Show threshold", false);
	const threshold = number("Threshold (% of viewport height)", 20, { max: 1, min: 0 });

	const sections = randomSections.slice(0, numberOfSections);

	if (smallLastSection) {
		sections.push({
			title: "Final section",
			content: <div style={{ height: 30 }}>Small section</div>,
		});
	}

	useStoryBookCssReset();

	const sideNavItems = sections.map(({ title }, index) => ({ name: String(index), label: title }));

	// Setup scroll spy DOM element references
	const containerRef = React.useRef<HTMLDivElement>();
	const [sectionRefs, setSectionRefs] = React.useState<HTMLElement[]>([]);

	const registerRef = React.useCallback((ref) => {
		setSectionRefs(refs => [...refs, ref]);

		return () => setSectionRefs(refs => refs.filter(r => r !== ref));
	}, []);

	// useScrollSpy usage
	const {
		activeSection,
		setActiveSection,
	} = useScrollSpy<HTMLDivElement>({
		refs: sectionRefs,
		container: containerRef,
		threshold: threshold / 100,
	});

	const onNav = React.useCallback((args: SideNavArgs) => {
		setActiveSection(Number(args.item.name));
	}, [setActiveSection]);

	return (
		<StyledMain>
			<SideNav
				items={[sideNavItems]}
				active={String(activeSection)}
				onNav={onNav}
			/>
			<StyledPrimary $height={viewportHeight}>
				<StyledSections ref={containerRef}>
					{sections.map((section, index) => (
						<Section key={index} registerRef={registerRef} {...section} />
					))}
				</StyledSections>
				{showThreshold && (
					<StyledThreshold $threshold={threshold} />
				)}
			</StyledPrimary>
		</StyledMain>
	);
};
