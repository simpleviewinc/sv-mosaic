import * as React from "react";
import styled from "styled-components";
// Material UI
import { InputLabel } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import theme from "../../theme";
import Tooltip from "../Tooltip";
const LabelWrapper = styled.div `
  display: flex;
  margin-bottom: ${pr => pr.labelMargin};
  justify-content: space-between;
  width: ${(pr) => pr.size};
  font-family: ${theme.fontFamily};

  .MuiInputLabel-root {
    font-family: inherit;
    font-size: 16px;
    color:  ${pr => pr.disabled ? theme.colors.labelDisabled : theme.colors.almostBlack};
    word-wrap: break-word;

  :after {
      content: "${(pr) => (pr.required ? "*" : "")}";
      color: ${theme.colors.red};
    }
  }
`;
const CharCounterWrapper = styled.div `
  color: ${theme.colors.gray600};
  align-self: flex-end;
  font-size: 12px;
`;
const StyledInfoOutlinedIcon = styled(InfoOutlinedIcon) `
  && {
	fill: ${theme.colors.blueTeal};
	font-size: 16px;
	width: 24px;
	height: 24px;
	margin-left: 8px;
  }
`;
const StyledInputTooltipWrapper = styled.div `
  display: flex;
  flex-direction: row;
`;
const StyledInputLabel = styled(InputLabel) `
  align-self: center;
`;
const Label = (props) => {
    const { children, className, disabled, required, htmlFor, value, maxCharacters, tooltip, instructionText, labelMargin, } = props;
    return (React.createElement(LabelWrapper, { className: className, disabled: disabled, required: required, labelMargin: labelMargin },
        React.createElement(StyledInputTooltipWrapper, null,
            React.createElement(StyledInputLabel, { htmlFor: htmlFor }, children),
            tooltip &&
                React.createElement(Tooltip, { text: instructionText, type: 'advanced' },
                    React.createElement(StyledInfoOutlinedIcon, null))),
        maxCharacters > 0 && (React.createElement(CharCounterWrapper, null, (!value ? "0" : value.length) + "/" + maxCharacters))));
};
export default Label;
