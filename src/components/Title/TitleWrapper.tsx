import * as React from "react";
import { memo, ReactElement } from "react";

// Utils
import { H1 } from "@root/components/Typography";
import { Description, Title } from "./TitleWrapper.styled";
import { TitleWrapperProps } from "./TitleWrapperTypes";
import TitleBackButton from "./TitleBackButton";

const TitleWrapper = (props: TitleWrapperProps): ReactElement => {
	const {
		title,
		description,
		collapse,
		backLabel
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
				<H1 attrs={{ title }} >{title}</H1>
			</Title>
			{description && <Description>{description}</Description>}
		</>
	);
};

export default memo(TitleWrapper);
