import styled from 'styled-components';
import theme from '@root/theme';
import { Sizes } from '@root/theme/sizes';

export const StyledFieldWrapper = styled.div`
  font-family: ${theme.fontFamily};
  padding: 20px;
  background-color: ${(pr) =>
		pr.error ? theme.colors.lightRed : 'transparent'};
//   width: ${(pr) => pr.size ? pr.size : Sizes.sm};
  width: ${(pr) => pr.size ? pr.size : 'fit-content'};
//   width: fit-content;
`;

export const StyledFieldContainer = styled.div`
	display: flex;
	flex-direction: row;
`;
