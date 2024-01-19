import { useCallback, useEffect, useRef, useState } from "react";
import { ScrollSpyProps, ScrollSpyResult } from "./ScrollSpyTypes";
import debounce from "lodash/debounce";
import { useAnimate } from "../useAnimate";
import clamp from "@root/utils/math/clamp";

const MIN_SCROLL_DURATION = 400;
const MAX_SCROLL_DURATION = 1500;

export default function useScrollSpy<E extends HTMLElement>({
	refs,
	container,
	threshold = 0.2
}: ScrollSpyProps<E>): ScrollSpyResult {
	const [scrollActiveSection, setScrollActiveSection] = useState<number>(0);
	const [userActiveSection, setUserActiveSection] = useState<number | null>(null);

	const isProgramScroll = useRef<boolean>(false);
	const clearIsProgramScrollDebounced = useRef(debounce(() => (isProgramScroll.current = false), 100));

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
	}, [refs])

	useEffect(() => {
		if (!container) {
			return;
		}

		const onMouseWheel = () => {
			animation.stop();
			isProgramScroll.current = false;
		}

		container.addEventListener("wheel", onMouseWheel, { passive: true });
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

		container.addEventListener("scroll", onScroll, { passive: true })

		return () => container.removeEventListener("scroll", onScroll);
	}, [container, getScrollActiveSection]);

	const animation = useAnimate()

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
		const sectionBox = ref.getBoundingClientRect();
		const containerBox = container.getBoundingClientRect();

		// There might be some extra offset if the first section
		// does not sit flush with the container, so calculate that
		// and take it away from the scroll target
		const firstBox = first.getBoundingClientRect();
		const firstOffset = firstBox.top + scrollTop - containerBox.top;

		const newScrollTop = sectionBox.top + scrollTop - containerBox.top - firstOffset;
		const scrollMax = container.scrollHeight - containerBox.height;

		const valueStart = scrollTop;
		const valueEnd = Math.min(newScrollTop, scrollMax);

		animation.start({
			fn: (n) => {
				container.scrollTo({
					top: n
				});
			},
			valueStart,
			valueEnd,
			duration: clamp(Math.abs(valueEnd - valueStart) * 0.75, {
				min: MIN_SCROLL_DURATION,
				max: MAX_SCROLL_DURATION
			})
		});
	}, [container, refs]);

	return {
		activeSection,
		setActiveSection
	}
}
