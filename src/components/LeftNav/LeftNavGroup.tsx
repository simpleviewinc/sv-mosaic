import * as React from "react";
import styled from "styled-components";

import LeftNavTitle from "./LeftNavTitle";
import LeftNavItem from "./LeftNavItem";
import { LeftNavBlockProps } from "./LeftNavTypes";
import theme from "../../theme";

const StyledDiv = styled.div`
	border-top: 1px solid ${theme.colors.gray700};
`;

function LeftNavGroup(props: LeftNavBlockProps) {
	return (
		<StyledDiv>
			<LeftNavTitle label={props.item.label} mIcon={props.item.mIcon}/>
			{
				props.item.items && props.item.items.map(item => {
					return (
						<LeftNavItem
							key={item.name}
							item={item}
							openAnchorEl={props.openAnchorEl}
							onOpen={props.onOpen}
						/>
					)
				})
			}
		</StyledDiv>
	)
}

export default LeftNavGroup;