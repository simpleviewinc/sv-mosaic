import * as React from "react";
import { useState, useRef, useEffect, ReactElement, memo, MouseEvent } from "react";
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
import { useView } from "@root/utils/formViewUtils";

const FormNav = (props: FormNavProps): ReactElement => {
	const { sections, sectionsRefs } = props;
	const view = useView();

	if (sections.length <= 1) return (<></>)

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
	const handleClick = (e: MouseEvent, idx: number) => {
		e.preventDefault();
		sectionsRefs[idx].scrollIntoView({ behavior: "smooth", block: "start" });
	};

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				const sectionId = entry?.target.getAttribute("id");

				if (entry.isIntersecting) {
					setSelectedTab(Number(sectionId));
				}
			})
		}, { threshold: 0.5, rootMargin: "-20px 0px -20%", root: props.formContentRef?.current });

		sectionsRefs?.forEach(section => {
			observer.observe(section);
		})

		return () => observer.disconnect();
	}, [sectionsRefs])

	return (
		<FormNavWrapper className={`form-nav-wrapper ${view}`}>
			<FormNavRow view={view} className={`${view} test`} scrollX={scrollX}>
				{scrollX !== 0 && (
					<IconWrapper>
						<ChevronLeftIcon onClick={() => handleNav("left")} />
					</IconWrapper>
				)}
				<NavItems className={`${view}`} ref={navRef} onScroll={scrollCheck}>
					{sections.map((section, idx) => (
						<LinksWrapper
							className={`${view} ${idx === selectedTab ? "highlight" : ""}`}
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
