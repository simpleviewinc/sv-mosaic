import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
	& {
		flex: 1;
		padding: 12px;
	}

	&.background-gray {
		background: #FAFBFC;
	}
`;

export interface DrawerBottomProps {
	background?: string;
	children: ReactNode
}

function DrawerBottom(props: DrawerBottomProps) {
	return (
		<StyledDiv className={`
			${props.background ? `background-${props.background}` : ""}
		`}>
			{props.children}
		</StyledDiv>
	);
}

export default DrawerBottom;
