import { AnimateParams, AnimateStart, AnimateState, AnimateStop, Animation } from "./animateTypes";
import easingFns from "../easing";

export default function animate(params: AnimateParams = {}): Animation {
	const state: AnimateState = {
		fn: () => null,
		startTimestamp: 0,
		preventNext: false,
		valueStart: 0,
		valueEnd: 0,
		duration: 0,
		easing: "easeInOutCubic",
	};

	const _applyParams = (params: AnimateParams) => {
		Object.assign(state, params);
	};

	_applyParams(params);

	const _tick = (timestamp: number) => {
		if (state.preventNext) {
			return;
		}

		if (!state.startTimestamp) {
			state.startTimestamp = timestamp;
		}

		const progress = Math.min((timestamp - state.startTimestamp) / state.duration, 1);
		const current = Math.floor(easingFns[state.easing](progress) * (state.valueEnd - state.valueStart) + state.valueStart);

		state.fn(current, state);

		if (progress < 1) {
			window.requestAnimationFrame(_tick);
			return;
		}

		state.preventNext = true;
	};

	const start: AnimateStart = (params = {}) => {
		_applyParams(params);

		state.preventNext = false;
		state.startTimestamp = 0;
		window.requestAnimationFrame(_tick);
	};

	const stop: AnimateStop = () => {
		state.preventNext = true;
	};

	const inProgress = () => {
		return !state.preventNext;
	};

	return {
		start,
		stop,
		inProgress,
	};
}
