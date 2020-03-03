import * as React from "react";
import styled from "styled-components";

import { TypographGenericProps } from "./TypographyTypes";
import theme from "../../utils/theme";

const Styled = styled.h1`
	font-family: ${theme.fontFamily};
	font-size: 20px;
	font-weight: normal;
	letter-spacing: -.5px;
	color: ${theme.colors.black};
	margin-top: 0px;
	margin-bottom: .67em;
`

export default function H1(props: TypographGenericProps) {
	const {
		children,
		...remaining
	} = props;

	return (
		<Styled
			{...remaining}
		>{props.children}</Styled>
	)
}