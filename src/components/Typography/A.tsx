import * as React from "react";
import styled from "styled-components";

import { TypographyGenericProps } from "./TypographyTypes";
import theme from "../../utils/theme";

const Styled = styled.a`
	color: ${theme.colors.blue};
`

export default function A(props: TypographyGenericProps) {
	const {
		children,
		attrs = {},
		...remaining
	} = props;

	return (
		<Styled
			{...attrs}
			{...remaining}
		>{props.children}</Styled>
	)
}