import styled from "styled-components";
import theme from "@root/theme";
import FormControlLabel from "@mui/material/FormControlLabel";

const StyledFormControlLabel = styled(FormControlLabel)`
  opacity: ${pr => (pr.disabled ? 0.5 : 1)};

  &.MuiFormControlLabel-root {
    margin: 0;
  }

  .MuiFormControlLabel-label {
    color: ${theme.newColors.grey4["100"]};
    font-size: 16px;
  }

  .MuiFormControlLabel-label.Mui-disabled {
    color: ${theme.newColors.grey4["100"]};

  }
`;

export default StyledFormControlLabel;
