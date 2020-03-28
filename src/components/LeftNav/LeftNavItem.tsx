import * as React from "react";
import { useRef, Fragment } from "react";
import styled from "styled-components";

import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { LeftNavBlockProps } from "./LeftNavTypes";
import LeftNavFlyout from "./LeftNavFlyout";
import { BodyText } from "../Typography";
import theme from "../../theme";

const StyledA = styled.a`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 8px 16px;
	color: ${theme.colors.gray200};

	&.clickable {
		cursor: pointer;
	}

	&:hover {
		background: #505057;
	}

	& > .left {
		display: flex;
		align-items: center;
	}

	& > .left > .icon {
		margin-right: 16px;
	}

	& > .left > .navLabel {
		color: ${theme.colors.gray200};
	}

	& > .arrow {
		font-size: 20px;
	}
`;

function LeftNavItem(props: LeftNavBlockProps) {
	const {
		openName,
		item,
		onOpen
	} = props;

	const open = openName === item.name;

	const aRef = useRef(null);

	const onNav = function() {
		props.onNav({ item });
	}

	const onMouseEnter = function() {
		props.onOpen(item.name);
	}

	const clickable = !item.items;

	return (
		<Fragment>
			<StyledA
				onMouseEnter={onMouseEnter}
				onClick={clickable ? onNav : undefined}
				ref={aRef}
				className={`
					${clickable ? "clickable" : ""}
				`}
			>
				<span className="left">
					{
						item.mIcon &&
						<item.mIcon className="icon"/>
					}
					<BodyText className="navLabel">{item.label}</BodyText>
				</span>
				{
					item.items &&
					<ChevronRightIcon className="arrow"/>
				}
			</StyledA>
			{
				item.items && open &&
				<LeftNavFlyout
					parent={item}
					zIndex={props.zIndex}
					anchorEl={aRef.current}
					onNav={props.onNav}
				/>
			}
		</Fragment>
	)
}

export default LeftNavItem;