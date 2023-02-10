import * as React from "react";
import { memo, ReactElement, forwardRef } from "react";

// Components
import FormNav from "@root/forms/FormNav";
import Button from "@root/components/Button";

// Styled components
import styled from "styled-components";
import {
	FlexContainer,
	StyledColumn
} from "../TopComponent.styled";

// Utils
import TitleWrapper from "../Utils/TitleWrapper";
import { BaseTopComponentProps, TopComponentProps } from "../TopComponentTypes";
import { Views } from "@root/theme/theme";

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
} & BaseTopComponentProps;

const DesktopView = forwardRef((props: DesktopViewProps, ref): ReactElement => {
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
		formContentRef,
	} = props;

	return (
		<StyledColumn className={view} ref={ref} sections={sections && sections.length > 1}>
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
			{(view !== Views.bigDesktop && sections) && (
				<FlexContainer>
					<FormNav
						sectionsRefs={sectionsRefs}
						sections={sections}
						formContentRef={formContentRef}
					/>
				</FlexContainer>
			)}
		</StyledColumn>
	);
});

DesktopView.displayName = "DesktopView";

export default memo(DesktopView);
