import * as React from "react";
import { ReactElement } from "react";
import { CardProps } from "./CardTypes";
import Button from "../Button";
import {
	BottomActionWrapper,
	ContentWrapper,
	CardWrapper,
	TitleWrapper,
	TitleBar,
} from "./Card.styled";

const Card = (props: CardProps): ReactElement => {
	const {
		bottomAction,
		content,
		size = "lg",
		title,
		titleIcon,
		topAction,
	} = props;

	return (
		<CardWrapper>
			<TitleBar size={size}>
				<TitleWrapper>
					{titleIcon}
					{title}
				</TitleWrapper>
				{topAction && (
					<Button {...topAction}></Button>
				)}
			</TitleBar>
			<ContentWrapper size={size}>{content}</ContentWrapper>
			{bottomAction && (
				<BottomActionWrapper>
					<Button {...bottomAction}></Button>
				</BottomActionWrapper>
			)}
		</CardWrapper>
	);
};

export default Card;
