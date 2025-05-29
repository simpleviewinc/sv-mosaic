import * as React from "react";
import type { ReactElement } from "react";
import { memo } from "react";

// Utils
import { Description, Title } from "./TitleWrapper.styled";
import type { TitleWrapperProps } from "./TitleWrapperTypes";
import TitleBackButton from "./TitleBackButton";
import { TitleText } from "../Typography";

const TitleWrapper = (props: TitleWrapperProps): ReactElement => {
	const {
		title,
		description,
		collapse,
		backLabel,
	} = props;

	return (
		<>
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
			{description && <Description>{description}</Description>}
		</>
	);
};

export default memo(TitleWrapper);
