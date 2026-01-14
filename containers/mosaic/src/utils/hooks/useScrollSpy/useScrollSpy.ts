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

type SectionTermination = "start" | "end";

interface SectionRef {
	elem: Element;
	isVisible: boolean;
	index: number;
}

export default function useScrollSpy({
	container,
	intersectionRatioThreshold = 0.1,
}: ScrollSpyProps): ScrollSpyResult {
	const sectionRefs = useRef<Map<string, SectionRef>>(new Map());

	const [implicitSection, setImplicitSection] = useState<undefined | string>();
	const [explicitSection, setExplicitSection] = useState<undefined | string>();
	const [isTerminated, setIsTerminated] = useState<SectionTermination | undefined>();
	const activeSection = explicitSection ?? implicitSection;

	const getTerminatedSection = (termination: SectionTermination) => {
		let targetSection: { id: string; index: number } | undefined;

		sectionRefs.current.forEach((value, key) => {
			if (!targetSection) {
				targetSection = { id: key, index: value.index };
			} else if (termination === "start" && value.index < targetSection.index) {
				targetSection = { id: key, index: value.index };
			} else if (termination === "end" && value.index > targetSection.index) {
				targetSection = { id: key, index: value.index };
			}
		});

		return targetSection?.id;
	};

	const observer = useRef(new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			sectionRefs.current.forEach((sectionRef) => {
				if (entry.target !== sectionRef.elem) {
					return;
				}

				sectionRef.isVisible = entry.intersectionRatio >= intersectionRatioThreshold;
			});
		});

		let current: {id: string; index: number};
		sectionRefs.current.forEach((sectionRef, id) => {
			if (!sectionRef.isVisible) {
				return;
			}

			if (current && current.index < sectionRef.index) {
				return;
			}

			current = { id, index: sectionRef.index };
		});

		setImplicitSection(current?.id);
	}, {
		root: container.current,
		rootMargin: "0px",
		threshold: [0, intersectionRatioThreshold, 1],
	}));

	const registerRef = useCallback<ScrollSpyResult["registerRef"]>(({ elem, id, index }) => {
		sectionRefs.current.set(id, {
			elem,
			isVisible: false,
			index,
		});
		observer.current.observe(elem);
		return () => {
			sectionRefs.current.delete(id);
			observer.current.unobserve(elem);
		};
	}, []);

	const goToSection = useCallback<ScrollSpyResult["goToSection"]>((id) => {
		const section = sectionRefs.current.get(id);

		if (!section) {
			return;
		}

		setExplicitSection(id);

		section.elem.scrollIntoView({
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
		activeSection: isTerminated ? getTerminatedSection(isTerminated) : activeSection,
	};
}
