import * as React from "react";
import { useContext, forwardRef, ReactElement } from "react";
import styled from "styled-components";

import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import { MosaicObject } from "../../types";
import { LeftNavContext, LeftNavItemDef } from "./LeftNavTypes";
import { BodyText } from "../Typography";
import theme from "../../theme";

const StyledA = styled.a`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 8px 16px;
	color: ${theme.colors.gray400};
	line-height: 24px;
	cursor: pointer;
	text-decoration: none;

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
		font-size: 14px;
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

interface Props {
	item: LeftNavItemDef
	showLabel?: boolean
	attrs?: MosaicObject
}

function LeftNavItem(props: Props, ref): ReactElement {
	const {
		item,
		showLabel = true,
		attrs = {}
	} = props;

	const leftNavContext = useContext(LeftNavContext);

	const hasItems = item.items !== undefined;
	// if this item is active, or it has a child that is active
	const active = leftNavContext.active && (leftNavContext.active === item.name || leftNavContext.active.startsWith(`${item.name}.`));

	// no icon and if we aren't showing the label, nothing to show
	if (!item.mIcon && !showLabel) {
		return null;
	}

	return (
		<StyledA
			{...item.attrs}
			{...attrs}
			ref={ref}
			className={`
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
	)
}

export default forwardRef(LeftNavItem);