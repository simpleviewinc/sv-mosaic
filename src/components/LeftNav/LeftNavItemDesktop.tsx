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
	const clickable = !item.items;

	const onClick: React.MouseEventHandler = useCallback(() => {
		leftNavContext.onNav({ item });
	}, [leftNavContext.onNav]);

	/** Timer to store when to open the item */
	let timer: number;
	const onPointerEnter: React.PointerEventHandler = function(e) {
		timer = window.setTimeout(function() {
			onOpen(item.name);
		}, leftNavContext.enterTimeout);
	}

	const onTouchStart: React.TouchEventHandler = function(e) {
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
		onClick : clickable ? onClick : undefined
	}

	return (
		<Fragment>
			<LeftNavItem
				{...props}
				clickable={clickable}
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