import { EasingName } from "../easing/easingTypes";

export type AnimateCallback = (n: number, state: AnimateState) => void;

export interface AnimateState {
	/**
	 * **Internal**
	 * The timestamp as it was when the animation
	 * started
	 */
	startTimestamp: number;
	/**
	 * **Internal**
	 * Whether or not to continue next tick
	 */
	preventNext: boolean;
	/**
	 * The function to run at each step of the animation,
	 * recieves the current animated value and state
	 */
	fn: AnimateCallback;
	/**
	 * The value to start animating from
	 */
	valueStart: number;
	/**
	 * The value to animate to
	 */
	valueEnd: number;
	/**
	 * The number of milliseconds that the animation
	 * should last for
	 */
	duration: number;
	/**
	 * The easing function that should be performed at
	 * each step of the animation
	 */
	easing: EasingName;
	/**
	 * A callback to invoke when the animation is complete
	 */
	onComplete: () => void;
}

export type AnimateParams = Partial<Pick<AnimateState, "fn" | "valueStart" | "valueEnd" | "duration" | "onComplete">>;

export type AnimateStart = (params?: Partial<AnimateParams>) => void;

export type AnimateStop = () => void;

export interface Animation {
	start: AnimateStart;
	stop: AnimateStop;
	inProgress: () => boolean;
}
