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

	&.clickable {
		cursor: pointer;
	}

	&.hasItems > .right > .arrow {
		visibility: visible;
	}

	&:hover {
		background: #505057;
	}

	& > .left {
		display: flex;
		align-items: center;
		flex: 1 1 0;
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
	let timer: NodeJS.Timeout;
	const onMouseEnter = function(e) {
		const target = e.currentTarget;
		timer = setTimeout(function() {
			onOpen(target);
		}, leftNavContext.enterTimeout);
	}

	const onMouseLeave = function(e) {
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

	return (
		<Fragment>
			<StyledA
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				onClick={clickable ? onNav : undefined}
				ref={aRef}
				className={`
					${clickable ? "clickable" : ""}
					${hasItems ? "hasItems" : ""}
					${showLabel ? "showLabel" : ""}
				`}
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
				{
					item.items && open &&
					<LeftNavFlyout
						parent={item}
						anchorEl={aRef.current}
					/>
				}
			</StyledA>
		</Fragment>
	)
}

export default LeftNavItem;