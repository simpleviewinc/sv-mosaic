import * as React from "react";
import { memo, ReactElement } from "react";
import styled from "styled-components";

// Components
import { ButtonsWrapper, Row, StyledColumn } from "../TopComponent.styled";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@root/components/Button";

// Utils
import theme from "../../../theme/theme";
import { BaseTopComponentProps, TopComponentProps } from "../TopComponentTypes";
import TitleWrapper from "../Utils/TitleWrapper";

const DrawerViewColumn = styled(StyledColumn)`
  background-color: ${theme.newColors.grey2["100"]};
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
			<DrawerViewColumn className={view} type={view}>
				<Row className={view}>
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
					<TitleWrapper title={title} />
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
