import { useCallback, useEffect, useRef, useState } from "react";
import { ScrollSpyProps, ScrollSpyResult } from "./ScrollSpyTypes";
import { debounce } from "lodash";

export default function useScrollSpy({
	refs,
	container,
	threshold = 0.2
}: ScrollSpyProps): ScrollSpyResult {
	const [scrollActiveSection, setScrollActiveSection] = useState<number>(0);
	const [userActiveSection, setUserActiveSection] = useState<number | null>(null);
	const activeSection = userActiveSection !== null ? userActiveSection : scrollActiveSection;
	const isProgramScroll = useRef<boolean>(false);
	const clearIsProgramScrollDebounced = useRef(debounce(() => (isProgramScroll.current = false), 100));

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
	}, [container, refs]);

	useEffect(() => {
		const section = getScrollActiveSection();
		setScrollActiveSection(section);
	}, [refs])

	useEffect(() => {
		if (!container) {
			return;
		}

		const onMouseWheel = () => {
			isProgramScroll.current = false;
		}

		container.addEventListener("wheel", onMouseWheel);
		return () => container.removeEventListener("wheel", onMouseWheel);
	}, [container]);

	useEffect(() => {
		if (!container) {
			return;
		}

		const onScroll = () => {
			clearIsProgramScrollDebounced.current();

			if (!isProgramScroll.current) {
				setUserActiveSection(null)
			}

			const section = getScrollActiveSection();
			setScrollActiveSection(section);
		}

		container.addEventListener("scroll", onScroll, {passive: true})

		return () => container.removeEventListener("scroll", onScroll);
	}, [container, getScrollActiveSection]);

	const setActiveSection = useCallback((refIndex: number) => {
		const ref = refs[refIndex];

		if (!ref) {
			return;
		}

		setUserActiveSection(refIndex);

		isProgramScroll.current = true;
		ref.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	}, [refs]);

	return {
		activeSection,
		setActiveSection
	}
}
