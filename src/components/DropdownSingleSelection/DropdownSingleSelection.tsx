import * as React from "react";
import { memo } from "react";
import styled from "styled-components";

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { DropdownSingleSelectionProps } from "./DropdownSingleSelectionTypes";

const DropdownSingleSelection = (props: DropdownSingleSelectionProps) => (
	<Autocomplete
      id="combo-box-demo"
      options={props.options}
      getOptionLabel={(option) => option.label}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
    />
);

export default memo(DropdownSingleSelection);
