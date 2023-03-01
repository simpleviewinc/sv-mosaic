import * as React from "react";
import { forwardRef, memo, ReactElement } from "react";
import styled from "styled-components";

// Components
import ClearIcon from "@mui/icons-material/Clear";
import Button from "@root/components/Button";
import TitleWrapper from "../Utils/TitleWrapper";
import {
	CheckboxWrapper,
	Row,
} from "../TopComponent.styled";

// Utils
import theme from "@root/theme/theme";
import { BaseTopComponentProps, TopComponentProps } from "../TopComponentTypes";
import { TitleRow } from "./Views.styled";

const MobileActionsRow = styled(Row)`
  background-color: ${theme.newColors.grey2["100"]};
  padding: 12px 20px;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 100;

  .button {
    margin-right: 20px;
  }

  .button:last-child {
    margin-right: 0px;
  }

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
	onCancel: TopComponentProps["onCancel"];
	checkbox: JSX.Element;
} & BaseTopComponentProps;

const MobileView = forwardRef<HTMLDivElement, MobileViewProps>((props: MobileViewProps, ref): ReactElement => {
	const {
		buttons,
		onCancel,
		title,
		onBack,
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
				<StyledClearIcon onClick={onCancel} />
				{buttons && (
					<div>
						{buttons.map((button, idx) => (
							<Button key={`${button.label}-${idx}`} {...button} />
						))}
					</div>
				)}
			</MobileActionsRow>
			<TitleRow view={view}>
				<TitleWrapper
					title={title}
					onBack={onBack}
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
