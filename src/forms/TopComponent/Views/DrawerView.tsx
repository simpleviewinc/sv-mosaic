import * as React from "react";
import { memo, ReactElement } from "react";
import styled from "styled-components";

// Components
import { ButtonsWrapper, Row, StyledColumn } from "../TopComponent.styled";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@root/components/Button";
import { FormTitle } from "../Utils/TitleWrapper";

// Utils
import theme, { Views } from "../../../theme/theme";
import { BaseTopComponentProps, TopComponentProps } from "../TopComponentTypes";

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
					<FormTitle type={Views.drawer} data-testid="drawer-title-test">
						{title}
					</FormTitle>
					{tooltipInfo && helpIcon}
				</Row>
				{buttons && (
					<ButtonsWrapper style={{ alignItems: "center" }}>
						{buttons.map((button, idx) => (
							<Button key={`${button.label}-${idx}`} {...button} />
						))}
					</ButtonsWrapper>
				)}
			</DrawerViewColumn>
		</>
	);
};

export default memo(DrawerView);
