import * as React from 'react';
import { ReactElement, useState, Fragment } from 'react';

// Material UI
import TextField from '@material-ui/core/TextField';

// Components
import Chip from '../../components/Chip';
import Checkbox from '../../components/Checkbox';

// Types
import { FormFieldDropdownMultipleSelectionTypes } from './FormFieldDropdownMultipleSelectionTypes';
import { ChipsWrapper, StyledAutocomplete } from './FormFieldDropdownMultipleSelection.styled';

const FormFieldDropdownMultipleSelection = (
  props: FormFieldDropdownMultipleSelectionTypes
): ReactElement => {
  const {
    label,
    placeholder,
    required,
    disabled,
    helperText,
    instructionText,
    error,
    errorText,
    value,
    size,
    options,
    checked,
  } = props;

  const [selectedOptions, setSelectedOptions] = useState([]);

  const onDelete = (label) => () => {
    setSelectedOptions((value) => value.filter((v) => v.label !== label));
  };

  return (
    <div>
      <StyledAutocomplete
        multiple
        options={options}
        getOptionLabel={(option) => option.label}
        renderOption={(option, { selected }) => (
          <Fragment>
            <Checkbox
              checked={selected}
            />
            {option.label}
          </Fragment>
        )}
        value={selectedOptions}
        onChange={(e, newValue) => setSelectedOptions(newValue)}
        renderTags={() => null}
        renderInput={(params) => (
          <TextField {...params} variant='outlined' placeholder={placeholder} />
        )}
      />
      <ChipsWrapper>
        {selectedOptions.map((v) => (
          <Chip disabled={disabled} key={v.label} label={v.label} onDelete={onDelete(v.label)} />
        ))}
      </ChipsWrapper>
    </div>
  );
};

export default FormFieldDropdownMultipleSelection;
