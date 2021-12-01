import styled from 'styled-components';
import theme from '@root/theme';

export const StyledFieldWrapper = styled.div`
  font-family: ${theme.fontFamily};
  padding: 20px;
  background-color: ${(pr) =>
		pr.error ? theme.colors.lightRed : 'transparent'};
  margin: ${(pr) => pr.type === 'Table' ? '0 40px' : ''};
  width: fit-content;
`;

export const StyledFieldContainer = styled.div`
	display: flex;
	flex-direction: row;
`;
