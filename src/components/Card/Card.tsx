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
	ButtonsWrapper
} from "./Card.styled";

const Card = (props: CardProps): ReactElement => {
	const { bottomActions, content, title, titleIcon, topActions } = props;

	return (
		<CardWrapper>
			<TitleBar>
				<TitleWrapper>
					{titleIcon}
					<p className="card-title">{title}</p>
				</TitleWrapper>
				{topActions?.length > 0 && (
					<ButtonsWrapper>
						{topActions.map((button, idx) => (
							<Button key={`${button.label}-${idx}`} {...button} />
						))}
					</ButtonsWrapper>
				)}
			</TitleBar>
			<ContentWrapper>
				{content.map((element, idx) => (
					<div key={`card-content-${idx}`}>
						{element}
						{idx !== content.length - 1 && <StyledHr />}
					</div>
				))}
			</ContentWrapper>
			{bottomActions?.length > 0 && (
				<BottomActionWrapper>
					<ButtonsWrapper>
						{bottomActions.map((button, idx) => (
							<Button key={`${button.label}-${idx}`} {...button} />
						))}
					</ButtonsWrapper>
				</BottomActionWrapper>
			)}
		</CardWrapper>
	);
};

export default Card;
