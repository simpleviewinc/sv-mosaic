import * as React from 'react';
import { memo, ReactElement } from 'react';

// Styled components
import styled from 'styled-components';
import { CheckboxWrapper, Column, Description, FormTitle, Row, StyledClearIcon } from '../TopComponent.styled';

// Utils
import theme, { BREAKPOINTS } from '@root/theme/theme';

// Mobile view styles

// export const MobileColumn = styled(Column)`
//   border-bottom: 2px solid ${theme.colors.gray200};
//   font-family: ${theme.fontFamily};
//   width: 100%;
// `;

export const MobileActionsRow = styled(Row)`
  background-color: ${theme.colors.gray200};
  padding: 12px 20px;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 9999;

  svg {
    align-self: center;
  }
`;

export const MobileTitleRow = styled(Row)`
  padding: 20px 20px;
`;

export const MobileCheckboxHelpIconRow = styled(Row)`
  padding: 0 20px 20px 20px;
`;

const MobileView = (props): ReactElement => {
	const {
		onCancel,
		submitButton,
		title,
		description,
		showActive,
		tooltipInfo,
		helpIcon,
		checkbox,
	} = props;

	return (
		<>
			<MobileActionsRow>
				<StyledClearIcon onClick={onCancel} />
				{submitButton}
			</MobileActionsRow>
			<MobileTitleRow>
				<FormTitle>{title}</FormTitle>
				<Description>{description}</Description>
			</MobileTitleRow>
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