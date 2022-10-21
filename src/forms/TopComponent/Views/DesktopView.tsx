import * as React from "react";
import { memo, ReactElement } from "react";

// Components
import FormNav from "@root/forms/FormNav";
import Button from "@root/components/Button";

// Styled components
import styled from "styled-components";
import theme from "@root/theme";
import {
	FlexContainer,
	StyledColumn
} from "../TopComponent.styled";

// Utils
import { BREAKPOINTS } from "@root/theme/theme";
import TitleWrapper from "../Utils/TitleWrapper";
import { BaseTopComponentProps, TopComponentProps } from "../TopComponentTypes";

const BIG_SCREEN_BREAKPOINT = BREAKPOINTS.topComponent.bigScreenView + "px";

const DesktopViewColumn = styled(StyledColumn)`
	justify-content: space-between;
	padding: ${pr => pr.sections ? "24px 20px 0px 20px" : "24px 20px 20px 20px"};
	top: 0;
	z-index: 100;

	& .form-nav-wrapper {
		margin-top: 20px;
	}

	@media (min-width: ${BIG_SCREEN_BREAKPOINT}) {
		border-bottom: 2px solid ${theme.colors.gray200};
		margin-bottom: 0px;
		padding: 24px 20px 20px 20px;
	}
`;

const DesktopActionsRow = styled(FlexContainer)`
  align-items: flex-start;

  button:last-child {
    margin-left: 20px;
  }

  .MuiFormControlLabel-root {
    margin-right: 20px;
  }
`;

type DesktopViewProps = {
	sections: TopComponentProps["sections"];
	checkbox: JSX.Element;
	sectionsRefs?: any[];
	contentRef?: any;
} & BaseTopComponentProps;

const DesktopView = (props: DesktopViewProps): ReactElement => {
	const {
		title,
		description,
		tooltipInfo,
		buttons,
		helpIcon,
		showActive,
		sections,
		checkbox,
		view,
		sectionsRefs,
		contentRef,
	} = props;

	return (
		<DesktopViewColumn sections={sections && sections.length > 1}>
			<FlexContainer>
				<TitleWrapper
					title={title}
					description={description}
					view={view}
				/>
				<DesktopActionsRow>
					{tooltipInfo && helpIcon}
					{showActive && checkbox}
					{buttons && buttons.map((button, idx) => (
						<Button key={`${button.label}-${idx}`} {...button}/>
					))}
				</DesktopActionsRow>
			</FlexContainer>
			{(view !== "BIG_DESKTOP" && sections) && (
				<FlexContainer>
					<FormNav sectionsRefs={sectionsRefs} sections={sections} contentRef={contentRef}/>
				</FlexContainer>
			)}
		</DesktopViewColumn>
	);
};

export default memo(DesktopView);
