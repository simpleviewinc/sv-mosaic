import * as React from "react";
import { useMemo } from "react";

import { LeftNavProps, LeftNavContext, LeftNavContextProps } from "./LeftNavTypes";
import LeftNavMobile from "./LeftNavMobile";
import LeftNavDesktop from "./LeftNavDesktop";

// how long to wait onMouseLeave to hide the navigation
const leaveTimeout = 300;
// how long to wait onMouseEnter to show the navigation
const enterTimeout = 100;
// the default z-index to use for the drawer system
const defaultZIndex = 100;

function LeftNav(props: LeftNavProps) {
	for(var val of props.items) {
		if (val.mIcon === undefined) {
			throw new Error(`All top-level navigation items require a mIcon for proper display. '${val.name}' lacks an icon.`);
		}
	}

	const zIndex = props.zIndex ?? defaultZIndex;

	const Component = props.variant === "mobile" ? LeftNavMobile : LeftNavDesktop;

	const contextValue = useMemo(() => {
		const context: LeftNavContextProps = {
			active : props.active,
			variant : props.variant,
			zIndex,
			leaveTimeout,
			enterTimeout
		}

		return context;
	}, [props.variant, zIndex, props.active]);

	return (
		<LeftNavContext.Provider value={contextValue}>
			<Component {...props}/>
		</LeftNavContext.Provider>
	);
}

export default LeftNav;