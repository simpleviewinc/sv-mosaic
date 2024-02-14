import * as React from "react";
import {
	useState,
	useEffect,
	useCallback,
	useMemo,
} from "react";
import Drawer from "@mui/material/Drawer";
import Backdrop from "@mui/material/Backdrop";
import calculateAnimationState from "./calculateAnimationState";
import { DrawersProps } from "./DrawersTypes";
import { ANIMATION_DURATION, PaperDiv } from "./Drawers.styled";

function Drawers<T>(props: DrawersProps<T>) {
	// For each drawer we store a boolean indicating whether that drawer is open (true) or closed (false)
	const [bools, setBools] = useState<boolean[]>([]);
	// Stores whether the Drawer system is currently animating. If no animation is being performed animating === false.
	const [animating, setAnimating] = useState(false);

	useEffect(() => {
		if (
			// if we don't have any drawers or booleans, nothing to do
			props.drawers.length === 0 && bools.length === 0
		) {
			return;
		} else if (
			// If we more drawers than booleans, then we need to add a new drawer to the stack, add it to bools and animate it in
			props.drawers.length > bools.length
		) {
			setBools((bools) => [...bools, true]);
			setAnimating(true);
		} else if (
			// If we have less drawers than booleans, and the last drawer is open, then this means we need to perform a closure
			// Set the last boolean to false, and enable animation
			props.drawers.length < bools.length && bools[bools.length - 1] === true
		) {
			setBools((bools) => [...bools.slice(0, -1), false]);
			setAnimating(true);
		}
	}, [props.drawers, bools]);

	/**
	 * Called when the animation for a drawer entering the UI is complete
	 */
	const onEntered = useCallback(() => {
		setAnimating(false);
	}, []);

	/**
	 * Called when the animation for a drawer exiting the UI is complete
	 */
	const onExited = useCallback(() => {
	// The animation is complete so we remove the final boolean and indicate animation is done
		setBools((bools) => [...bools.slice(0, -1)]);
		setAnimating(false);
	}, []);

	/**
	 * Each entry in the animationState returns the animation state ("opening", "open", "closed") of the associated boolean and therefore it's associated drawer
	 */
	const animationState = useMemo(() => {
		return calculateAnimationState(bools, animating);
	}, [bools, animating]);

	return (
		<>
			{/* We loop the bools array, since it contains the state of all displayed drawers rather than props.drawers as when we remove a drawer, it won't exist in props, but will exist in bools */}
			{bools.map((val, i) => {
				const className = animationState[i];

				// Only show the content if we have content to show, and it's in an animation state that should display
				// We do not show the drawer content if it's opening or closing
				const showContent =
			props.drawers[i] && !["closing", "opening"].includes(className);

				return (
					<Drawer
						key={i}
						open={val}
						anchor="right"
						SlideProps={{
							appear: true,
							onEntered: onEntered,
							onExited: onExited,
						}}
						transitionDuration={ANIMATION_DURATION}
						PaperProps={{
							className,
							//@ts-expect-error: TS thinks this is bogus, but it's not https://github.com/mui/material-ui/issues/27703
							component: PaperDiv,
						}}
					>
						{showContent ? props.children(props.drawers[i]) : null}
					</Drawer>
				);
			})}
			{/* This backdrop is invisible but locks the UI from clicks preventing race conditions while the drawer system is animating into place */}
			<Backdrop
				invisible={true}
				open={animating}
				sx={{
					zIndex: 1300,
				}}
			/>
		</>
	);
}

export default Drawers;
