import * as React from "react";
import { memo, ReactElement, useMemo } from "react";

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
import { filterAction } from "@root/components/DataView/utils/bulkActionsUtils";

const BIG_SCREEN_BREAKPOINT = BREAKPOINTS.topComponent.bigScreenView + "px";

const DesktopViewColumn = styled(StyledColumn)`
  justify-content: space-between;
  padding: 24px 20px 0px 20px;
  top: 0;
  z-index: 1000;

  @media (min-width: ${BIG_SCREEN_BREAKPOINT}) {
    border-bottom: 2px solid ${theme.colors.gray200};
    margin-bottom: 0px;
    padding: 24px 20px 16px 20px;
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

const DesktopTitleActionsRow = styled(FlexContainer)`
  margin-bottom: 30px;
`;

type DesktopViewProps = {
	sections: TopComponentProps["sections"];
	checkbox: JSX.Element;
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
	} = props;

	const filteredButtons = useMemo(() => (
		buttons?.filter(button => filterAction(button))
	) ,[buttons]);

	return (
		<DesktopViewColumn>
			<DesktopTitleActionsRow>
				<TitleWrapper
					title={title}
					description={description}
					view={view}
				/>
				<DesktopActionsRow>
					{tooltipInfo && helpIcon}
					{showActive && checkbox}
					{filteredButtons && filteredButtons.map((button, idx) => (
						<Button key={`${button.label}-${idx}`} {...button}/>
					))}
				</DesktopActionsRow>
			</DesktopTitleActionsRow>
			{(view !== "BIG_DESKTOP" && sections) && (
				<FlexContainer>
					<FormNav sections={sections} />
				</FlexContainer>
			)}
		</DesktopViewColumn>
	);
};

export default memo(DesktopView);