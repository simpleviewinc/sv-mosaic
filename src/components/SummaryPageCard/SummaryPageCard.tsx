import * as React from "react";
import { ReactElement } from "react";
import { SummaryPageCardProps } from "./SummaryPageCardTypes";
import Button from "../Button";
import {
	BottomActionWrapper,
	ContentWrapper,
	RecentActivityWrapper,
	TitleWrapper,
	TitleBar,
} from "./SummaryPageCard.styled";

const RecentActity = (props: SummaryPageCardProps): ReactElement => {
	const {
		bottomAction,
		content,
		size = "lg",
		title,
		titleIcon,
		topAction,
	} = props;

	return (
		<RecentActivityWrapper>
			<TitleBar size={size}>
				<TitleWrapper>
					{titleIcon}
					{title}
				</TitleWrapper>
				{topAction && (
					<Button {...topAction} muiAttrs={{ disableRipple: true }}></Button>
				)}
			</TitleBar>
			<ContentWrapper size={size}>{content}</ContentWrapper>
			{bottomAction && (
				<BottomActionWrapper>
					<Button {...bottomAction} muiAttrs={{ disableRipple: true }}></Button>
				</BottomActionWrapper>
			)}
		</RecentActivityWrapper>
	);
};

export default RecentActity;
