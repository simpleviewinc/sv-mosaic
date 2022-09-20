import * as React from "react";
import { ReactElement } from "react";
import styled from "styled-components";

import { TypographyGenericProps } from "./TypographyTypes";
import theme from "@root/theme";

const Styled = styled.h3`
	font-family: ${theme.fontFamily};
	font-size: 14px;
	font-weight: bold;
	color: ${props => props.color ? theme.colors[props.color] : theme.colors.black};
	margin-top: 0px;
	margin-bottom: 1em;
`

export default function H3(props: TypographyGenericProps): ReactElement {
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
