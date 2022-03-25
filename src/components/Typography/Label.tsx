import * as React from 'react';
import { ReactElement } from 'react';
import styled from 'styled-components';

// Material UI
import { InputLabel } from '@material-ui/core';

import { TypographyGenericProps } from './TypographyTypes';
import theme from '../../utils/theme';

const LabelWrapper = styled.div`
  display: flex;
  margin-bottom: 8px;
  justify-content: space-between;
  width: ${(pr) => pr.size};
  font-family: ${theme.fontFamily};
  
  .MuiInputLabel-root {
    font-family: inherit;
    font-size: 16px;
    color:  ${(pr) =>
		pr.disabled ? theme.colors.labelDisabled : theme.colors.almostBlack};
    word-wrap: break-word;

  :after {
      content: "${(pr) => (pr.required ? '*' : '')}";
      color: ${theme.colors.red};
    }
  }
`;

const CharCounterWrapper = styled.div`
  color: ${theme.colors.gray600};
  align-self: flex-end;
  font-size: 12px;
`;

interface LabelProps {
  disabled?: boolean;
  required?: boolean;
  htmlFor?: string;
  children?: React.ReactNode;
  value?: string;
  maxCharacters?: number;
}

const Label = (props: LabelProps & TypographyGenericProps): ReactElement => {
	const { children, disabled, required, htmlFor, value, maxCharacters } = props;

	return (
		<LabelWrapper disabled={disabled} required={required}>
			<InputLabel htmlFor={htmlFor}>{children}</InputLabel>
			{maxCharacters > 0 && (
				<CharCounterWrapper>
					{value.length + '/' + maxCharacters}
				</CharCounterWrapper>
			)}
		</LabelWrapper>
	);
};

export default Label;
