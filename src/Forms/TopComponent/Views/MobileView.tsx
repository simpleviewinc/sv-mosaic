import * as React from 'react';
import { memo, ReactElement } from 'react';

// Styled components
import styled from 'styled-components';
import {
	CheckboxWrapper,
	Row,
} from '../TopComponent.styled';

// MUI
import ClearIcon from '@material-ui/icons/Clear';

// Utils
import theme from '@root/theme/theme';
import TitleWrapper from '../Utils/TitleWrapper';
import { BaseTopComponentProps, TopComponentProps } from '../TopComponentTypes';

const MobileActionsRow = styled(Row)`
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

const StyledClearIcon = styled(ClearIcon)`
  color: ${theme.colors.almostBlack};
`;

const MobileCheckboxHelpIconRow = styled(Row)`
  padding: 0 20px 20px 20px;
`;

type MobileViewProps = {
	onCancel: TopComponentProps['onCancel'];
	submitButton: JSX.Element;
	checkbox: JSX.Element;
} & BaseTopComponentProps;

const MobileView = (props: MobileViewProps): ReactElement => {
	const {
		onCancel,
		submitButton,
		title,
		description,
		showActive,
		tooltipInfo,
		helpIcon,
		checkbox,
		view,
	} = props;

	return (
		<>
			<MobileActionsRow>
				<StyledClearIcon onClick={onCancel} />
				{submitButton}
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