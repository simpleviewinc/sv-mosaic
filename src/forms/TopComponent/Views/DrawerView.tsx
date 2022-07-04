import * as React from "react";
import { memo, ReactElement, useMemo } from "react";
import styled from "styled-components";

// Components
import { ButtonsWrapper, Row, StyledColumn } from "../TopComponent.styled";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@root/components/Button";
import { FormTitle } from "../Utils/TitleWrapper";

// Utils
import theme from "../../../theme/theme";
import { BaseTopComponentProps, TopComponentProps } from "../TopComponentTypes";
import { filterAction } from "@root/components/DataView/utils/bulkActionsUtils";

const DrawerViewColumn = styled(StyledColumn)`
  background-color: ${theme.colors.grayHover};
  box-shadow: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  z-index: 9999;
`;

type DrawerViewProps = {
  onCancel: TopComponentProps["onCancel"];
} & BaseTopComponentProps;

const DrawerView = (props: DrawerViewProps): ReactElement => {
	const {
		buttons,
		onCancel,
		view,
		title,
		tooltipInfo,
		helpIcon,
	} = props;

	const filteredButtons = useMemo(() => (
		buttons?.filter(button => filterAction(button))
	) ,[buttons]);

	return (
		<>
			<DrawerViewColumn type={view}>
				<Row>
					{onCancel && (
						<IconButton
							data-testid="close-icon"
							aria-label="close"
							disableRipple
							onClick={onCancel}
							style={{ marginRight: "8px" }}
							size="large"
						>
							<CloseIcon />
						</IconButton>
					)}
					<FormTitle type={view} data-testid="drawer-title-test">
						{title}
					</FormTitle>
					{tooltipInfo && helpIcon}
				</Row>
				{filteredButtons && (
					<ButtonsWrapper style={{ alignItems: "center" }}>
						{filteredButtons.map((button, idx) => (
							<Button key={`${button.label}-${idx}`} {...button} />
						))}
					</ButtonsWrapper>
				)}
			</DrawerViewColumn>
		</>
	);
};

export default memo(DrawerView);
