import { useRef } from "react";
import { AnimateParams } from "@root/utils/math/animateTypes";
import animate from "@root/utils/math/animate";

export default function useAnimate(params?: AnimateParams) {
	const animation = useRef(animate(params));

	return animation.current;
}
