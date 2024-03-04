import { useEffect, useState } from "react";

import clamp from "@root/utils/math/clamp";
import { UseScrollToParams } from "./useScrollToTypes";
import { useAnimate } from "../useAnimate";

export default function useScrollTo({
	container: containerRef,
	onComplete,
}: UseScrollToParams) {
	const [target, setTarget] = useState<HTMLElement | undefined>();
	const animation = useAnimate({
		onComplete: () => {
			setTarget(undefined);
			onComplete && onComplete();
		},
	});

	useEffect(() => {
		const { current: container } = containerRef;

		if (!container) {
			return;
		}

		const onMouseWheel = () => {
			animation.stop();
			setTarget(undefined);
		};

		container.addEventListener("wheel", onMouseWheel, { passive: true });
		return () => container.removeEventListener("wheel", onMouseWheel);
	}, [animation, containerRef]);

	useEffect(() => {
		if (!target) {
			return;
		}

		const { current: container } = containerRef;
		const { scrollTop } = container;

		const targetBox = target.getBoundingClientRect();
		const containerBox = container.getBoundingClientRect();

		const newScrollTop = targetBox.top + scrollTop - containerBox.top;
		const scrollMax = container.scrollHeight - containerBox.height;

		const valueStart = scrollTop;
		const valueEnd = Math.min(newScrollTop, scrollMax);

		animation.start({
			fn: (n) => container.scrollTo({ top: n }),
			valueStart,
			valueEnd,
			duration: clamp(Math.abs(valueEnd - valueStart) * 0.75, {
				min: 400,
				max: 1500,
			}),
		});
	}, [animation, containerRef, target]);

	return {
		scrollTo: setTarget,
	};
}
