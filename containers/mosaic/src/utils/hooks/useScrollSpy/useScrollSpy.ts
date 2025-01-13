import { useCallback, useEffect, useRef, useState } from "react";

import type { ScrollSpyProps, ScrollSpyResult } from "./ScrollSpyTypes";

import useScrollTo from "../useScrollTo/useScrollTo";

export default function useScrollSpy<E extends HTMLElement>({
	refs,
	container: containerRef,
	threshold = 0.2,
}: ScrollSpyProps<E>): ScrollSpyResult {
	const scrollHandlerActive = useRef<boolean>(true);
	const { current: container } = containerRef;

	const { animation, scrollTo } = useScrollTo({
		container: containerRef,
		onStop: () => {
			console.log("ANIMATION STOP");
			scrollHandlerActive.current = true;
		},
	});

	const [activeSection, setActiveSection] = useState<number>(0);

	const getActiveSection = useCallback(() => {
		let newActiveSection = 0;

		if (!container || !refs) {
			return newActiveSection;
		}

		const containerBox = container.getBoundingClientRect();

		if (!container.scrollTop) {
			return 0;
		}

		if (Math.ceil(container.scrollTop + containerBox.height) >= container.scrollHeight) {
			return refs.length - 1;
		}

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
		if (!container) {
			return;
		}

		function onScroll() {
			console.log("SCROLL LISTENER");

			if (!scrollHandlerActive.current) {
				console.log("SCROLL LISTENER BAILED");
				return;
			}

			console.log("SCROLL LISTENER SET ACTIVE");
			setActiveSection(getActiveSection());
		}

		container.addEventListener("scroll", onScroll, { passive: true });
		return () => container.removeEventListener("scroll", onScroll);
	}, [container, getActiveSection]);

	const scrollToSection = useCallback((index: number) => {
		const [first] = refs;
		const ref = refs[index];

		if (!first || !ref || !container) {
			return;
		}

		scrollHandlerActive.current = false;

		setActiveSection(index);

		const containerBox = container.getBoundingClientRect();

		// There might be some extra offset if the first section
		// does not sit flush with the container, so calculate that
		// and take it away from the scroll target
		const firstBox = first.getBoundingClientRect();
		const firstOffset = firstBox.top + container.scrollTop - containerBox.top;

		scrollTo({
			target: ref,
			offset: firstOffset,
		});
	}, [container, refs, scrollTo]);

	return {
		animation,
		activeSection,
		scrollToSection,
	};
}
