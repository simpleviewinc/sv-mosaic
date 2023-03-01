import * as React from "react";
import { ReactElement } from "react";
import styled from "styled-components";

import { TypographyGenericProps } from "./TypographyTypes";
import theme from "@root/theme";

const Styled = styled.h1`
	font-family: ${theme.museoFont};
	font-size: 28px;
	font-weight: ${theme.fontWeight.light};
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	color: ${theme.newColors.almostBlack["100"]};
	margin: 0;
`;

export default function H1(props: TypographyGenericProps): ReactElement {
	const {
		children,
		attrs = {},
		...remaining
	} = props;

	return (
		<Styled
			{...attrs}
			{...remaining}
		>{children}</Styled>
	)
}
