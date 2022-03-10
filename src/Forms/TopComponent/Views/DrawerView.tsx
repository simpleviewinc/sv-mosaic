import * as React from 'react';
import { memo, ReactElement } from 'react';

// Styled components
import styled from 'styled-components';
import {
	ButtonsWrapper,
	Row,
	StyledColumn
} from '../TopComponent.styled';

// Material UI
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

// Utils
import theme from '../../../theme/theme';
import { FormTitle } from '../Utils/TitleWrapper';

const DrawerViewColumn = styled(StyledColumn)`
  background-color: ${theme.colors.grayHover};
  box-shadow: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  z-index: 9999;
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
					<FormTitle type={type} data-testid='drawer-title-test'>{title}</FormTitle>
					{tooltipInfo && helpIcon}
				</Row>
				<ButtonsWrapper style={{ alignItems: 'center' }}>{buttons}</ButtonsWrapper>
			</DrawerViewColumn>
		</>
	);
}

export default memo(DrawerView);