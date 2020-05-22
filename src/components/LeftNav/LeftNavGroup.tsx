import * as React from "react";
import styled from "styled-components";

import LeftNavTitle from "./LeftNavTitle";
import { LeftNavBlockProps } from "./LeftNavTypes";
import LeftNavItems from "./LeftNavItems";
import theme from "../../theme";

const StyledDiv = styled.div`
	border-top: 1px solid ${theme.colors.gray700};
`;

function LeftNavGroup(props: LeftNavBlockProps) {
	return (
		<StyledDiv>
			<LeftNavTitle label={props.item.label} mIcon={props.item.mIcon}/>
			<LeftNavItems
				items={props.item.items}
				onOpen={props.onOpen}
				openAnchorEl={props.openAnchorEl}
			/>
		</StyledDiv>
	)
}

export default LeftNavGroup;