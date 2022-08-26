import * as React from "react";
import { useState, useRef, useEffect, ReactElement, memo } from "react";
import { debounce } from "lodash";
import {
	FormNavWrapper,
	FormNavRow,
	IconWrapper,
	LinksWrapper,
	NavItems,
} from "./FormNav.styled";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

// Types
import { FormNavProps } from "./FormNavTypes";

const FormNav = (props: FormNavProps): ReactElement => {
	const { sections, sectionsRefs, contentRef } = props;

	// State variables
	const [navWidth, setNavWidth] = useState(0);
	const [linksWidth, setLinksWidth] = useState(0);
	const [selectedTab, setSelectedTab] = useState(0);
	const [scrollX, setscrollX] = useState(0);
	const navRef = useRef(null);
	const linkRef = useRef<HTMLDivElement[]>([]);

	/**
	 * Computes the total width of all the links elements so that it 
	 * can be compared with the width of the nav in order to know 
	 * whether to show the arrow that scrolls horizontally to the right.
	 */
	useEffect(() => {
		let totalLinksWidth = 0;
		linkRef.current.forEach(current => {
			const linkWidth = current.getBoundingClientRect().width;
			// 40 corresponds to the extra right margin of each link.
			totalLinksWidth += linkWidth + 40;
		});

		setNavWidth(navRef.current.getBoundingClientRect().width)
		setLinksWidth(totalLinksWidth);
	}, []);

	/**
	 * Defines if the left scroll
	 * button should be shown.
	 */
	const scrollCheck = () => {
		setscrollX(navRef.current.scrollLeft);
	};

	/**
	 * Handles scrolling by incrementing or decrementing
	 * the scrollLeft property.
	 * @param direction : to scroll to;
	 */
	const handleNav = (direction: string) => {
		if (direction === "left") {
			navRef ? (navRef.current.scrollLeft -= 200) : null;
		} else {
			navRef ? (navRef.current.scrollLeft += 200) : null;
		}
	};

	/**
	 * Goes to the sections that is selected.
	 * @param e
	 * @param idx
	 * @param sectionId
	 */
	const handleClick = (e, idx: number) => {
		e.preventDefault();
		sectionsRefs[idx].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest"});
		setSelectedTab(idx);
	};

	useEffect(() => {
		const navHighlighter = () => {
			const scrollY = contentRef.current.scrollTop;
			if (sectionsRefs.length === 0) {
				return;
			}

			sectionsRefs?.forEach(current => {
				const currentSection = current as HTMLDivElement;
				const sectionHeight = currentSection?.offsetHeight;
				const sectionTop = currentSection?.offsetTop - 350;
				const sectionId = currentSection?.getAttribute("id");
				if (
					scrollY > sectionTop &&
					scrollY <= sectionTop + sectionHeight
				) {
					setSelectedTab(Number(sectionId));
				}
			});
		};

		const navHighlighterDebounced = debounce(navHighlighter, 200);

		contentRef?.current?.addEventListener("scroll", navHighlighterDebounced);

		return () => {
			contentRef?.current?.removeEventListener("scroll", navHighlighterDebounced);
			navHighlighterDebounced.cancel();
		};
	}, [sectionsRefs, contentRef]);

	return (
		<FormNavWrapper className="form-nav-wrapper">
			<FormNavRow scrollX={scrollX}>
				{scrollX !== 0 && (
					<IconWrapper>
						<ChevronLeftIcon onClick={() => handleNav("left")} />
					</IconWrapper>
				)}
				<NavItems ref={navRef} onScroll={scrollCheck}>
					{sections.map((section, idx) => (
						<LinksWrapper
							className={`${idx === selectedTab ? "highlight" : ""}`}
							key={`${section.title}-${section.id}`}
							onClick={(e) => handleClick(e, idx)}
							ref={el => linkRef.current[idx] = el} 
						>
							<a href={`#${section.title}`}>{section.title}</a>
						</LinksWrapper>
					)
					)}
				</NavItems>
				{linksWidth > navWidth && (
					<IconWrapper>
						<ChevronRightIcon onClick={() => handleNav("right")} />
					</IconWrapper>
				)}
			</FormNavRow>
		</FormNavWrapper>
	);
};

export default memo(FormNav);
