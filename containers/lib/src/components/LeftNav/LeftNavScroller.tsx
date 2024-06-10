import * as React from "react";
import { ReactElement } from "react";
import styled from "styled-components";

import { MosaicObject } from "../../types";

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
	className?: string;
	children?: React.ReactNode;
	attrs?: MosaicObject;
}

function LeftNavScroller(props: Props): ReactElement {
	const {
		attrs = {},
	} = props;

	return (
		<StyledDiv {...attrs} className={props.className}>{props.children}</StyledDiv>
	);
}

export default LeftNavScroller;
