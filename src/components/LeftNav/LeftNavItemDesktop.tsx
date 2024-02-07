import * as React from "react";
import { useContext, useEffect, useRef, useCallback, Fragment, ReactElement } from "react";
import throttle from "lodash/throttle";

import { LeftNavBlockProps, LeftNavContext } from "./LeftNavTypes";
import LeftNavItem from "./LeftNavItem";
import LeftNavFlyout from "./LeftNavFlyout";

function LeftNavItemDesktop(props: LeftNavBlockProps): ReactElement {
	const {
		openName,
		onOpen,
		item,
	} = props;

	const leftNavContext = useContext(LeftNavContext);
	const aRef = useRef<HTMLAnchorElement>(null);
	const open = item.name === openName;
	const hasItems = item.items !== undefined && item.items.length > 0;

	const onNavClick: React.MouseEventHandler = useCallback((event) => {
		leftNavContext.onNav({ item, event });
	}, [leftNavContext.onNav]);

	const onPointerMove = throttle(function() {
		if (openName === item.name) {
			// item already open, no need for action
			return;
		}

		onOpen(item.name);
	}, leftNavContext.enterTimeout, { leading : false, trailing : true });

	// On a desktop device, a touch or swipe triggers onPointerEnter and possibly onClick if it lingers long enough
	// because of this we can cancel the onPointerMove, and rely on the onClick event picking it up.
	// On a mobile device, we're relying on onClick anyways, we can cancel the event without harm.
	const onTouchStart: React.TouchEventHandler = function() {
		onPointerMove.cancel();
	};

	const onOpenChildrenClick: React.MouseEventHandler = function() {
		onOpen(item.name);
	};

	const onPointerLeave: React.PointerEventHandler = function() {
		onPointerMove.cancel();
	};

	// for browsers like Safari which do not support onPointerEnter/onPointerLeave, we are forced to use onMouseMove/onMouseLeave
	const onMouseMove = "PointerEvent" in window ? undefined : onPointerMove;
	const onMouseLeave = "PointerEvent" in window ? undefined : onPointerLeave;

	// If this item is unmounted we need to clear any lingering events
	useEffect(() => {
		return function cleanup() {
			onPointerMove.cancel();
		};
	}, [onPointerMove]);

	const attrs = {
		onPointerMove,
		onPointerLeave,
		onTouchStart,
		onMouseMove,
		onMouseLeave,
		onClick : hasItems ? onOpenChildrenClick : onNavClick,
	};

	return (
		<Fragment>
			<LeftNavItem
				{...props}
				ref={aRef}
				attrs={attrs}
			/>
			{
				item.items && open &&
				<LeftNavFlyout
					parent={item}
					anchorEl={aRef.current}
				/>
			}
		</Fragment>
	);
}

export default LeftNavItemDesktop;
