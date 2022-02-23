import * as React from 'react';
import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

// Material UI
import { InputLabel } from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import theme from '../../utils/theme';
import Tooltip from '../Tooltip';

const LabelWrapper = styled.div`
  display: flex;
  margin-bottom: ${pr => pr.labelMargin};
  justify-content: space-between;
  width: ${(pr) => pr.size};
  font-family: ${theme.fontFamily};
  
  .MuiInputLabel-root {
    font-family: inherit;
    font-size: 16px;
    color:  ${pr =>
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

const StyledInfoOutlinedIcon = styled(InfoOutlinedIcon)`
  && {
	fill: ${theme.colors.blueTeal};
	font-size: 16px;
	width: 24px;
	height: 24px;
	margin-left: 8px;
  }
`;

const StyledInputTooltipWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledInputLabel = styled(InputLabel)`
  align-self: center;
`;

interface LabelProps {
  className?: string;
  disabled?: boolean;
  required?: boolean;
  htmlFor?: string;
  children?: ReactNode;
  value?: string;
  maxCharacters?: number;
  instructionText?: string;
  tooltip?: boolean
  labelMargin?: string;
}

const Label = (props: LabelProps): ReactElement => {
	const {
		children,
		className,
		disabled,
		required,
		htmlFor,
		value,
		maxCharacters,
		tooltip,
		instructionText,
		labelMargin,
	} = props;

	return (
		<LabelWrapper className={className} disabled={disabled} required={required} labelMargin={labelMargin}>
			<StyledInputTooltipWrapper>
				<StyledInputLabel htmlFor={htmlFor}>{children}</StyledInputLabel>
				{tooltip && 
					<Tooltip text={instructionText} type='advanced'>
						<StyledInfoOutlinedIcon />
					</Tooltip>
				}
			</StyledInputTooltipWrapper>
			{maxCharacters > 0 && (
				<CharCounterWrapper>
					{(!value ? '0' : value.length) + '/' + maxCharacters}
				</CharCounterWrapper>
			)}
		</LabelWrapper>
	);
};

export default Label;
