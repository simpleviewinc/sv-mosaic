import * as React from "react";
import { ReactElement, ReactNode } from "react";
import styled from "styled-components";

// Material UI
import { InputLabel } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import theme from "@root/theme";
import Tooltip from "../Tooltip";

const LabelWrapper = styled.div`
  display: flex;
  margin-bottom: 8px;
  justify-content: space-between;
  width: ${(pr) => pr.size};
  font-family: ${theme.fontFamily};

  .MuiInputLabel-root {
    font-family: inherit;
    font-size: 16px;
    color:  ${pr =>
		pr.disabled ? theme.colors.labelDisabled : theme.newColors.almostBlack["100"]};
    word-wrap: break-word;

  :after {
      content: "${(pr) => (pr.required ? "*" : "")}";
      color: ${theme.newColors.darkRed["100"]};
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
	fill: ${theme.newColors.realTeal["100"]};
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
  font-weight: ${theme.fontWeight.medium} !important;
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
  tooltip?: boolean;
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
	} = props;

	return (
		<LabelWrapper className={className} disabled={disabled} required={required}>
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
					{(!value ? "0" : value.length) + "/" + maxCharacters}
				</CharCounterWrapper>
			)}
		</LabelWrapper>
	);
};

export default Label;
