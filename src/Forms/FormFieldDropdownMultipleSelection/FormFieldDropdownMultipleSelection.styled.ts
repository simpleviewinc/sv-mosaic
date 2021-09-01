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
  width: ${pr => pr.size};

  & .MuiFormControl-root .MuiInputBase-root {
		background-color: ${theme.colors.gray100};
	}

  & .MuiFormControl-root .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline {
		border: solid 1px ${theme.colors.gray800};
	}
`;

export const StyledPopper = styled(Popper)`
  .MuiAutocomplete-option{
    font-size: 14px;
    min-height: 40px;
    padding: 0;
  }
`;
