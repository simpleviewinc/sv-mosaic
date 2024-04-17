import * as React from "react";
import { useMemo, memo } from "react";

import { ButtonRowProps, ButtonsRowWrapperProps } from "./ButtonRowTypes";
import { Item, Row } from "./ButtonRow.styled";
import Button from "../Button";
import { useToggle } from "@root/utils/toggle";
import { Skeleton } from "@mui/material";

function ButtonRowWrapper({ className, wrap, children, separator, skeleton }: ButtonsRowWrapperProps) {
	if (!children.length) {
		return null;
	}

	return (
		<Row className={className} $wrap={wrap} data-testid="button-row" role="toolbar">
			{children.map(({ item, key }) => (
				<Item key={key} $separator={separator}>
					{skeleton ? (
						<Skeleton
							variant="rectangular"
							width={120}
							height={36}
						/>
					) : item}
				</Item>
			))}
		</Row>
	);
}

function ButtonRowWithDef(props: Omit<ButtonRowProps, "children">) {
	const buttons = useMemo(() => props.buttons || [], [props.buttons]);
	const shownButtons = useToggle(buttons, "show");
	const children = useMemo(() => shownButtons.map((button, index) => ({
		item: <Button {...button} />,
		key: button.id || [button.label, button.name].filter(Boolean).join("-") || index,
	})), [shownButtons]);

	return (
		<ButtonRowWrapper {...props}>
			{children}
		</ButtonRowWrapper>
	);
}

function isReactElement(elem: React.ReactNode): elem is React.ReactElement {
	return typeof elem === "object" && elem !== null && "key" in elem;
}

function ButtonRowWithChildren(props: Omit<ButtonRowProps, "buttons">) {
	const children = useMemo(() => React.Children.toArray(props.children).map((item, index) => ({
		item,
		key: isReactElement(item) ? item.key : index,
	})), [props.children]);

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
