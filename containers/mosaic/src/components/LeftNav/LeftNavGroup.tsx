import * as React from "react";
import { ReactElement } from "react";
import styled from "styled-components";

import LeftNavTitle from "./LeftNavTitle";
import { LeftNavBlockProps } from "./LeftNavTypes";
import LeftNavItems from "./LeftNavItems";
import theme from "../../theme";

const StyledDiv = styled.div`
	border-top: 1px solid ${theme.newColors.grey4["100"]};
`;

function LeftNavGroup(props: LeftNavBlockProps): ReactElement {
	return (
		<StyledDiv>
			<LeftNavTitle label={props.item.label} mIcon={props.item.mIcon} />
			<LeftNavItems
				items={props.item.items}
				onOpen={props.onOpen}
				openName={props.openName}
			/>
		</StyledDiv>
	);
}

export default LeftNavGroup;
