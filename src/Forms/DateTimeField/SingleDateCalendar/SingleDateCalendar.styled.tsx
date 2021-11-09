import theme from '@root/theme';
import styled from 'styled-components';

export const DateTimePickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DateFormatSpan = styled.span`
	font-size: 12px;
	color: ${theme.colors.gray600};
`;
