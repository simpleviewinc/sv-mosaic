import * as React from "react";
import { useContext, useEffect, useRef, useMemo, useCallback, Fragment } from "react";

import { LeftNavBlockProps, LeftNavContext } from "./LeftNavTypes";
import LeftNavItem from "./LeftNavItem";
import LeftNavFlyout from "./LeftNavFlyout";

function LeftNavItemDesktop(props: LeftNavBlockProps) {
	const {
		openName,
		onOpen,
		item
	} = props;

	const leftNavContext = useContext(LeftNavContext);
	const aRef = useRef<HTMLAnchorElement>(null);
	const open = item.name === openName;
	const hasItems = item.items !== undefined && item.items.length > 0;

	const onNavClick: React.MouseEventHandler = useCallback(() => {
		leftNavContext.onNav({ item });
	}, [leftNavContext.onNav]);

	/** Timer to store when to open the item */
	let timer: number;
	const onPointerEnter: React.PointerEventHandler = function(e) {
		timer = window.setTimeout(function() {
			onOpen(item.name);
		}, leftNavContext.enterTimeout);
	}

	// On a desktop device, a touch or swipe triggers onPointerEnter and possibly onClick if it lingers long enough
	// because of this we can cancel the onPointerEnter, and rely on the onClick event picking it up.
	// On a mobile device, we're relying on onClick anyways, we can cancel the timer without harm.
	const onTouchStart: React.TouchEventHandler = function(e) {
		clearTimeout(timer);
	}

	const onOpenChildrenClick: React.MouseEventHandler = function(e) {
		onOpen(item.name);
	}

	const onPointerLeave: React.PointerEventHandler = function(e) {
		clearTimeout(timer);
	}

	// for browsers like Safari which do not support onPointerEnter/onPointerLeave, we are forced to use onMouseEnter/onMouseLeave
	const onMouseEnter = "PointerEvent" in window ? undefined : onPointerEnter;
	const onMouseLeave = "PointerEvent" in window ? undefined : onPointerLeave;

	// If this item is unmounted we need to clear the timer
	useEffect(() => {
		return function cleanup() {
			clearTimeout(timer);
		}
	}, [])
	
	const attrs = {
		onPointerEnter,
		onPointerLeave,
		onTouchStart,
		onMouseEnter,
		onMouseLeave,
		onClick : hasItems ? onOpenChildrenClick : onNavClick
	}

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