import * as React from 'react';
import { memo, useState, useRef, useCallback, useEffect, ReactElement } from 'react';
import {
	FormNavWrapper,
	FormNavRow,
	IconWrapper,
	LinksWrapper,
	NavItems,
} from './FormNav.styled';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

// Types
import { FormNavProps } from './FormNavTypes';

const FormNav = (props: FormNavProps): ReactElement => {
	const { sections } = props;
	const navRef = useRef(null);

	// State variables
	const [selectedTab, setSelectedTab] = useState(sections[0].title);
	const [scrollX, setscrollX] = useState(0);

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
	const handleNav = (direction) => {
		if (direction === 'left') {
			navRef ? (navRef.current.scrollLeft -= 200) : null;
		} else {
			navRef ? (navRef.current.scrollLeft += 200) : null;
		}
	};

	/**
   * Goes to the sections that is selected.
   * @param e
   * @param newActiveTab
   * @param sectionId
   */
	const handleClick = (e, newActiveTab, sectionId) => {
		e.preventDefault();
		setSelectedTab(sectionId);
		window.location.replace(`#${sectionId}`);
	};

	//IMPROVE RENDERING
	let sectionsTest;

	useEffect(() => {
		sectionsTest = document.getElementsByClassName("section") as unknown as HTMLElement[];
		window.addEventListener("scroll", navHighlighter);

		return () => {
			window.removeEventListener('scroll', navHighlighter);
		};
	}, []);

	const navHighlighter = useCallback(() => {
		const scrollY = window.pageYOffset;

		sectionsTest.forEach(current => {
			const sectionHeight = current.offsetHeight;
			const sectionTop = current.offsetTop - 350;
			const sectionId: any = current.getAttribute("id");
			if (
				scrollY > sectionTop &&
				scrollY <= sectionTop + sectionHeight
			) {
				setSelectedTab(sectionId);
			}
		});
	}, []);

	return (
		<FormNavWrapper>
			<FormNavRow scrollX={scrollX}>
				{scrollX !== 0 && (
					<IconWrapper>
						<ChevronLeftIcon onClick={() => handleNav('left')} />
					</IconWrapper>
				)}
				<NavItems ref={navRef} onScroll={scrollCheck}>
					{sections.map((section, idx) => (
						<LinksWrapper
							idx={section.title}
							selectedTabIdx={selectedTab}
							key={`${section.title}-${section.id}`}
							onClick={(e) => handleClick(e, idx, section.title)}
						>
							<a href={`#${section.title}`}>{section.title}</a>
						</LinksWrapper>
					))}
				</NavItems>
				<IconWrapper>
					<ChevronRightIcon onClick={() => handleNav('right')} />
				</IconWrapper>
			</FormNavRow>
		</FormNavWrapper>
	);
};

export default memo(FormNav);
