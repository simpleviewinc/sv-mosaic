import * as React from "react";
import type { ReactElement } from "react";
import type { CardProps } from "./CardTypes";

import testIds from "@root/utils/testIds";
import {
	CardBottom,
	ContentWrapper,
	CardWrapper,
	Title,
	Heading,
	CardButtonRow,
	ContentItem,
} from "./Card.styled";
import ButtonRow from "../ButtonRow/ButtonRow";
import { Text } from "../Typography";
import Badge from "../Badge";

const Card = (props: CardProps): ReactElement => {
	const {
		bottomActions,
		content,
		count,
		showZeroCount,
		title,
		titleIcon: TitleIcon,
		topActions,
		collapsed,
	} = props;

	return (
		<CardWrapper
			data-testid={testIds.CARD}
			$collapsed={collapsed}
		>
			<Heading
				data-testid={testIds.CARD_HEADING}
				$collapsed={collapsed}
			>
				<Title>
					{TitleIcon && <TitleIcon data-testid={testIds.CARD_TITLE_ICON} />}
					<Text
						maxLines={1}
						tag="h3"
						size="xl"
						line="xtight"
						weight="medium"
					>
						{title}
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
				{topActions?.length > 0 && (
					<CardButtonRow className="Foo" buttons={topActions} />
				)}
			</Heading>
			{!collapsed && (
				<>
					<ContentWrapper>
						{content.map((element, idx) => (
							<ContentItem key={idx} data-testid={testIds.CARD_ITEM}>
								{element}
							</ContentItem>
						))}
					</ContentWrapper>
					{bottomActions?.length > 0 && (
						<CardBottom>
							<ButtonRow buttons={bottomActions} />
						</CardBottom>
					)}
				</>
			)}
		</CardWrapper>
	);
};

export default Card;
