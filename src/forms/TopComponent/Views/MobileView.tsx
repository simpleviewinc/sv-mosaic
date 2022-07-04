import * as React from "react";
import { memo, ReactElement, useMemo } from "react";
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
import { filterAction } from "@root/components/DataView/utils/bulkActionsUtils";

const MobileActionsRow = styled(Row)`
  background-color: ${theme.colors.gray200};
  padding: 12px 20px;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 1000;

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
  color: ${theme.colors.almostBlack};
`;

const MobileCheckboxHelpIconRow = styled(Row)`
  padding: 0 20px 20px 20px;
`;

type MobileViewProps = {
	onCancel: TopComponentProps["onCancel"];
	checkbox: JSX.Element;
} & BaseTopComponentProps;

const MobileView = (props: MobileViewProps): ReactElement => {
	const {
		buttons,
		onCancel,
		title,
		description,
		showActive,
		tooltipInfo,
		helpIcon,
		checkbox,
		view,
	} = props;

	const filteredButtons = useMemo(() => (
		buttons?.filter(button => filterAction(button))
	) ,[buttons]);

	return (
		<>
			<MobileActionsRow>
				<StyledClearIcon onClick={onCancel} />
				{filteredButtons && (
					<div>
						{filteredButtons.map((button, idx) => (
							<Button key={`${button.label}-${idx}`} {...button} />
						))}
					</div>
				)}
			</MobileActionsRow>
			<TitleWrapper
				title={title}
				description={description}
				view={view}
			/>
			{(showActive || tooltipInfo) && (
				<MobileCheckboxHelpIconRow>
					{showActive && <CheckboxWrapper>{checkbox}</CheckboxWrapper>}
					{tooltipInfo && helpIcon}
				</MobileCheckboxHelpIconRow>
			)}
		</>
	);
}

export default memo(MobileView);