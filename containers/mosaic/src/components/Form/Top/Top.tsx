import * as React from "react";
import type {
	ReactElement } from "react";
import {
	memo,
} from "react";

// Types and Utils
import type { TopProps } from "./TopTypes";

// Styles
import {
	TopRoot,
	Heading,
	PrimaryActions,
	SmallBack,
	SmallBackIcon,
	TopWrapper,
	SmallDescription,
	LargeDescription,
} from "./TopStyled";
import ButtonRow from "@root/components/ButtonRow/ButtonRow";
import { Title } from "@root/components/Title/TitleWrapper.styled";
import { TitleBackButton } from "@root/components/Title";
import { TitleText } from "@root/components/Typography";

const Top = (props: TopProps): ReactElement => {
	const {
		buttons,
		description,
		title,
		onBack,
		backLabel,
		bottomBorder,
		collapse,
		skeleton,
	} = props;

	return (
		<TopRoot $bottomBorder={bottomBorder}>
			<TopWrapper>
				<Heading>
					<Title>
						{props.onBack && (
							<TitleBackButton
								collapse={collapse}
								onClick={props.onBack}
								label={backLabel}
							/>
						)}
						<TitleText attrs={{ title }} >{title}</TitleText>
					</Title>
				</Heading>
				{description && <SmallDescription>{description}</SmallDescription>}
				<PrimaryActions>
					{onBack && (
						<SmallBack type="button" onClick={onBack}>
							<SmallBackIcon />
						</SmallBack>
					)}
					<ButtonRow
						buttons={buttons}
						skeleton={skeleton}
					/>
				</PrimaryActions>
			</TopWrapper>
			{description && <LargeDescription>{description}</LargeDescription>}
		</TopRoot>
	);
};

export default memo(Top);
