import * as React from "react";
import type { ReactElement } from "react";
import type { CardProps } from "./CardTypes";

import testIds from "@root/utils/testIds";
import {
	BottomActionWrapper,
	ContentWrapper,
	CardWrapper,
	StyledHr,
	Title,
	Heading,
	Count,
	CardButtonRow,
} from "./Card.styled";
import ButtonRow from "../ButtonRow/ButtonRow";
import { SubtitleText } from "../Typography";

const Card = (props: CardProps): ReactElement => {
	const {
		bottomActions,
		content,
		count,
		showZeroCount,
		title,
		titleIcon: TitleIcon,
		topActions,
	} = props;

	return (
		<CardWrapper data-testid={testIds.CARD}>
			<Heading data-testid={testIds.CARD_HEADING}>
				<Title>
					{TitleIcon && <TitleIcon data-testid={testIds.CARD_TITLE_ICON} />}
					<SubtitleText maxLines={1}>{title}</SubtitleText>
				</Title>
				{count !== undefined && (count !== 0 || showZeroCount) && (
					<Count data-testid={testIds.CARD_COUNT}>
						(
						{count}
						)
					</Count>
				)}
				{topActions?.length > 0 && (
					<CardButtonRow className="Foo" buttons={topActions} />
				)}
			</Heading>
			<ContentWrapper>
				{content.map((element, idx) => (
					<div key={idx} data-testid={testIds.CARD_ITEM}>
						{element}
						{idx !== content.length - 1 && <StyledHr />}
					</div>
				))}
			</ContentWrapper>
			{bottomActions?.length > 0 && (
				<BottomActionWrapper>
					<ButtonRow buttons={bottomActions} />
				</BottomActionWrapper>
			)}
		</CardWrapper>
	);
};

export default Card;
