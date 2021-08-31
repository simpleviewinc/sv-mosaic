import styled from 'styled-components';

// Components
import Autocomplete from '@material-ui/lab/Autocomplete';

export const ChipsWrapper = styled.div`
  margin-top: 8px;
  & > :not(:last-child) {
    margin-right: 12px;
  }
  & > * {
    margin-bottom: 8px;
  }
`;

export const DropDownWrapper = styled.div``;

export const StyledAutocomplete = styled(Autocomplete)`
  &.MuiAutocomplete-listbox {
    background-color: red;
    & > li {
      padding: 0;
    }
  }
  .MuiAutocomplete-listbox {
    background-color: red;
  }
`;

export const StyledLabel = styled.span`
  font-size: 14px;
`;
