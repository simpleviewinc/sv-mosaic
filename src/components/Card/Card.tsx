import * as React from "react";
import { ReactElement } from "react";
import { CardProps } from "./CardTypes";

import testIds from "@root/utils/testIds";
import {
	BottomActionWrapper,
	ContentWrapper,
	CardWrapper,
	StyledHr,
	TitleWrapper,
	TitleBar,
} from "./Card.styled";
import ButtonRow from "../ButtonRow/ButtonRow";
import { SubtitleText } from "../Typography";

const Card = (props: CardProps): ReactElement => {
	const { bottomActions, content, title, titleIcon, topActions } = props;
	const TitleIcon = titleIcon;

	return (
		<CardWrapper>
			<TitleBar>
				<TitleWrapper>
					{titleIcon && <TitleIcon data-testid="contacts-icon-test" />}
					<SubtitleText maxLines={1}>{title}</SubtitleText>
				</TitleWrapper>
				{topActions?.length > 0 && (
					<ButtonRow buttons={topActions} />
				)}
			</TitleBar>
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
