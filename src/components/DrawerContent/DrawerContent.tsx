import React from "react";
import styled from "styled-components";

import DrawerTopBar, { DrawerTopBarProps } from "./DrawerTopBar";
import DrawerBottom, { DrawerBottomProps } from "./DrawerBottom";

const StyledDiv = styled.div`
	width: 600px;
`;

type DrawerContentProps = DrawerTopBarProps & DrawerBottomProps;

function DrawerContent(props: DrawerContentProps) {
	return (
		<StyledDiv>
			<DrawerTopBar
				title={props.title}
				onSave={props.onSave}
				onApply={props.onApply}
				onClose={props.onClose}
				onCancel={props.onCancel}
			/>
			<DrawerBottom
				background={props.background}
			>
				{props.children}
			</DrawerBottom>
		</StyledDiv>
	)
}

export default DrawerContent;
