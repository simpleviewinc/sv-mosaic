import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";

import { LeftNavItemDef, LeftNavProps } from "./LeftNavTypes";
import LeftNavItem from "./LeftNavItem";
import LeftNavTitle from "./LeftNavTitle";
import LeftNavGroup from "./LeftNavGroup";
import theme from "../../theme";

interface Props {
	parent: LeftNavItemDef
	anchorEl: HTMLElement
	zIndex: number
	onNav: LeftNavProps["onNav"]
}

const StyledDiv = styled.div`
	&.paper {
		background-color: #404045;
		width: 250px;
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

function LeftNavFlyout(props: Props) {
	const [state, setState] = useState({
		openName : undefined
	});

	const onOpen = name => {
		setState({
			...state,
			openName : name
		})
	}

	return (
		<Popper
			open={true}
			anchorEl={props.anchorEl}
			placement="right"
			style={{ zIndex : props.zIndex + 1 }}
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
								openName={state.openName}
								zIndex={props.zIndex}
								onNav={props.onNav}
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