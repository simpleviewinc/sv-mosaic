import React, { useState, useEffect, useCallback, useMemo, useRef, useLayoutEffect } from "react";

import type { DrawersProps } from "./DrawersTypes";

import Drawer from "@mui/material/Drawer";
import Backdrop from "@mui/material/Backdrop";
import calculateAnimationState from "./calculateAnimationState";
import { ANIMATION_DURATION, PaperDiv } from "./Drawers.styled";
import testIds from "@root/utils/testIds";
import { DrawerContext } from "./DrawerContext";

const slotProps = {
	backdrop: {
		"data-testid": testIds.DRAWER_BACKDROP,
	},
};

interface DrawerPanelProps {
	open: boolean;
	className: string;
	showContent: boolean;
	topmost: boolean;
	onEntered: () => void;
	onExited: () => void;
	children: React.ReactNode;
}

function DrawerPanel({ open, className, showContent, topmost, onEntered, onExited, children }: DrawerPanelProps) {
	const paperRef = useRef<HTMLDivElement | null>(null);
	const initialFocusRef = useRef<HTMLElement | null>(null);
	const focusedRef = useRef(false);
	const [entered, setEntered] = useState(false);
	const [titleId, setTitleId] = useState<string | null>(null);
	const registerTitle = useCallback((id: string | null) => setTitleId(id), []);
	const registerInitialFocus = useCallback((element: HTMLElement | null) => {
		initialFocusRef.current = element;
	}, []);
	const contextValue = useMemo(() => ({ registerTitle, registerInitialFocus }), [registerTitle, registerInitialFocus]);

	useLayoutEffect(() => {
		if (!entered || !showContent || !topmost || focusedRef.current) {
			return;
		}

		const paper = paperRef.current;
		if (!paper) {
			return;
		}

		focusedRef.current = true;
		if (document.activeElement instanceof HTMLElement && paper.contains(document.activeElement) && document.activeElement !== paper) {
			return;
		}

		const target = initialFocusRef.current;
		if (target?.isConnected && paper.contains(target)) {
			target.focus();
		}
		if (!target || document.activeElement !== target) {
			paper.focus();
		}
	}, [entered, showContent, topmost]);

	return (
		<Drawer
			open={open}
			anchor="right"
			SlideProps={{
				appear: true,
				onEntered: () => {
					setEntered(true);
					onEntered();
				},
				onExited,
			}}
			transitionDuration={ANIMATION_DURATION}
			PaperProps={{
				className,
				component: PaperDiv,
				ref: paperRef,
				tabIndex: -1,
				role: "dialog",
				"aria-modal": topmost ? true : undefined,
				"aria-labelledby": titleId || undefined,
				"aria-label": titleId ? undefined : "Drawer",
			}}
			slotProps={slotProps}
			data-testid={testIds.DRAWER}
		>
			<DrawerContext.Provider value={contextValue}>
				{showContent ? children : null}
			</DrawerContext.Provider>
		</Drawer>
	);
}

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
					<DrawerPanel
						key={i}
						open={val}
						className={className}
						showContent={Boolean(showContent)}
						topmost={i === props.drawers.length - 1 && val}
						onEntered={onEntered}
						onExited={onExited}
					>
						{showContent ? props.children(props.drawers[i]) : null}
					</DrawerPanel>
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
