import styled from "styled-components";
import theme from "@root/theme";
import FormControlLabel from "@mui/material/FormControlLabel";

const StyledFormControlLabel = styled(FormControlLabel)`
	& {
		margin: 0;
	}

	.MuiFormControlLabel-label {
		color: ${theme.newColors.grey4["100"]};
		font-size: ${theme.fontSize.text.lg};
	}

	.MuiFormControlLabel-label.Mui-disabled {
		color: ${theme.newColors.grey4["100"]};

	}
`;

export default StyledFormControlLabel;
