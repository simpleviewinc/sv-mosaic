import styled from "styled-components";

// Components
import CheckboxList from "../../CheckboxList";

// Material UI
import { default as MUIFormHelperText } from "@mui/material/FormHelperText";
import { default as MUIErrorOutlineIcon } from "@mui/icons-material/ErrorOutline";

// Utils
import theme from "../../../theme/theme";

export const StyledWrapper = styled.div`
  display: flex;
`;

export const StyledCheckboxList = styled(CheckboxList)`
  &.MuiFormGroup-root {
    margin-left: -12px;
		height: fit-content !important;
  }
`;

export const StyledText = styled(MUIFormHelperText)`
  &.MuiFormHelperText-root {
    color: ${theme.newColors.grey3["100"]};
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

export const StyledSkeletonWrapper = styled.div`
	display: flex;
	flex-flow: column;
`;

export const StyledSkeletonItem = styled.div`
	display: flex;
	align-items: center;
`;

export const StyledSkeletonCheckbox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 18px;
	height: 40px;
	margin-right: 14px;
`;
