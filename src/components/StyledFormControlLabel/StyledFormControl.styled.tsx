import styled from "styled-components";
import theme from "@root/theme";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const StyledFormControlLabel = styled(FormControlLabel)`
  opacity: ${pr => (pr.disabled ? 0.5 : 1)};

  &.MuiFormControlLabel-root {
    margin: 0;
  }

  .MuiFormControlLabel-label {
    color: ${theme.colors.label};
    font-family: ${theme.fontFamily};
    font-size: 16px;
  }

  .MuiFormControlLabel-label.Mui-disabled {
    color: ${theme.colors.label};
  }
`;

export default StyledFormControlLabel;
