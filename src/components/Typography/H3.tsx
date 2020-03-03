import * as React from "react";
import styled from "styled-components";

import { TypographGenericProps } from "./TypographyTypes";
import theme from "../../utils/theme";

const Styled = styled.h3`
	font-family: ${theme.fontFamily};
	font-size: 14px;
	font-weight: bold;
	color: ${theme.colors.black};
	margin-top: 0px;
	margin-bottom: 1em;
`

export default function H3(props: TypographGenericProps) {
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