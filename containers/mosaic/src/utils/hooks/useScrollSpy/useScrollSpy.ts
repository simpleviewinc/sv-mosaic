import { useCallback, useEffect, useRef, useState } from "react";
import { ScrollSpyProps, ScrollSpyResult } from "./ScrollSpyTypes";
import debounce from "lodash/debounce";
import useScrollTo from "../useScrollTo/useScrollTo";

export default function useScrollSpy<E extends HTMLElement>({
	refs,
	container: containerRef,
	threshold = 0.2,
}: ScrollSpyProps<E>): ScrollSpyResult {
	const isProgramScroll = useRef<boolean>(false);
	const clearIsProgramScrollDebounced = useRef(debounce(() => (isProgramScroll.current = false), 100));
	const { current: container } = containerRef;

	const { animation, scrollTo } = useScrollTo({
		container: containerRef,
		onStop: () => {
			isProgramScroll.current = false;
		},
	});

	const [scrollActiveSection, setScrollActiveSection] = useState<number>(0);
	const [userActiveSection, setUserActiveSection] = useState<number | null>(null);

	const activeSection = userActiveSection !== null ? userActiveSection : scrollActiveSection;

	const getScrollActiveSection = useCallback(() => {
		let newActiveSection = 0;

		if (!container || !refs) {
			return newActiveSection;
		}

		const containerBox = container.getBoundingClientRect();

		for (let i = 0; i < refs.length; i++) {
			const section = refs[i];
			const box = section.getBoundingClientRect();

			if (box.top > containerBox.top + (containerBox.height * threshold)) {
				break;
			}

			newActiveSection = i;

		}

		return newActiveSection;
	}, [container, refs, threshold]);

	useEffect(() => {
		const section = getScrollActiveSection();
		setScrollActiveSection(section);
	}, [getScrollActiveSection, refs]);

	useEffect(() => {
		if (!container) {
			return;
		}

		const onScroll = () => {
			clearIsProgramScrollDebounced.current();

			if (!isProgramScroll.current) {
				setUserActiveSection(null);
			}

			const section = getScrollActiveSection();
			setScrollActiveSection(section);
		};

		container.addEventListener("scroll", onScroll, { passive: true });

		return () => container.removeEventListener("scroll", onScroll);
	}, [container, getScrollActiveSection]);

	const setActiveSection = useCallback((refIndex: number) => {
		const [first] = refs;
		const ref = refs[refIndex];

		if (!first || !ref || !container) {
			return;
		}

		setUserActiveSection(refIndex);

		isProgramScroll.current = true;

		const { scrollTop } = container;

		// Calculate the start and end points of the scroll animation
		// based on the sections position relative to the container
		const containerBox = container.getBoundingClientRect();

		// There might be some extra offset if the first section
		// does not sit flush with the container, so calculate that
		// and take it away from the scroll target
		const firstBox = first.getBoundingClientRect();
		const firstOffset = firstBox.top + scrollTop - containerBox.top;

		scrollTo({
			target: ref,
			offset: firstOffset,
		});
	}, [container, refs, scrollTo]);

	return {
		animation,
		activeSection,
		setActiveSection,
	};
}
