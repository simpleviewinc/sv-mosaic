import * as React from "react";
import { memo, ReactElement } from "react";

// Styled components
import styled from "styled-components";

// Utils
import theme from "@root/theme/theme";
import { H1 } from "@root/components/Typography";

const Description = styled.span`
	color: ${theme.newColors.grey3["100"]};
	font-family: ${theme.museoFont};
	font-weight: ${theme.fontWeight.light};
	font-size: 14px;
	margin-top: 5px;

	@media (max-width: ${theme.breakpoints.mobile}) {
		align-self: center;
	}
`;

type TitleWrapperProps = {
	title: string;
	description?: string;
}

const TitleWrapper = (props: TitleWrapperProps): ReactElement => {
	const {
		title,
		description,
	} = props;

	return (
		<>
			<H1>{title}</H1>
			{description && <Description>{description}</Description>}
		</>
	);
};

export default memo(TitleWrapper);
