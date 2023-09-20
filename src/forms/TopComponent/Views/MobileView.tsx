import * as React from "react";
import { forwardRef, memo, ReactElement } from "react";
import styled from "styled-components";

// Components
import ClearIcon from "@mui/icons-material/Clear";
import TitleWrapper from "../Utils/TitleWrapper";
import {
	CheckboxWrapper,
	Row,
} from "../TopComponent.styled";

// Utils
import theme from "@root/theme/theme";
import { BaseTopComponentProps } from "../TopComponentTypes";
import { TitleRow } from "./Views.styled";
import ButtonRow from "@root/components/ButtonRow/ButtonRow";

const MobileActionsRow = styled(Row)`
  background-color: ${theme.newColors.grey2["100"]};
  padding: 12px 20px;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 100;

  svg {
    align-self: center;
  }
`;

const StyledClearIcon = styled(ClearIcon)`
  color: ${theme.newColors.almostBlack["100"]};
`;

const MobileCheckboxHelpIconRow = styled(Row)`
  padding: 0 20px 20px 20px;
`;

type MobileViewProps = {
	checkbox: JSX.Element;
} & BaseTopComponentProps;

const MobileView = forwardRef<HTMLDivElement, MobileViewProps>((props: MobileViewProps, ref): ReactElement => {
	const {
		buttons,
		title,
		onBack,
		backLabel,
		description,
		showActive,
		tooltipInfo,
		helpIcon,
		checkbox,
		view,
	} = props;

	return (
		<div ref={ref}>
			<MobileActionsRow className={view}>
				<StyledClearIcon onClick={onBack} />
				{buttons && (
					<ButtonRow buttons={buttons} gap="small" />
				)}
			</MobileActionsRow>
			<TitleRow view={view}>
				<TitleWrapper
					title={title}
					onBack={onBack}
					backLabel={backLabel}
					description={description}
				/>
			</TitleRow>
			{(showActive || tooltipInfo) && (
				<MobileCheckboxHelpIconRow>
					{showActive && <CheckboxWrapper>{checkbox}</CheckboxWrapper>}
					{tooltipInfo && helpIcon}
				</MobileCheckboxHelpIconRow>
			)}
		</div>
	);
});

MobileView.displayName = "MobileView";


export default memo(MobileView);
