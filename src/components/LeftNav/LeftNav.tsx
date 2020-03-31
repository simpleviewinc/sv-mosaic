import * as React from "react";
import { useState, useMemo } from "react";
import styled from "styled-components";
import Drawer from "@material-ui/core/Drawer";

import { LeftNavProps, LeftNavContext } from "./LeftNavTypes";
import LeftNavItem from "./LeftNavItem";
import LeftNavGroup from "./LeftNavGroup";

const StyledDiv = styled.div`
	background: #2e2e31;
	width: 250px;
	flex: 1;
`;

function LeftNav(props: LeftNavProps) {
	const zIndex = props.zIndex !== undefined ? props.zIndex : 100;

	const [state, setState] = useState({
		openAnchorEl : null
	});

	const onOpen = (openAnchorEl) => {
		setState({
			...state,
			openAnchorEl
		})
	}

	const onClose = function() {
		setState({
			...state,
			openAnchorEl : null
		});

		props.onClose();
	}

	const contextValue = useMemo(() => {
		return {
			zIndex,
			onNav : props.onNav
		}
	}, [props.onNav, zIndex]);

	const children = props.items.map(item => {
		const Component = item.type === "group" ? LeftNavGroup : LeftNavItem;

		return (
			<Component
				key={item.name}
				item={item}
				openAnchorEl={state.openAnchorEl}
				onOpen={onOpen}
			/>
		)
	});

	return (
		<Drawer
			anchor="left"
			open={props.open}
			onClose={onClose}
			ModalProps={{ disableEnforceFocus : true }}
			style={{ zIndex }}
		>
			<StyledDiv>
				<LeftNavContext.Provider value={contextValue}>
					{children}
				</LeftNavContext.Provider>
			</StyledDiv>
		</Drawer>
	)
}

export default LeftNav;