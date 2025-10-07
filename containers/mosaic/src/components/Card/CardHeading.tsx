import * as React from "react";

import type { CardHeadingProps } from "./CardTypes";

import testIds from "@root/utils/testIds";
import {
	Title,
	Heading,
	CardButtonRow,
} from "./Card.styled";
import { Text } from "../Typography";
import Badge from "../Badge";
import { EMPTY_ARRAY } from "@root/constants/stable";

export function CardHeading({
	children,
	buttons = EMPTY_ARRAY,
	collapsed,
	count,
	icon: Icon,
	showZeroCount,
	compact,
}: CardHeadingProps) {
	return (
		<Heading
			data-testid={testIds.CARD_HEADING}
			$collapsed={collapsed}
			$compact={compact}
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
			{buttons.length > 0 && (
				<CardButtonRow buttons={buttons} />
			)}
		</Heading>
	);
}
