import * as React from "react";
import { memo, ReactElement } from "react";
import styled from "styled-components";

// Components
import { ButtonsWrapper, Row, StyledColumn } from "../TopComponent.styled";
import Button from "@root/components/Button";

// Utils
import theme from "../../../theme/theme";
import { BaseTopComponentProps } from "../TopComponentTypes";
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

const DrawerView = (props: BaseTopComponentProps): ReactElement => {
	const {
		buttons,
		view,
		title,
		tooltipInfo,
		helpIcon,
	} = props;

	return (
		<>
			<DrawerViewColumn className={view} type={view}>
				<Row className={view}>
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
