import * as React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
	overflow-y: auto;

	&::-webkit-scrollbar {
		width: 12px;
	}

	&::-webkit-scrollbar-track {
		background-color: #26262a;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #7a7a7d;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #5b5b5d;
	}
`;

interface Props {
	className?: string
	children?: React.ReactNode
}

function LeftNavScroller(props: Props) {
	return (
		<StyledDiv className={props.className}>{props.children}</StyledDiv>
	)
}

export default LeftNavScroller;