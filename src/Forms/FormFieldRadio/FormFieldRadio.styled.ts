import styled from 'styled-components';

// Material UI
import { default as MUIRadioGroup } from '@material-ui/core/RadioGroup';


export const StyledRadioGroup = styled(MUIRadioGroup)`
  margin-left: -12px;
`;

export const RadioGroupWrapper = styled.div`
  margin-top: ${pr => pr.instructionText ? '6px' : '-2px'};
`;
