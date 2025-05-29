import * as React from "react";
import type { ReactElement } from "react";
import styled from "styled-components";

import type { SvgIconComponent } from "@root/types";
import theme from "../../theme";

interface Props {
	label: string;
	mIcon?: SvgIconComponent;
}

const StyledH3 = styled.h3`
	color: ${theme.colors.gray400};
	padding: 8px 16px;
	margin: 0;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-size: 14px;
	font-weight: ${theme.weight.semi};
	display: flex;
	align-items: center;
	line-height: 24px;

	& > span {
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	& > .icon {
		margin-right: 16px;
	}
`;

function LeftNavTitle(props: Props): ReactElement {
	return (
		<StyledH3 title={props.label}>
			{
				props.mIcon &&
					<props.mIcon className="icon" />
			}
			<span>{props.label}</span>
		</StyledH3>
	);
}

export default LeftNavTitle;
