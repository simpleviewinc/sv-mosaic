import * as React from "react";
import { ReactElement } from "react";
import styled from "styled-components";

import { TypographyGenericProps } from "./TypographyTypes";
import theme from "@root/theme";

const Styled = styled.span`
	font-family: ${theme.fontFamily};
	font-size: 14px;
	color: ${props => props.color ? theme.colors[props.color] : theme.colors.black};
`

export default function BodyText(props: TypographyGenericProps): ReactElement {
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
