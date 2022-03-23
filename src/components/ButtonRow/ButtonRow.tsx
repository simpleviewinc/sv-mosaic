import * as React from "react";
import { useMemo, memo } from "react";
import styled from "styled-components";

import { ButtonRowProps } from "./ButtonRowTypes";
import Button from "../Button";

const StyledWrapper = styled.span`
	${/* ensures that the NEXT button spaces itself, if it isn't an icon button */""}
	& > .button + .normalButton {
		margin-left: 10px;
	}
`;

function ButtonRow(props: ButtonRowProps) {
	if (props.children && props.buttons) {
		throw new Error("ButtonRow cannot receive both children and a buttons prop");
	}

	const children = useMemo(() => {
		if (props.children) {
			return props.children;
		}

		if (props.buttons) {
			return props.buttons.map((button, i) => {
				return (
					<Button key={i} {...button} />
				)
			});
		}

		return null;
	}, [props.children, props.buttons]);

	if (children === null) {
		return null;
	}

	return (
		<StyledWrapper className={props.className}>
			{children}
		</StyledWrapper>
	)
}

export default memo(ButtonRow);