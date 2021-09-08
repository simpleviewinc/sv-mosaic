import styled from 'styled-components';

// Material UI
import { default as MUIFormHelperText } from '@material-ui/core/FormHelperText';
import { default as MUIRadioGroup } from '@material-ui/core/RadioGroup';

// Utils
import theme from '../../theme/theme';

export const StyledInstructionText = styled(MUIFormHelperText)`
  &.MuiFormHelperText-root {
    color: ${theme.colors.assistiveText};
    font-size: 14px;
    margin: 0;
  }
`;

export const FieldWrapper = styled.div`
  font-family: ${theme.fontFamily};
  padding: 20px;
  background-color: ${(pr) =>
		pr.error ? theme.colors.lightRed : 'transparent'};
  width: fit-content;
`;

export const StyledRadioGroup = styled(MUIRadioGroup)`
  margin-left: -10px;
`;
