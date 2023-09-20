import * as React from "react";
import { memo, ReactElement } from "react";

// Styled components
import styled from "styled-components";

// Utils
import theme from "@root/theme/theme";
import { H1 } from "@root/components/Typography";
import Button from "@root/components/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { TitleWrapperProps } from "./TitleWrapperTypes";

const StyledWrapper = styled.div`
	display: flex;
	align-items: center;

	& .back-button > button{
		margin: 0px 8px 0px -2px !important;
	}
`;

const Description = styled.span`
	color: ${theme.newColors.grey3["100"]};
	font-family: ${theme.museoFont};
	font-weight: ${theme.fontWeight.light};
	font-size: 14px;
	margin-top: 5px;

	@media (max-width: ${theme.breakpoints.mobile}) {
		align-self: center;
	}
`;

const TitleWrapper = (props: TitleWrapperProps): ReactElement => {
	const {
		title,
		description,
		backLabel = "Go back"
	} = props;

	return (
		<>
			<StyledWrapper>
				{props.onBack && (
					<Button
						className="back-button"
						color="black"
						variant="icon"
						mIcon={ChevronLeftIcon}
						onClick={props.onBack}
						muiAttrs={{ "aria-label": backLabel }}
					/>
				)}
				<H1 attrs={{ title }} >{title}</H1>
			</StyledWrapper>
			{description && <Description>{description}</Description>}
		</>
	);
};

export default memo(TitleWrapper);
