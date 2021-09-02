import styled from 'styled-components';

// Material UI
import Autocomplete from '@material-ui/lab/Autocomplete';
import Popper from '@material-ui/core/Popper';

// Theme
import theme from '../../utils/theme.js';

export const ChipsWrapper = styled.div`
  margin-top: 8px;
  width: ${pr => pr.size};

  & > :not(:last-child) {
    margin-right: 12px;
  }

  & > * {
    margin-bottom: 8px;
  }
`;

export const FieldWrapper = styled.div`
  background-color: ${pr =>
		pr.error ? theme.colors.lightRed : 'transparent'};
  padding: 20px;
  width: fit-content;
`;

export const StyledAutocomplete = styled(Autocomplete)`
  & .MuiFormControl-fullWidth {
    width: ${pr => pr.size};
    height: 51px;
    margin-right: 60px;
  }

  & .MuiFormControl-root .MuiInputBase-root {
    background-color: ${theme.colors.gray100};
  }

  &
    .MuiFormControl-root
    .MuiInputBase-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    border: solid 1px ${theme.colors.gray800};
  }
`;

export const StyledPopper = styled(Popper)`
  .MuiAutocomplete-option {
    font-size: 14px;
    min-height: 40px;
    padding: 0;

    &:hover {
      background-color: ${theme.colors.grayHover};
    }
  }
`;

export const StyledInstructionText = styled.p`
  font-size: 14px;
  color: ${theme.colors.assistiveText};
  margin-top: 0px;
  margin-bottom: 0px;
  max-width: 400px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledLabel = styled.p`
  font-size: 16px;
  color: ${theme.colors.almostBlack};
  margin-top: 0px;
  margin-bottom: 8px;

  &:after {
    content: "${pr => (pr.required ? '*' : '')}";
    color: ${theme.colors.red};
  }
`;

export const StyledDisabledDropdownText = styled.p`
  color: ${theme.colors.assistiveText};
  margin-top: 15px;
`;
