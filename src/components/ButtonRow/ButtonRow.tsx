import * as React from "react";
import { useMemo, memo } from "react";

import { ButtonRowProps, ButtonsRowWrapperProps } from "./ButtonRowTypes";
import { Item, Row } from "./ButtonRow.styled";
import Button from "../Button";
import { useToggle } from "@root/utils/toggle";

function ButtonRowWrapper({ className, wrap, children, separator }: ButtonsRowWrapperProps) {
	if (!children.length) {
		return null;
	}

	return (
		<Row className={className} $wrap={wrap} data-testid="button-row" role="toolbar">
			{children.map((elem: React.ReactNode, i: number) => (
				<Item key={i} $separator={separator}>
					{elem}
				</Item>
			))}
		</Row>
	);
}

function ButtonRowWithDef(props: Omit<ButtonRowProps, "children">) {
	const buttons = useMemo(() => props.buttons || [], [props.buttons]);
	const shownButtons = useToggle(buttons, "show");
	const children = useMemo(() => shownButtons.map((button, i) => {
		return (
			<Button key={i} {...button} />
		);
	}), [shownButtons]);

	return (
		<ButtonRowWrapper {...props}>
			{children}
		</ButtonRowWrapper>
	);
}

function ButtonRowWithChildren(props: Omit<ButtonRowProps, "buttons">) {
	const children = useMemo(() => React.Children.toArray(props.children), [props.children]);

	return (
		<ButtonRowWrapper {...props}>
			{children}
		</ButtonRowWrapper>
	);
}

function ButtonRow(props: ButtonRowProps) {
	if (props.children && props.buttons) {
		throw new Error("ButtonRow cannot receive both children and a buttons prop");
	}

	if (props.buttons) {
		return <ButtonRowWithDef {...props} />;
	}

	return <ButtonRowWithChildren {...props} />;
}

export default memo(ButtonRow);
