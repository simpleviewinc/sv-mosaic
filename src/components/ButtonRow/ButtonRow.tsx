import * as React from "react";
import { useMemo, memo } from "react";

import { ButtonRowProps } from "./ButtonRowTypes";
import { Item, Row } from "./ButtonRow.styled";
import Button from "../Button";

function ButtonRow(props: ButtonRowProps) {
	if (props.children && props.buttons) {
		throw new Error("ButtonRow cannot receive both children and a buttons prop");
	}

	const {gap = "large", wrap = false} = props;

	const children = useMemo(() => {
		if (props.children) {
			return React.Children.toArray(props.children);
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
		<Row className={props.className} $wrap={wrap} data-testid="button-row">
			{children.map((elem: React.ReactNode, i: number) => (
				<Item key={i} separator={props.separator} gap={gap}>
					{elem}
				</Item>
			))}
		</Row>
	)
}

export default memo(ButtonRow);
