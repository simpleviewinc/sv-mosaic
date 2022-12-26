import styled from "styled-components";

// Components
import CheckboxList from "../../components/CheckboxList";

// Material UI
import { default as MUIFormHelperText } from "@mui/material/FormHelperText";
import { default as MUIErrorOutlineIcon } from "@mui/icons-material/ErrorOutline";

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
		pr.disabled ? theme.colors.labelDisabled : theme.newColors.almostBlack["100"]};
  }

  .MuiFormLabel-asterisk {
    color: ${theme.newColors.darkRed["100"]};
  }
`;

export const FieldWrapper = styled.div`
  font-family: ${theme.fontFamily};
  padding: 20px;
  background-color: ${pr =>
		pr.error ? theme.newColors.darkRed["20"] : "transparent"};
`;

export const StyledCheckboxList = styled(CheckboxList)`
  &.MuiFormGroup-root {
    margin-left: -12px;
		height: fit-content !important;
  }

  .MuiFormControlLabel-label {
    color: ${theme.newColors.grey4["100"]};

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
    color: ${theme.newColors.darkRed["100"]};
  }
`;

export const ErrorTextWrapper = styled.div`
  align-items: center;
  color: ${theme.newColors.darkRed["100"]};
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
