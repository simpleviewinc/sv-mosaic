import * as React from "react";

import type { CardHeadingProps } from "./CardTypes";

import testIds from "@root/utils/testIds";
import {
	Title,
	Heading,
	CardEndSlot,
} from "./Card.styled";
import { Text } from "../Typography";
import Badge from "../Badge";
import { EMPTY_ARRAY } from "@root/constants/stable";
import ButtonRow from "../ButtonRow";

export function CardHeading({
	children,
	buttons = EMPTY_ARRAY,
	blunt,
	count,
	icon: Icon,
	showZeroCount,
	compact,
	endSlot,
	onClick,
}: CardHeadingProps) {
	return (
		<Heading
			data-testid={testIds.CARD_HEADING}
			$blunt={blunt}
			$compact={compact}
			as={onClick && "button"}
			onClick={onClick}
		>
			<Title>
				{Icon && <Icon data-testid={testIds.CARD_TITLE_ICON} />}
				<Text
					maxLines={1}
					tag="h3"
					size={compact ? "lg" : "xl"}
					line="xtight"
					weight="medium"
				>
					{children}
				</Text>
			</Title>
			{count !== undefined && (count !== 0 || showZeroCount) && (
				<Badge
					attrs={{ "data-testid": testIds.CARD_COUNT }}
					size="sm"
					variant="dark"
				>
					{count}
				</Badge>
			)}
			{(buttons.length > 0 || endSlot) && (
				<CardEndSlot>
					{buttons.length > 0 && (
						<ButtonRow buttons={buttons} />
					)}
					{endSlot}
				</CardEndSlot>
			)}
		</Heading>
	);
}
