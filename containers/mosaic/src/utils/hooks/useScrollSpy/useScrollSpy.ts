import { useCallback, useEffect, useRef, useState } from "react";

import type { ScrollSpyProps, ScrollSpyResult } from "./ScrollSpyTypes";

const scrollingKeys = [
	"ArrowUp",
	"ArrowDown",
	"PageUp",
	"PageDown",
	"Home",
	"End",
	" ",
];

export default function useScrollSpy({
	container,
	intersectionRatioThreshold = 0.1,
}: ScrollSpyProps): ScrollSpyResult {
	const sectionRefs = useRef<Map<Element, boolean>>(new Map());

	const [implicitSection, setImplicitSection] = useState<undefined | number>();
	const [explicitSection, setExplicitSection] = useState<undefined | number>();
	const [isTerminated, setIsTerminated] = useState<"start" | "end" | undefined>();
	const activeSection = explicitSection ?? implicitSection;

	const observer = useRef(new IntersectionObserver((entries) => {
		entries.forEach(({ target, intersectionRatio }) => {
			sectionRefs.current.set(target, intersectionRatio >= intersectionRatioThreshold);
		});

		const sectionRefsArr = [...sectionRefs.current.values()];
		for (let i = 0; i < sectionRefsArr.length; i++) {
			const isIntersecting = sectionRefsArr[i];
			if (isIntersecting) {
				setImplicitSection(i);
				break;
			}
		}
	}, {
		root: container.current,
		rootMargin: "0px",
		threshold: [0, intersectionRatioThreshold, 1],
	}));

	const registerRef: ((ref: Element) => () => void) = useCallback((ref) => {
		sectionRefs.current.set(ref, false);
		observer.current.observe(ref);
		return () => {
			sectionRefs.current.delete(ref);
			observer.current.unobserve(ref);
		};
	}, []);

	const goToSection = useCallback((index: number) => {
		const sectionElems = [...sectionRefs.current.keys()];
		const section = sectionElems[index];

		if (!section) {
			return;
		}

		setExplicitSection(index);

		section.scrollIntoView({
			behavior: "smooth",
		});
	}, []);

	useEffect(() => {
		const { current: containerRef } = container;
		const containerState = { lastScrollTop: 0 };
		const clearExplicit = () => setExplicitSection(undefined);

		const createHandler = (up: boolean, isKey?: boolean) => ({ key }: KeyboardEvent) => {
			if (isKey && !scrollingKeys.includes(key)) {
				return;
			}

			if (containerState.lastScrollTop !== undefined && containerRef.scrollTop !== containerState.lastScrollTop) {
				clearExplicit();
			}

			containerState.lastScrollTop = up ? undefined : containerRef.scrollTop;
		};

		const keyDownHandler = createHandler(false, true);
		const keyUpHandler = createHandler(true, true);
		const mouseDownHandler = createHandler(false);
		const mouseUpHandler = createHandler(true);

		const scrollHandler = () => {
			const { scrollTop } = containerRef;

			const isTerminatedStart = scrollTop <= 0;
			const isTerminatedEnd = scrollTop >= containerRef.scrollHeight - containerRef.clientHeight;

			setIsTerminated(isTerminatedStart ? "start" : isTerminatedEnd ? "end" : undefined);
		};

		containerRef.addEventListener("wheel", clearExplicit);
		window.addEventListener("keydown", keyDownHandler);
		window.addEventListener("keyup", keyUpHandler);
		window.addEventListener("mousedown", mouseDownHandler);
		window.addEventListener("mouseup", mouseUpHandler);
		containerRef.addEventListener("scroll", scrollHandler);

		return () => {
			containerRef.removeEventListener("wheel", clearExplicit);
			window.removeEventListener("keydown", keyDownHandler);
			window.removeEventListener("keyup", keyUpHandler);
			window.removeEventListener("mousedown", mouseDownHandler);
			window.removeEventListener("mouseup", mouseUpHandler);
			containerRef.removeEventListener("scroll", scrollHandler);
		};
	}, [container]);

	return {
		registerRef,
		goToSection,
		activeSection: isTerminated === "start" ? 0 : isTerminated === "end" ? sectionRefs.current.size - 1 : activeSection,
	};
}
