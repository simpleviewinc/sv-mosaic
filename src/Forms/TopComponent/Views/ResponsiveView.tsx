import * as React from 'react';
import { memo, ReactElement } from 'react';

// Components
import FormNav from '@root/forms/FormNav';

// Styled components
import styled from 'styled-components';
import {
	CheckboxWrapper,
	ButtonsWrapper,
	Row,
	StyledColumn
} from '../TopComponent.styled';
import TitleWrapper from '../Utils/TitleWrapper';

const ResponsiveViewColumn = styled(StyledColumn)`
  padding: 20px 20px 0px 20px;
  z-index: 9999;
`;

const ResponsiveActionsRow = styled(Row)`
  align-self: ${(pr) => (pr.showActive ? '' : 'flex-end')};
  margin-top: 16px;
  margin-bottom: 37px;
`;


const ResponsiveDrawer = (props): ReactElement => {
	const {
		title,
		description,
		tooltipInfo,
		helpIcon,
		showActive,
		buttons,
		sections,
		checkbox,
	} = props;

	return (
		<ResponsiveViewColumn>
			<Row>
				<TitleWrapper
					title={title}
					description={description}
					view={'RESPONSIVE'}
				/>
				{tooltipInfo && helpIcon}
			</Row>
			<ResponsiveActionsRow showActive={showActive}>
				{showActive && <CheckboxWrapper>{checkbox}</CheckboxWrapper>}
				<ButtonsWrapper>{buttons}</ButtonsWrapper>
			</ResponsiveActionsRow>
			{sections &&
				<FormNav sections={sections} />
			}
		</ResponsiveViewColumn>
	);
}

export default memo(ResponsiveDrawer)