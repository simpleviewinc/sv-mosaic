import * as React from "react";
import styled from "styled-components";

import { TypographGenericProps } from "./TypographyTypes";
import theme from "../../utils/theme";

const Styled = styled.span`
	font-family: ${theme.fontFamily};
	font-size: 14px;
	color: ${theme.colors.black};
`

export default function BodyText(props: TypographGenericProps) {
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