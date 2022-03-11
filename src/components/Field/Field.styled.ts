import styled from 'styled-components';
import theme from '@root/theme';

export const StyledFieldWrapper = styled.div`
  font-family: ${theme.fontFamily};
  padding: 20px;
  background-color: ${(pr) =>
		pr.error ? theme.colors.lightRed : 'transparent'};
  width: ${(pr) => pr.size ? pr.size : 'fit-content'};
`;

export const StyledFieldContainer = styled.div`
	display: flex;
	flex-direction: row;
`;
