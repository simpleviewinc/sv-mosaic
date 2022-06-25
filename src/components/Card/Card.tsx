import * as React from "react";
import { ReactElement } from "react";
import { CardProps } from "./CardTypes";
import Button from "../Button";
import {
	BottomActionWrapper,
	ContentWrapper,
	CardWrapper,
	StyledHr,
	TitleWrapper,
	TitleBar,
} from "./Card.styled";

const Card = (props: CardProps): ReactElement => {
	const {
		bottomAction,
		content,
		title,
		titleIcon,
		topAction,
	} = props;

	return (
		<CardWrapper>
			<TitleBar>
				<TitleWrapper>
					{titleIcon}
					{title}
				</TitleWrapper>
				{topAction && <Button {...topAction}></Button>}
			</TitleBar>
			<ContentWrapper>
				{content.map((element, idx) => (
					<div key={`card-content-${idx}`}>
						{element}
						{idx !== content.length - 1 && <StyledHr />}
					</div>
				))}
			</ContentWrapper>
			{bottomAction && (
				<BottomActionWrapper>
					<Button {...bottomAction}></Button>
				</BottomActionWrapper>
			)}
		</CardWrapper>
	);
};

export default Card;
