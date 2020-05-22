import * as React from "react";
import { useRef, Fragment, useContext, useEffect } from "react";
import styled from "styled-components";

import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { LeftNavBlockProps, LeftNavContext } from "./LeftNavTypes";
import LeftNavFlyout from "./LeftNavFlyout";
import { BodyText } from "../Typography";
import theme from "../../theme";

const StyledA = styled.a`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 8px 16px;
	color: ${theme.colors.gray400};
	line-height: 24px;

	&.clickable {
		cursor: pointer;
	}

	&.hasItems > .right > .arrow {
		visibility: visible;
	}

	&.active {
		background: ${theme.colors.blue};
		color: white;
	}

	&.active:hover {
		background: ${theme.colors.blueHover};
	}

	&:hover {
		background: #505057;
	}

	& > .left {
		display: flex;
		align-items: center;
		flex: 1 0 0px;
		min-width: 0;
	}

	&.showLabel > .left {
		margin-right: 10px;
	}

	&.showLabel > .left > .icon {
		margin-right: 16px;
	}

	& > .left > .navLabel {
		color: ${theme.colors.gray200};
		font-size: 12px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	& > .right {
		display: flex;
		align-items: center;
		flex: 0 0 auto;
	}

	& > .right > * {
		font-size: 20px;
		visibility: hidden;
	}
`;

function LeftNavItem(props: LeftNavBlockProps) {
	const {
		openAnchorEl,
		item,
		onOpen,
		showLabel = true
	} = props;

	const leftNavContext = useContext(LeftNavContext);
	const aRef = useRef(null);

	const open = aRef.current !== null && openAnchorEl === aRef.current;

	const onNav = function() {
		leftNavContext.onNav({ item });
	}

	/** Timer to store when to open the item */
	let timer: number;
	const onPointerEnter = function(e) {
		const target = e.currentTarget;
		timer = window.setTimeout(function() {
			onOpen(target);
		}, leftNavContext.enterTimeout);
	}

	// for browsers like Safari which do not support onPointerEnter, we are forced to use onMouseEnter
	const onMouseEnter = "PointerEvent" in window ? undefined : onPointerEnter;

	const onTouchStart = function(e) {
		onOpen(e.currentTarget);
	}

	const onLeave = function(e) {
		clearTimeout(timer);
	}

	// If this item is unmounted we need to clear the timer
	useEffect(() => {
		return function cleanup() {
			clearTimeout(timer);
		}
	}, [])

	const clickable = !item.items;
	const hasItems = item.items !== undefined;
	const active = leftNavContext.active && (leftNavContext.active === item.name || leftNavContext.active.startsWith(`${item.name}.`));

	if (!item.mIcon && showLabel === false) {
		return null;
	}

	return (
		<Fragment>
			<StyledA
				onPointerEnter={onPointerEnter}
				onMouseEnter={onMouseEnter}
				onTouchStart={onTouchStart}
				onPointerLeave={onLeave}
				onClick={clickable ? onNav : undefined}
				ref={aRef}
				className={`
					${clickable ? "clickable" : ""}
					${hasItems ? "hasItems" : ""}
					${showLabel ? "showLabel" : ""}
					${active ? "active" : ""}
				`}
				title={item.label}
			>
				<span className="left">
					{
						item.mIcon &&
						<item.mIcon className="icon"/>
					}
					{
						showLabel &&
						<BodyText className="navLabel">{item.label}</BodyText>
					}
				</span>
				{
					showLabel &&
					<span className="right">
						<ChevronRightIcon className="arrow"/>
					</span>
				}
			</StyledA>
			{
				item.items && open &&
				<LeftNavFlyout
					parent={item}
					anchorEl={aRef.current}
				/>
			}
		</Fragment>
	)
}

export default LeftNavItem;