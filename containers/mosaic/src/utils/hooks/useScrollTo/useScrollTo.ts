import { useCallback, useEffect } from "react";

import clamp from "@root/utils/math/clamp";
import type { UseScrollToParams } from "./useScrollToTypes";
import { useAnimate } from "../useAnimate";

const MIN_SCROLL_DURATION = 400;
const MAX_SCROLL_DURATION = 1500;

export default function useScrollTo<E extends HTMLElement>({
	container: containerRef,
	onComplete,
	onStop,
}: UseScrollToParams<E>) {
	const animation = useAnimate({
		onComplete: () => {
			onComplete && onComplete();
			onStop && onStop();
		},
	});

	useEffect(() => {
		const { current: container } = containerRef;

		if (!container) {
			return;
		}

		const onMouseWheel = () => {
			animation.stop();
			onStop && onStop();
		};

		container.addEventListener("wheel", onMouseWheel, { passive: true });
		return () => container.removeEventListener("wheel", onMouseWheel);
	}, [animation, containerRef, onStop]);

	const scrollTo = useCallback(({ target, offset = 0 }: { target: HTMLElement; offset?: number }) => {
		if (!target) {
			return;
		}

		const { current: container } = containerRef;
		const { scrollTop } = container;

		const targetBox = target.getBoundingClientRect();
		const containerBox = container.getBoundingClientRect();

		const newScrollTop = targetBox.top + scrollTop - containerBox.top - offset;
		const scrollMax = container.scrollHeight - containerBox.height;

		const valueStart = scrollTop;
		const valueEnd = Math.min(newScrollTop, scrollMax);

		animation.start({
			fn: (n) => typeof container.scrollTo === "function" && container.scrollTo({ top: n }),
			valueStart,
			valueEnd,
			duration: clamp(Math.abs(valueEnd - valueStart) * 0.75, {
				min: MIN_SCROLL_DURATION,
				max: MAX_SCROLL_DURATION,
			}),
		});
	}, [animation, containerRef]);

	return {
		animation,
		scrollTo,
	};
}
