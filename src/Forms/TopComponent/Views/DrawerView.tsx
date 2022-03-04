import * as React from 'react';
import { memo, ReactElement } from 'react';

// Styled components
import styled from 'styled-components';
import { FormTitle, ResponsiveButtonsWrapper, Row, StyledColumn } from '../TopComponent.styled';

// Material UI
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

// Utils
import theme, { BREAKPOINTS } from '@root/theme/theme';

export const DrawerViewColumn = styled(StyledColumn)`
  background-color: ${theme.colors.grayHover};
  box-shadow: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  z-index: 9999;
`;

export const DrawerSectionWrapper = styled.div`
  padding: 0px 40px;
`;

const DrawerView = (props): ReactElement => {
	const {
		onCancel,
		type,
		title,
		tooltipInfo,
		helpIcon,
		buttons,
	} = props;

	return (
		<>
			<DrawerViewColumn type={type}>
				<Row>
					{onCancel && (
						<IconButton
							data-testid='close-icon'
							aria-label='close'
							disableRipple
							onClick={onCancel}
							style={{ marginRight: '8px' }}
						>
							<CloseIcon />
						</IconButton>
					)}
					<FormTitle type={type}>{title}</FormTitle>
					{tooltipInfo && helpIcon}
				</Row>
				<ResponsiveButtonsWrapper style={{ alignItems: 'center' }}>{buttons}</ResponsiveButtonsWrapper>
			</DrawerViewColumn>
		</>
	);
}

export default memo(DrawerView);