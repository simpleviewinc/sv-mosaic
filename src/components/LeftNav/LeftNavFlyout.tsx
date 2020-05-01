import * as React from "react";
import { useState, useContext } from "react";
import styled from "styled-components";
import Popper from "@material-ui/core/Popper";
import { PopperProps } from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";

import { LeftNavItemDef, LeftNavContext } from "./LeftNavTypes";
import LeftNavItem from "./LeftNavItem";
import LeftNavTitle from "./LeftNavTitle";
import LeftNavGroup from "./LeftNavGroup";
import theme from "../../theme";

interface Props {
	parent: LeftNavItemDef
	anchorEl: HTMLElement
}

const StyledDiv = styled.div`
	&.paper {
		background-color: #404045;
		min-width: 150px;
		max-width: 300px;
	}

	& > h3 {
		color: ${theme.colors.gray400};
		padding: 8px 16px;
		font-family: ${theme.fontFamily};
		margin: 0;
		text-transform: uppercase;
		letter-spacing: 1px;
		font-size: 12px;
		font-weight: normal;
	}
`;

const popperProps: Pick<PopperProps, "open" | "placement" | "modifiers"> = {
	open : true,
	placement : "right",
	modifiers : {
		preventOverflow : {
			enabled : true,
			boundariesElement: "viewport"
		},
		// this prevents popper from using translated3d which causes blurry
		// flyouts in Chrome, instead it will just use top/left positioning
		computeStyle : {
			enabled : true,
			gpuAcceleration : false
		}
	}
}

function LeftNavFlyout(props: Props) {
	const [state, setState] = useState({
		openAnchorEl : null
	});

	const leftNavContext = useContext(LeftNavContext);

	const onOpen = openAnchorEl => {
		setState({
			...state,
			openAnchorEl
		})
	}

	return (
		<Popper
			{...popperProps}
			anchorEl={props.anchorEl}
			style={{ zIndex : leftNavContext.zIndex + 1 }}
		>
			<Paper elevation={3} component={StyledDiv} className="paper">
				<LeftNavTitle label={props.parent.label}/>
				{
					props.parent.items.map(val => {
						const Component = val.type === "group" ? LeftNavGroup : LeftNavItem;

						return (
							<Component
								key={val.name}
								item={val}
								openAnchorEl={state.openAnchorEl}
								onOpen={onOpen}
							/>
						)
					})
				}
			</Paper>
		</Popper>
	)
}

export default LeftNavFlyout;