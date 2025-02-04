import { useCallback, useEffect, useRef } from "react";

import clamp from "@root/utils/math/clamp";
import type { UseScrollToParams } from "./useScrollToTypes";
import { useAnimate } from "../useAnimate";

const MIN_SCROLL_DURATION = 400;
const MAX_SCROLL_DURATION = 1500;

export default function useScrollTo<E extends HTMLElement>({
	container: containerRef,
	onComplete,
	onStop,
	onScrollFinished,
}: UseScrollToParams<E>) {
	/**
	 * We keep a track of the scroll handlers that are attached with setting of scroll offsets.
	 *
	 * Just because the animation has finished, it doesn't mean that the final scroll event
	 * has fired. On the flipside, the last scroll event can also fire before the animation
	 * has finished if easing calculations mean that the scroll top is set to its current
	 * value.
	 *
	 * Therefore, we fire the onScrollFinished callback either when the animation completes
	 * and the scroll handler queue is empty, or when the final scroll handler fires, but
	 * it should only happen once per animation.
	 */
	const scrollHandlers = useRef<(() => void)[]>([]);
	const animation = useAnimate({
		onComplete: () => {
			onComplete && onComplete();
			onStop && onStop();

			if (onScrollFinished && !scrollHandlers.current.length) {
				onScrollFinished();
			}
		},
	});

	useEffect(() => {
		const { current: container } = containerRef;

		if (!container) {
			return;
		}

		const onMouseWheel = () => {
			if (!animation.inProgress()) {
				return;
			}

			animation.stop();
			onStop && onStop();
		};

		container.addEventListener("wheel", onMouseWheel, { passive: true });
		return () => container.removeEventListener("wheel", onMouseWheel);
	}, [animation, containerRef, onStop]);

	const setScroll = useCallback(({ top, left }: { top?: number; left?: number }) => {
		const { current: container } = containerRef;

		if (!container) {
			return;
		}

		let hasChanged = false;

		if (top !== undefined && container.scrollTop !== top) {
			container.scrollTop = top;
			hasChanged = true;
		}

		if (left !== undefined && container.scrollLeft !== left) {
			container.scrollLeft = left;
			hasChanged = true;
		}

		if (hasChanged) {
			const handler = () => {
				container.removeEventListener("scroll", handler);
				scrollHandlers.current = scrollHandlers.current.filter(item => item !== handler);

				if (!scrollHandlers.current.length && !animation.inProgress()) {
					onScrollFinished();
				}
			};

			scrollHandlers.current.push(handler);
			container.addEventListener("scroll", handler, { passive: true });
		}
	}, [onScrollFinished, animation, containerRef]);

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
			fn: (n) => setScroll({ top: n }),
			valueStart,
			valueEnd,
			duration: clamp(Math.abs(valueEnd - valueStart) * 0.75, {
				min: MIN_SCROLL_DURATION,
				max: MAX_SCROLL_DURATION,
			}),
			// duration: 5_000,
		});
	}, [animation, containerRef]);

	return {
		animation,
		scrollTo,
	};
}
