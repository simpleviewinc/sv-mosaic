import styled from "styled-components";

// Components
import CheckboxList from "../../components/CheckboxList";

// Material UI
import { default as MUIFormHelperText } from "@material-ui/core/FormHelperText";
import { default as MUIErrorOutlineIcon } from "@material-ui/icons/ErrorOutline";

// Utils
import theme from "../../theme/theme";

export const StyledWrapper = styled.div`
  display: flex;
`;

export const LabelWrapper = styled.div`
  .MuiInputLabel-root {
    font-family: inherit;
    font-size: 16px;
    color: ${(pr) =>
		pr.disabled ? theme.colors.labelDisabled : theme.colors.almostBlack};
  }

  .MuiFormLabel-asterisk {
    color: ${theme.colors.red};
  }
`;

export const FieldWrapper = styled.div`
  font-family: ${theme.fontFamily};
  padding: 20px;
  background-color: ${pr =>
		pr.error ? theme.colors.lightRed : "transparent"};
`;

export const StyledCheckboxList = styled(CheckboxList)`
  &.MuiFormGroup-root {
    margin-left: -12px;
  }

  .MuiFormControlLabel-label {
    color: ${theme.colors.label};
  }
`;

export const StyledText = styled(MUIFormHelperText)`
  &.MuiFormHelperText-root {
    color: ${theme.colors.assistiveText};
    font-size: ${pr => (pr.error ? "12px" : "14px")};
    margin-top: ${pr => (!pr.error ? "8px" : null)};
    margin-bottom: ${pr => (!pr.error ? "8px" : null)};
  }

  &.MuiFormHelperText-root.Mui-error {
    color: ${theme.colors.red};
  }
`;

export const ErrorTextWrapper = styled.div`
  align-items: center;
  color: ${theme.colors.red};
  display: flex;
  flex-direction: row;
  margin-top: 8px;
`;

export const StyledErrorIcon = styled(MUIErrorOutlineIcon)`
	&.MuiSvgIcon-root {
		font-size: 16px;
		margin-right: 8px;
	}
`;
