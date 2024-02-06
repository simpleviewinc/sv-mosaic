import * as React from "react";
import { useMemo, useCallback, ReactElement } from "react";

import { LeftNavProps, LeftNavContext, LeftNavContextProps, LeftNavOnNav } from "./LeftNavTypes";
import LeftNavMobile from "./LeftNavMobile";
import LeftNavDesktop from "./LeftNavDesktop";

// how long to wait onMouseLeave to hide the navigation
const leaveTimeout = 300;
// how long to wait onMouseEnter to show the navigation
const enterTimeout = 100;
// the default z-index to use for the drawer system
const defaultZIndex = 100;

function LeftNav(props: LeftNavProps): ReactElement {
	for (const val of props.items) {
		if (val.mIcon === undefined) {
			throw new Error(`All top-level navigation items require a mIcon for proper display. '${val.name}' lacks an icon.`);
		}
	}

	const zIndex = props.zIndex ?? defaultZIndex;

	const Component = props.variant === "mobile" ? LeftNavMobile : LeftNavDesktop;

	const onNav = useCallback<LeftNavOnNav>((args) => {
		// if the handler has onNav false, let the browser handle
		if (args.item.onNav === false) {
			return;
		}

		// if we have an href and it was a ctrl click (win) or command + click (mac) then let the browser handle it
		if (args.item?.attrs?.href !== undefined && (args.event.ctrlKey || args.event.metaKey)) {
			// let the default browser handler take care of it
			return;
		}

		// we have determined we will handle it, so preventDefault to prevent the browser from taking over
		args.event.preventDefault();

		if (typeof args.item.onNav === "function") {
			// if the nav item has it's own onNav function
			args.item.onNav(args);

			props.onClose();
		} else {
			// else we all onNav for the main app to navigate
			props.onNav(args);
		}
	}, [props.onNav]);

	const contextValue = useMemo(() => {
		const context: LeftNavContextProps = {
			active : props.active,
			variant : props.variant,
			zIndex,
			leaveTimeout,
			enterTimeout,
			onNav,
		};

		return context;
	}, [props.variant, zIndex, props.active]);

	return (
		<LeftNavContext.Provider value={contextValue}>
			<Component {...props}/>
		</LeftNavContext.Provider>
	);
}

export default LeftNav;
